using CaseFiles.Application.Abstract;
using CaseFiles.Data.Concrete;
using CaseFiles.Domain.Models;

namespace CaseFiles.Application.Concrete;

public class LegalCaseFileService(ILegalCaseFileRepository repository)
    : BaseService<LegalCaseFile, Guid>(repository), ILegalCaseFileService;