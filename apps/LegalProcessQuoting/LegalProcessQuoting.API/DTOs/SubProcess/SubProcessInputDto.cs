namespace LegalProcessQuoting.API.DTOs.SubProcess;

public class SubProcessInputDto : IMapFrom<Domain.Models.SubProcess>
{
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public int LegalProcessId { get; set; }
}