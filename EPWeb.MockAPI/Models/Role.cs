using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace EPWeb.MockAPI.Models
{
    public class Role
    {
        public int RoleId { get; set; }
        public string Name { get; set; }
        public ICollection<UserRoles> Users { get; set; }

        public Role()
        {
            Users = new Collection<UserRoles>();
        }
    }
}