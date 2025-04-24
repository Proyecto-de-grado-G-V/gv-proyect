using LegalProcessQuoting.API.DTOs.SubProcess;
using LegalProcessQuoting.Domain.Models;

namespace LegalProcessQuoting.API.DTOs.LegalProcess;

public class LegalProcessOutputDto : IMapFrom<Domain.Models.LegalProcess>
{
    public int Id { get; set; }
    public LegalSubmatterType SubmatterType { get; set; }
    public List<SubProcessOutputDto> SubProcesses { get; set; }
    public decimal TotalPrice { get; set; }
}