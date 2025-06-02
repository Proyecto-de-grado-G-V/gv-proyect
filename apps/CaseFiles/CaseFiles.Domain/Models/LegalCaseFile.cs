namespace CaseFiles.Domain.Models;

public class LegalCaseFile : BaseEntity<Guid>
{
    public string Title { get; set; }
    public string ClientFullName { get; set; }
    public string CI { get; set; }
    public int Age { get; set; }
    public LegalMatterType MatterType { get; set; }
    public LegalSubmatterType? SubmatterType { get; set; }
}
