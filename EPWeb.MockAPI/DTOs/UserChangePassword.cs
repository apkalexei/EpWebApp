using System.ComponentModel.DataAnnotations;

namespace EPWeb.MockAPI.DTOs
{
    public class UserChangePassword
    {
        [Required]
        public int Id { get; set; }
        
        [Required]
        [MinLength(8)]
        public string Password { get; set; }
    }
}