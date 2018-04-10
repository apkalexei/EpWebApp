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
    public class ResourceController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IResourceRepository _repository;
        public ResourceController(IResourceRepository repository, IMapper mapper)
        {
            this._repository = repository;
            this._mapper = mapper;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetResource(int id)
        {
            var resource = await _repository.GetResource(id);

            if(resource == null)
                return NotFound();

            var resourceToReturn = _mapper.Map<ResourceForFilterDto>(resource);

            return Ok(resourceToReturn);
        }

        [HttpGet("byResourceGroup/{id}")]
        public async Task<IActionResult> GetResourcesByResourceGroup(int id)
        {
            var resources = await _repository.GetResourcesByResourceGroupId(id);

            if(resources == null)
                return NotFound();

            var resourcesToReturn = _mapper.Map<IEnumerable<ResourceForFilterDto>>(resources);

            return Ok(resourcesToReturn);
        }


    }
}