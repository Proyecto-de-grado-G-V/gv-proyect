using CaseFiles.Domain.Models;

namespace CaseFiles.API.DTOs.LegalCaseFile;

public class LegalCaseFileOutputDto : IMapFrom<Domain.Models.LegalCaseFile>
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string ClientFullName { get; set; }
    public string CI { get; set; }
    public int Age { get; set; }
    public DateTime CreatedAt { get; set; }
    public LegalMatterType MatterType { get; set; }
    public LegalSubmatterType? SubmatterType { get; set; }
}