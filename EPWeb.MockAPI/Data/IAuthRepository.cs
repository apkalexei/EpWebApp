using System.Collections.Generic;
using System.Threading.Tasks;
using EPWeb.MockAPI.Models;

namespace EPWeb.MockAPI.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);

         Task<User> Login(string username, string password);

         Task<bool> UserExists(string username);

         Task<bool> IsEmailAdressTaken(string email);

         Task<bool> IsUserAllowed(int id);

         string GenerateJWTToken(int id, string username);

         Task<bool> SaveAll();
    }
}