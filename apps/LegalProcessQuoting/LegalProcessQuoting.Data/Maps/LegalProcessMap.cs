namespace LegalProcessQuoting.Data.Maps;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Domain.Models;

public class LegalProcessMap : IEntityTypeConfiguration<LegalProcess>
{
    public void Configure(EntityTypeBuilder<LegalProcess> builder)
    {
        builder.ToTable("LegalProcesses");

        builder.HasKey(lp => lp.Id);

        builder.Property(lp => lp.SubmatterType)
            .IsRequired()
            .HasConversion<string>()
            .HasMaxLength(50);
    }
}
