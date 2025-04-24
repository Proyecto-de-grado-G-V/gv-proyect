using LegalProcessQuoting.Data.Abstract;
using LegalProcessQuoting.Data.Contexts;
using LegalProcessQuoting.Domain.Models;

namespace LegalProcessQuoting.Data.Concrete;

public class SubProcessRepository : BaseRepository<SubProcess, int>, ISubProcessRepository
{
    public SubProcessRepository(PostgreSqlContext dbContext) : base(dbContext)
    {
    }
}