using LegalProcessQuoting.API.DTOs.SubProcess;
using LegalProcessQuoting.Domain.Models;

namespace LegalProcessQuoting.API.DTOs.LegalProcess;

public class LegalProcessInputDto : IMapFrom<Domain.Models.LegalProcess>
{
    public LegalSubmatterType SubmatterType { get; set; }
    //public List<SubProcessInputDto> SubProcesses { get; set; }
}