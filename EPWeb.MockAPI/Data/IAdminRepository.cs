using System.Collections.Generic;
using System.Threading.Tasks;
using EPWeb.MockAPI.Models;

namespace EPWeb.MockAPI.Data
{
    public interface IAdminRepository
    {
         string GetSystemVersionString();

         Task<ICollection<User>> GetNotAllowedUsers();

         Task<ICollection<User>> GetAllUsers();

         Task<User> GetUser(int id);

         void DeleteUser(User user);

         Task<bool> SaveAll();
    }
}