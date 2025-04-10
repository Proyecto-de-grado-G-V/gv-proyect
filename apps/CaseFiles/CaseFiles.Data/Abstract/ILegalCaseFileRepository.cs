using CaseFiles.Data.Abstract;
using CaseFiles.Domain.Models;

namespace CaseFiles.Data.Concrete;

public interface ILegalCaseFileRepository : IBaseRepository<LegalCaseFile, Guid>
{
    
}