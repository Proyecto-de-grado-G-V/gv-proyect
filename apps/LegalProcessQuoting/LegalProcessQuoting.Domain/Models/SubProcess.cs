namespace LegalProcessQuoting.Domain.Models;

public class SubProcess : BaseEntity<int>
{
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    
    public int LegalProcessId { get; set; }
    public LegalProcess LegalProcess { get; set; }
}
