using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.DataAccess;

public class AppDbContext : DbContext
{
    private readonly IConfiguration _configuration;

    public AppDbContext(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        string? connectionString = Environment.GetEnvironmentVariable("DOTNET_DbConnection") ?? _configuration.GetConnectionString("DbConnection");
        optionsBuilder.UseNpgsql(connectionString);
    }
}