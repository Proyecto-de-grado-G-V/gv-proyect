using Microsoft.EntityFrameworkCore;

namespace LegalProcessQuoting.Data.Contexts;

public class PostgreSqlContext(DbContextOptions<PostgreSqlContext> options) : DbContext(options)
{
    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfigurationsFromAssembly(typeof(PostgreSqlContext).Assembly);
        base.OnModelCreating(builder);
    }
}