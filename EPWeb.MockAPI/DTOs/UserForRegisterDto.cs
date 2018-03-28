using System.ComponentModel.DataAnnotations;

namespace EPWeb.MockAPI.DTOs
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}