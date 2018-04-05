using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using EPWeb.MockAPI.Data;
using EPWeb.MockAPI.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EPWeb.MockAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class ResourceAllocationController : Controller
    {
        private readonly IResourceAllocationRepository _repository;
        private readonly IMapper _mapper;

        public ResourceAllocationController(IResourceAllocationRepository repository, IMapper mapper)
        {
            _mapper = mapper;
            _repository = repository;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetResourceAllocationsByResourceId (int id)
        {
            var resourceAllocations = await _repository.GetResourceAllocationsByResourceId(id);
            var resourceAllocationsToReturn = _mapper.Map<IEnumerable<ResourceAllocationDto>>(resourceAllocations);

            return Ok(resourceAllocationsToReturn);
        }
    }
}