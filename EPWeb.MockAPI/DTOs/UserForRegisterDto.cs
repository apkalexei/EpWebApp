using System.ComponentModel.DataAnnotations;

namespace EPWeb.MockAPI.DTOs
{
    public class UserForRegisterDto
    {
        [Required]
        [MinLength(6)]
        public string Username { get; set; }

        [Required]
        [MinLength(8)]
        public string Password { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}