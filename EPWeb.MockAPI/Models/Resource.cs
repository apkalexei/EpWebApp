using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace EPWeb.MockAPI.Models
{
    public class Resource
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ResourceGroup ResourceGroup { get; set; }
        public ICollection<ResourceAllocation> ResourceAllocations { get; set; }

        public Resource()
        {
            ResourceAllocations = new Collection<ResourceAllocation>();
        }
    }
}