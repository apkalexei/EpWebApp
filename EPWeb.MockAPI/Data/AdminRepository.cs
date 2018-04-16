using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        public async Task<ICollection<User>> GetNotAllowedUsers()
        {
            var users = await _context.Users.Where(x => x.IsAllowed == false).ToListAsync();
            return users;
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
    }
}