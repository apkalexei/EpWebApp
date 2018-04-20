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
        public async Task<IActionResult> GetResourceAllocationsByResourceId(int id)
        {
            var resourceAllocations = await _repository.GetResourceAllocationsByResourceId(id);
            var resourceAllocationsToReturn = _mapper.Map<IEnumerable<ResourceAllocationDto>>(resourceAllocations);

            return Ok(resourceAllocationsToReturn);
        }

        /* MOCK Controller method for client, has to be replaced later with proper method in repository */
        [HttpGet("detail/{id}")]
        public IActionResult GetResourceAllocationDetail(int id)
        {
            return Ok( new { 
                ProdId = $"Prod. ID is {id}", 
                ProdUnit = $"Prod. Unit ID is {id}",
                ProdStatus = $"Prod. Status for ID {id}",
                ProdKind = $"Prod. Kind for ID {id}",
                Customer = $"Customer for ID {id}",
                ContactPerson = $"Contact person for ID {id}",
                ProjectNote = $"Project note for ID {id}",
                NoteForPlanning = $"Note for planning for ID {id}"
            });
        }
    }
}