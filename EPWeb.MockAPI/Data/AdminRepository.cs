using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EPWeb.MockAPI.Helpers;
using EPWeb.MockAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EPWeb.MockAPI.Data
{
    public class AdminRepository : IAdminRepository
    {
        private readonly DataContext _context;
        public AdminRepository(DataContext context)
        {
            this._context = context;
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);
            return user;
        }

        public async Task<PagedList<User>> GetAllUsers(UserParams userParams)
        {
            var users = _context.Users;

            return await PagedList<User>.CreateAsync(users, userParams.PageNumber, userParams.PageSize);
        }

        public async Task<PagedList<User>> GetNotAllowedUsers(UserParams userParams)
        {
            var users = _context.Users.Where(x => x.IsAllowed == false);

            return await PagedList<User>.CreateAsync(users, userParams.PageNumber, userParams.PageSize);
        }

        public async Task<bool> ChangePassword(int userId, string password)
        {
            var user = await GetUser(userId);

            if (user == null)
                return false;

            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.PasswordSalt = passwordSalt;
            user.PasswordHash = passwordHash;

            if (await SaveAll())
                return true;

            return false;
        }

        public void DeleteUser(User user)
        {
             _context.Remove(user);
        }

        public string GetSystemVersionString()
        {
            var version = System.Reflection.Assembly.GetExecutingAssembly().GetName().Version.ToString();
            return version;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}