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
        string? connectionString = _configuration.GetConnectionString("DbConnection") ?? Environment.GetEnvironmentVariable("DOTNET_DbConnection");
        optionsBuilder.UseNpgsql(connectionString);
    }
}