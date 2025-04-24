using LegalProcessQuoting.Domain.Models;

namespace LegalProcessQuoting.Application.Abstract;

public interface ILegalProcessService : IBaseService<LegalProcess, int>
{
    Task<decimal> GetUpdatedPriceExcludingSubProcessesAsync(int processId, List<int> completedSubProcessIds);
}