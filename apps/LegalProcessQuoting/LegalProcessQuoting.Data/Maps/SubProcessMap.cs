namespace LegalProcessQuoting.Data.Maps;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using LegalProcessQuoting.Domain.Models;

public class SubProcessMap : IEntityTypeConfiguration<SubProcess>
{
    public void Configure(EntityTypeBuilder<SubProcess> builder)
    {
        builder.ToTable("SubProcesses");

        builder.HasKey(sp => sp.Id);

        builder.Property(sp => sp.Name)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(sp => sp.Description)
            .HasMaxLength(500);

        builder.Property(sp => sp.Price)
            .HasColumnType("decimal(18,2)")
            .IsRequired();

        builder.HasOne(sp => sp.LegalProcess)
            .WithMany(lp => lp.SubProcesses)
            .HasForeignKey(sp => sp.LegalProcessId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
