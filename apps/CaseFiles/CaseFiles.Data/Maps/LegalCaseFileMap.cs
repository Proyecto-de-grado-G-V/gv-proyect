using CaseFiles.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CaseFiles.Data.Maps;

public class LegalCaseFileMap : IEntityTypeConfiguration<LegalCaseFile>
{
    public void Configure(EntityTypeBuilder<LegalCaseFile> builder)
    {
        builder.ToTable("LegalCaseFiles");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .IsRequired();

        builder.Property(x => x.Title)
            .IsRequired()
            .HasMaxLength(200);

        builder.Property(x => x.ClientFullName)
            .IsRequired()
            .HasMaxLength(150);

        builder.Property(x => x.CI)
            .IsRequired()
            .HasMaxLength(20);

        builder.Property(x => x.Age)
            .IsRequired();

        builder.Property(x => x.CreatedAt)
            .IsRequired();

        builder.Property(x => x.MatterType)
            .IsRequired()
            .HasConversion<string>() 
            .HasMaxLength(50);

        builder.Property(x => x.SubmatterType)
            .HasConversion<string>()
            .HasMaxLength(50)
            .IsRequired(false); 
    }
}