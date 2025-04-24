namespace LegalProcessQuoting.API.DTOs.LegalProcess;

public class UpdatedPriceRequest
{
    public int ProcessId { get; set; }
    public List<int> CompletedSubProcessIds { get; set; } = new();
}
