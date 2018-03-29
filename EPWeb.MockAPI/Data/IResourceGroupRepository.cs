using System.Collections.Generic;
using System.Threading.Tasks;
using EPWeb.MockAPI.Models;

namespace EPWeb.MockAPI.Data
{
    public interface IResourceGroupRepository
    {
         Task<IEnumerable<ResourceGroup>> GetResourceGroups();
         Task<ResourceGroup> GetResourceGroup(int id);
    }
}