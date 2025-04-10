using CaseFiles.Data.Contexts;
using CaseFiles.Domain.Models;

namespace CaseFiles.Data.Concrete;

public class LegalCaseFileRepository : BaseRepository<LegalCaseFile, Guid>, ILegalCaseFileRepository
{
    public LegalCaseFileRepository(PostgreSqlContext PostgreSQLContext) : base(PostgreSQLContext)
    {
    }
}