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
            this._context = context;
        }
        
        public async Task<Resource> GetResource(int id)
        {
            var resource = await _context.Resources.FirstOrDefaultAsync(r => r.Id == id);
            return resource;
        }

        public async Task<Resource> GetResourceByResourceGroupId(int id)
        {
            var resource = await _context.Resources.FirstOrDefaultAsync(r => r.ResourceGroup.Id == id);
            return resource;
        }
    }
}