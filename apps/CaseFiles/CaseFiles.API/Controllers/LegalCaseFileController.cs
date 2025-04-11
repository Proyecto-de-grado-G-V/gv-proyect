using AutoMapper;
using CaseFiles.API.DTOs.LegalCaseFile;
using CaseFiles.Application.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace CaseFiles.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LegalCaseFileController : ControllerBase
{
    private readonly ILegalCaseFileService _legalCaseFileService;
    private readonly IMapper _mapper;

    public LegalCaseFileController(ILegalCaseFileService legalCaseFileService, IMapper mapper)
    {
        _legalCaseFileService = legalCaseFileService;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<LegalCaseFileOutputDto>>> GetAllAsync()
    {
        var entities = await _legalCaseFileService.GetAllAsync();
        var result = _mapper.Map<IEnumerable<LegalCaseFileOutputDto>>(entities);
        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<LegalCaseFileOutputDto>> GetByIdAsync(Guid id)
    {
        var entity = await _legalCaseFileService.GetByIdAsync(id);
        if (entity == null) return NotFound();

        var result = _mapper.Map<LegalCaseFileOutputDto>(entity);
        return Ok(result);
    }

    [HttpPost]
    public async Task<ActionResult<LegalCaseFileOutputDto>> CreateAsync([FromBody] LegalCaseFileInputDto dto)
    {
        var entity = _mapper.Map<Domain.Models.LegalCaseFile>(dto);
        var created = await _legalCaseFileService.CreateAsync(entity);

        var result = _mapper.Map<LegalCaseFileOutputDto>(created);
        return Created($"api/legalcasefile/{result.Id}", result);

    }

    [HttpPut("{id:guid}")]
    public async Task<ActionResult<LegalCaseFileOutputDto>> UpdateAsync(Guid id, [FromBody] LegalCaseFileInputDto dto)
    {
        var entity = _mapper.Map<Domain.Models.LegalCaseFile>(dto);
        var updated = await _legalCaseFileService.UpdateAsync(id, entity);

        if (updated == null) return NotFound();

        var result = _mapper.Map<LegalCaseFileOutputDto>(updated);
        return Ok(result);
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> DeleteAsync(Guid id)
    {
        var success = await _legalCaseFileService.SoftDeleteAsync(id);
        if (success == 0) return NotFound();
        return NoContent();
    }
}
