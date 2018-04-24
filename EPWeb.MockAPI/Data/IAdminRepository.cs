using System.Collections.Generic;
using System.Threading.Tasks;
using EPWeb.MockAPI.Helpers;
using EPWeb.MockAPI.Models;

namespace EPWeb.MockAPI.Data
{
    public interface IAdminRepository
    {
         string GetSystemVersionString();

         Task<PagedList<User>> GetAllUsers(UserParams userParams);

         Task<User> GetUser(int id);

         Task<bool> ChangePassword(int userId, string password);

         void DeleteUser(User user);

         Task<bool> SaveAll();
    }
}