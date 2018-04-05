using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EPWeb.MockAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EPWeb.MockAPI.Data
{
    public class ResourceRepository : IResourceRepository
    {
        private readonly DataContext _context;
        public ResourceRepository(DataContext context)
        {
            _context = context;
        }
        
        public async Task<Resource> GetResource(int id)
        {
            var resource = await _context.Resources.FirstOrDefaultAsync(r => r.Id == id);
            return resource;
        }

        public async Task<IEnumerable<Resource>> GetResourcesByResourceGroupId(int id)
        {
            var resource = await _context.Resources.Where(r => r.ResourceGroup.Id == id).ToListAsync();
            return resource;
        }
    }
}