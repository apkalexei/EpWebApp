using System.Collections.Generic;
using System.Threading.Tasks;
using EPWeb.MockAPI.Models;

namespace EPWeb.MockAPI.Data
{
    public interface IResourceRepository
    {
         Task<IEnumerable<Resource>> GetResourcesByResourceGroupId(int id);
         Task<Resource> GetResource(int id);
    }
}