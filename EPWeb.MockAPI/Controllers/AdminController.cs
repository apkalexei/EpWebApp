using System.Threading.Tasks;
using AutoMapper;
using EPWeb.MockAPI.Data;
using Microsoft.AspNetCore.Mvc;

namespace EPWeb.MockAPI.Controllers
{
    [Route("api/[controller]")]
    public class AdminController : Controller
    {
        private readonly IAdminRepository _repository;
        private readonly IMapper _mapper;
        public AdminController(IAdminRepository repository, IMapper mapper)
        {
            this._mapper = mapper;
            this._repository = repository;
        }

        /* [HttpGet("allow")]
        public async Task<IActionResult> GetNotAllowedUsers() 
        {
            var usersFromRepo = await _repository.GetNotAllowedUsers();
        } */

        [HttpGet("version")]
        public IActionResult GetSystemVersion()
        {
            var version = _repository.GetSystemVersionString();
            return Ok(new { version });
        }

    }
}