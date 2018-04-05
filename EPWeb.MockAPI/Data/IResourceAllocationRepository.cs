using System.Collections.Generic;
using System.Threading.Tasks;
using EPWeb.MockAPI.Models;

namespace EPWeb.MockAPI.Data
{
    public interface IResourceAllocationRepository
    {
         Task<IEnumerable<ResourceAllocation>> GetResourceAllocationsByResourceId(int id);
    }
}