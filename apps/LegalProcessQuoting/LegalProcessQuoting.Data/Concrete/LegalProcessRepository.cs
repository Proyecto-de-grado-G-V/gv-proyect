using LegalProcessQuoting.Data.Abstract;
using LegalProcessQuoting.Data.Contexts;
using LegalProcessQuoting.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace LegalProcessQuoting.Data.Concrete;

public class LegalProcessRepository : BaseRepository<LegalProcess, int>, ILegalProcessRepository
{
    public LegalProcessRepository(PostgreSqlContext dbContext) : base(dbContext)
    {
    }
    
    public async Task<LegalProcess?> GetByIdWithSubProcessesAsync(int processId)
    {
        return await _dbContext.Set<LegalProcess>()
            .Include(lp => lp.SubProcesses)
            .FirstOrDefaultAsync(lp => lp.Id == processId);
    }

}