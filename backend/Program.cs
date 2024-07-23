using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;
using backend.DataAccess;
using backend.Helpers;
using backend.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services
    .AddAuthentication(x =>
    {
        x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddJwtBearer(x =>
    {
        x.RequireHttpsMetadata = false;
        x.SaveToken = true;
        x.TokenValidationParameters = new TokenValidationParameters
        {
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(AuthSettings.PrivateKey)),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    }).Services.AddAuthorization(options =>
        {
            options.AddPolicy("Admin", policy => policy.RequireRole("admin"));
        }
    );

builder.Configuration.AddEnvironmentVariables();

builder.Services.AddScoped<AppDbContext>();
builder.Services.AddTransient<AuthService>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
builder.Services.AddAuthorization();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1.0.0", new OpenApiInfo { Title = "Sea Battle", Version = "v1.0.0" });

    var securityScheme = new OpenApiSecurityScheme
    {
        Name = "JWT Authentication",
        Description = "Введите свой JWT-токен",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.Http,
        Scheme = "bearer",
        BearerFormat = "JWT"
    };

    c.AddSecurityDefinition("Bearer", securityScheme);

    var securityRequirement = new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] {}
        }
    };

    c.AddSecurityRequirement(securityRequirement);
});

var app = builder.Build();

app.UsePathBase("/api");

app.UseAuthentication();
app.UseAuthorization();

using var scope = app.Services.CreateScope();
await using var usersDbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
await usersDbContext.Database.EnsureCreatedAsync();

app.UseSwagger(c =>
{
    c.RouteTemplate = "api/{documentName}/swagger.json";
});
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/api/v1.0.0/swagger.json", "Sea Battle Version 1.0.0");
    c.RoutePrefix = "api/swagger-ui";
});


app.MapSwagger("/api/{documentName}/swagger.{json|yaml}");
app.MapControllers();

app.Run();