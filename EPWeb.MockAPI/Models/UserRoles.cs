namespace EPWeb.MockAPI.Models
{
    public class UserRoles
    {
        /* Model needed for EntityFramework to establish Many to Many relationship between User - Roles entities */
        public int UserId { get; set; }
        public User User { get; set; }  

        public int RoleId { get; set; }
        public Role Role { get; set; }
    }
}