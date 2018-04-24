using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Threading.Tasks;
using System.Web;
using AutoMapper;
using EPWeb.MockAPI.Data;
using EPWeb.MockAPI.DTOs;
using EPWeb.MockAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace EPWeb.MockAPI.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IAuthRepository _repository;
        private readonly IMapper _mapper;

        public AuthController(IAuthRepository repository, IMapper mapper)
        {
            this._mapper = mapper;
            this._repository = repository;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]UserForRegisterDto userForRegisterDto)
        {

            if (!string.IsNullOrEmpty(userForRegisterDto.Username))
                userForRegisterDto.Username = userForRegisterDto.Username.ToLower();

            if (await _repository.UserExists(userForRegisterDto.Username))
                ModelState.AddModelError("Username", "Username already exists");

            if (await _repository.IsEmailAdressTaken(userForRegisterDto.Email))
                ModelState.AddModelError("Email", "Email adress is already taken");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var userToCreate = new User
            {
                Username = userForRegisterDto.Username,
                Email = userForRegisterDto.Email,
            };

            var createUser = await _repository.Register(userToCreate, userForRegisterDto.Password);

            if (await _repository.SaveAll()) 
            {
                _repository.SetDefaultRole(createUser.Id);
                return StatusCode(201);
            }

            return BadRequest("Could not create a new user.");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]UserForLoginDto userForLoginDto)
        {
            if (!string.IsNullOrEmpty(userForLoginDto.Username))
                userForLoginDto.Username = userForLoginDto.Username.ToLower();

            var userFromRepo = await _repository.Login(userForLoginDto.Username, userForLoginDto.Password);

            if (userFromRepo == null)
                return StatusCode(401, "Wrong username or password. Please try again.");

            var roles = _repository.GetRoles(userFromRepo);

            var roles = _repository.GetRoles(userFromRepo);

            if (!await _repository.IsUserAllowed(userFromRepo.Id))
                return BadRequest("Entered user has not been allowed by the system administrator yet");

            var tokenString = _repository.GenerateJWTToken(userFromRepo.Id, userFromRepo.Username, roles);

            var user = _mapper.Map<UserForReturnDto>(userFromRepo);

            return Ok(new { tokenString, user, roles });
        }

    }
}