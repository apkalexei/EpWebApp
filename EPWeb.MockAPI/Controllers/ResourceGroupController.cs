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
    public class ResourceGroupController : Controller
    {
        private readonly IResourceGroupRepository _repository;
        private readonly IMapper _mapper;
        public ResourceGroupController(IResourceGroupRepository repository, IMapper mapper)
        {
            this._mapper = mapper;
            this._repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetResourceGroups()
        {
            var resourceGroups = await _repository.GetResourceGroups();

            var resourceGroupsToReturn = _mapper.Map<IEnumerable<ResourceGroupForFilterDto>>(resourceGroups);

            return Ok(resourceGroupsToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetResourceGroup(int id)
        {
            var resourceGroup = await _repository.GetResourceGroup(id);

            if(resourceGroup == null)
                return NotFound();

            var resourceGroupToReturn = _mapper.Map<ResourceGroupForFilterDto>(resourceGroup);

            return Ok(resourceGroupToReturn);
        }
    }
}