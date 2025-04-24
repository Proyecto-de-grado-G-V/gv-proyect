using LegalProcessQuoting.Domain.Models;

namespace LegalProcessQuoting.Data.Abstract;

public interface ILegalProcessRepository : IBaseRepository<LegalProcess, int>
{
    Task<LegalProcess?> GetByIdWithSubProcessesAsync(int processId);
}