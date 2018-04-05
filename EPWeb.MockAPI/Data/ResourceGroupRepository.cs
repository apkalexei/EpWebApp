using System.Collections.Generic;
using System.Threading.Tasks;
using EPWeb.MockAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EPWeb.MockAPI.Data
{
    public class ResourceGroupRepository : IResourceGroupRepository
    {
        private readonly DataContext _context;
        public ResourceGroupRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<ResourceGroup> GetResourceGroup(int id)
        {
            var resourceGroup = await _context.ResourceGroups.FirstOrDefaultAsync(r => r.Id == id);
            return resourceGroup;
        }
        
        public async Task<IEnumerable<ResourceGroup>> GetResourceGroups()
        {
            var resourceGroups = await _context.ResourceGroups.ToListAsync();
            return resourceGroups;
        }
    }
}