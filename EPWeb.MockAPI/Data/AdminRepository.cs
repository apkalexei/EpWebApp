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

        public async void AllowUser(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);
            user.IsAllowed = true;
            Complete();
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

        private async void Complete() 
        {
            await _context.SaveChangesAsync();
        }
    }
}