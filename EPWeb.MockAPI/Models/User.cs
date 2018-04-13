using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace EPWeb.MockAPI.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public ICollection<UserRoles> Roles { get; set; }    
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public bool IsAllowed { get; set; }

        public User()
        {
            Roles = new Collection<UserRoles>();
        }
    }
}