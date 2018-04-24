using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Threading.Tasks;
using AutoMapper;
using EPWeb.MockAPI.Data;
using EPWeb.MockAPI.DTOs;
using EPWeb.MockAPI.Helpers;
using EPWeb.MockAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EPWeb.MockAPI.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin user, Super Admin user")]
    public class AdminController : Controller
    {
        private readonly IAdminRepository _repository;
        private readonly IMapper _mapper;
        public AdminController(IAdminRepository repository, IMapper mapper)
        {
            this._mapper = mapper;
            this._repository = repository;
        }

        [HttpGet("allUsers")]
        public async Task<IActionResult> GetAllUsers([FromQuery] UserParams userparams)
        {
            var usersFromRepo = await _repository.GetAllUsers(userparams);

            var usersToreturn = _mapper.Map<ICollection<UserForAdminListDto>>(usersFromRepo);

            Response.AddPagination(usersFromRepo.CurrentPage, usersFromRepo.PageSize, usersFromRepo.TotalCount, usersFromRepo.TotalPages);

            return Ok(usersToreturn);
        }

        [HttpGet("usersToAllow")]
        public async Task<IActionResult> GetNotAllowedUsers([FromQuery] UserParams userparams) 
        {
            var usersFromRepo = await _repository.GetNotAllowedUsers(userparams);

            var usersToReturn = _mapper.Map<ICollection<UserForAdminListDto>>(usersFromRepo);

            Response.AddPagination(usersFromRepo.CurrentPage, usersFromRepo.PageSize, usersFromRepo.TotalCount, usersFromRepo.TotalPages);

            return Ok(usersToReturn);
        }

        [HttpPut("users/allow/{id}")]
        public async Task<IActionResult> AllowUser(int id)
        {
            var userFromRepo = await _repository.GetUser(id);

            if (userFromRepo == null)
                return NotFound();

            if (userFromRepo.IsAllowed == true)
                return BadRequest($"User with ID of {id} has been already allowed.");

            userFromRepo.IsAllowed = true;

            if (await _repository.SaveAll())
                return NoContent();

            return BadRequest($"Failed to allow user with ID of {id}");
        }

        [HttpPut("users/changePassword")]
        public async Task<IActionResult> ChangePassword([FromBody] UserChangePassword user)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (await _repository.ChangePassword(user.Id, user.Password))
                return NoContent();

            return BadRequest($"Failed to change password for User with ID of {user.Id}");
        }

        [HttpDelete("users/delete/{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var userFromRepo = await _repository.GetUser(id);

            if (userFromRepo == null)
                return NotFound();

            _repository.DeleteUser(userFromRepo);

            if (await _repository.SaveAll())
                return NoContent();

            return BadRequest($"Failed to delete user with ID of {id}");
        }

        [AllowAnonymous]
        [HttpGet("version")]
        public IActionResult GetSystemVersion()
        {
            var version = _repository.GetSystemVersionString();
            return Ok(new { version });
        }
        
    }
}