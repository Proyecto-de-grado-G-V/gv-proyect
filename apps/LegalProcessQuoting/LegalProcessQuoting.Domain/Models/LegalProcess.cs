namespace LegalProcessQuoting.Domain.Models;

public class LegalProcess : BaseEntity<int>
{
    public LegalSubmatterType SubmatterType { get; set; } 
    public List<SubProcess> SubProcesses { get; set; } = new();

    public decimal TotalPrice => SubProcesses.Sum(sp => sp.Price);
}
