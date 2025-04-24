using LegalProcessQuoting.Application.Abstract;
using LegalProcessQuoting.Data.Abstract;
using LegalProcessQuoting.Domain.Models;

namespace LegalProcessQuoting.Application.Concrete;

public class SubProcessService : BaseService<SubProcess, int>, ISubProcessService
{
    public SubProcessService(ISubProcessRepository repository) : base(repository)
    {
    }
}