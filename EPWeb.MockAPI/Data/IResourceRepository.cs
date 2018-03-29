using System.Threading.Tasks;
using EPWeb.MockAPI.Models;

namespace EPWeb.MockAPI.Data
{
    public interface IResourceRepository
    {
         Task<Resource> GetResourceByResourceGroupId(int id);
         Task<Resource> GetResource(int id);
    }
}