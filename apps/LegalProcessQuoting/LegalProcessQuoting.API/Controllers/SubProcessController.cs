using AutoMapper;
using LegalProcessQuoting.Application.Abstract;
using LegalProcessQuoting.API.DTOs.SubProcess;
using LegalProcessQuoting.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace LegalProcessQuoting.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SubProcessController : ControllerBase
{
    private readonly ISubProcessService _subProcessService;
    private readonly IMapper _mapper;

    public SubProcessController(ISubProcessService subProcessService, IMapper mapper)
    {
        _subProcessService = subProcessService;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<SubProcessOutputDto>>> GetAllAsync()
    {
        var entities = await _subProcessService.GetAllAsync();
        var result = _mapper.Map<IEnumerable<SubProcessOutputDto>>(entities);
        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<SubProcessOutputDto>> GetByIdAsync(int id)
    {
        var entity = await _subProcessService.GetByIdAsync(id);
        if (entity == null) return NotFound();

        var result = _mapper.Map<SubProcessOutputDto>(entity);
        return Ok(result);
    }

    [HttpPost]
    public async Task<ActionResult<SubProcessOutputDto>> CreateAsync([FromBody] SubProcessInputDto dto)
    {
        var entity = _mapper.Map<SubProcess>(dto);
        var created = await _subProcessService.CreateAsync(entity);

        var result = _mapper.Map<SubProcessOutputDto>(created);
        return Created($"api/subprocess/{result.Id}", result);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<SubProcessOutputDto>> UpdateAsync(int id, [FromBody] SubProcessInputDto dto)
    {
        var entity = _mapper.Map<SubProcess>(dto);
        var updated = await _subProcessService.UpdateAsync(id, entity);

        if (updated == null) return NotFound();
        var result = _mapper.Map<SubProcessOutputDto>(updated);
        return Ok(result);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAsync(int id)
    {
        var deleted = await _subProcessService.SoftDeleteAsync(id);
        if (deleted < 1) return NotFound();
        return NoContent();
    }
}
