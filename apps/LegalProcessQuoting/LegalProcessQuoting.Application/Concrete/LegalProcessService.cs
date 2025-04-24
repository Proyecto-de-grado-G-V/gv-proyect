using LegalProcessQuoting.Application.Abstract;
using LegalProcessQuoting.Data.Abstract;
using LegalProcessQuoting.Domain.Models;

namespace LegalProcessQuoting.Application.Concrete;

public class LegalProcessService : BaseService<LegalProcess, int>, ILegalProcessService
{
    private readonly ILegalProcessRepository _processRepository;

    public LegalProcessService(ILegalProcessRepository processRepository) : base(processRepository)
    {
        _processRepository = processRepository;
    }

    public async Task<decimal> GetUpdatedPriceExcludingSubProcessesAsync(int processId, List<int> completedSubProcessIds)
    {
        var process = await _processRepository
            .GetByIdWithSubProcessesAsync(processId); 

        if (process == null)
            throw new Exception($"Process Not Found {processId}");

        var remainingSubProcesses = process.SubProcesses
            .Where(sp => !completedSubProcessIds.Contains(sp.Id))
            .ToList();

        return remainingSubProcesses.Sum(sp => sp.Price);
    }

    public override async Task<LegalProcess?> GetByIdAsync(int id)
    {
        return await _processRepository.GetByIdWithSubProcessesAsync(id);
    }
}
