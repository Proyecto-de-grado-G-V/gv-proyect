using AutoMapper;
using LegalProcessQuoting.Application.Abstract;
using LegalProcessQuoting.API.DTOs.LegalProcess;
using LegalProcessQuoting.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace LegalProcessQuoting.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LegalProcessController : ControllerBase
{
    private readonly ILegalProcessService _legalProcessService;
    private readonly IMapper _mapper;

    public LegalProcessController(ILegalProcessService legalProcessService, IMapper mapper)
    {
        _legalProcessService = legalProcessService;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<LegalProcessOutputDto>>> GetAllAsync()
    {
        var entities = await _legalProcessService.GetAllAsync();
        var result = _mapper.Map<IEnumerable<LegalProcessOutputDto>>(entities);
        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<LegalProcessOutputDto>> GetByIdAsync(int id)
    {
        var entity = await _legalProcessService.GetByIdAsync(id);
        if (entity == null) return NotFound();

        var result = _mapper.Map<LegalProcessOutputDto>(entity);
        return Ok(result);
    }

    [HttpPost]
    public async Task<ActionResult<LegalProcessOutputDto>> CreateAsync([FromBody] LegalProcessInputDto dto)
    {
        var entity = _mapper.Map<LegalProcess>(dto);
        var created = await _legalProcessService.CreateAsync(entity);

        var result = _mapper.Map<LegalProcessOutputDto>(created);
        return Created($"/api/legalprocess/{result.Id}", result);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<LegalProcessOutputDto>> UpdateAsync(int id, [FromBody] LegalProcessInputDto dto)
    {
        var entity = _mapper.Map<LegalProcess>(dto);
        var updated = await _legalProcessService.UpdateAsync(id, entity);

        if (updated == null) return NotFound();
        var result = _mapper.Map<LegalProcessOutputDto>(updated);
        return Ok(result);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAsync(int id)
    {
        var deleted = await _legalProcessService.SoftDeleteAsync(id);
        if (deleted < 1) return NotFound();
        return NoContent();
    }

    [HttpPost("updated-price")]
    public async Task<IActionResult> GetUpdatedPriceExcludingSubProcesses([FromBody] UpdatedPriceRequest request)
    {
        var price = await _legalProcessService
            .GetUpdatedPriceExcludingSubProcessesAsync(request.ProcessId, request.CompletedSubProcessIds);
        return Ok(new { UpdatedPrice = price });
    }
}
