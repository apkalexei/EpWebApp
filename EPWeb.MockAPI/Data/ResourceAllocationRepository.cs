using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EPWeb.MockAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EPWeb.MockAPI.Data
{
    public class ResourceAllocationRepository : IResourceAllocationRepository
    {
        private readonly DataContext _context;
        public ResourceAllocationRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ResourceAllocation>> GetResourceAllocationsByResourceId(int id)
        {
            var resourceAllocations = await _context.ResourceAllocations
                                        .Where(r => r.ResourceId == id)
                                        .ToListAsync();
                                        
            return resourceAllocations;
        }

    }
}