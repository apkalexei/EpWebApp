using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace EPWeb.MockAPI.Models
{
    public class ResourceGroup
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Resource> Resources { get; set; }

        public ResourceGroup()
        {
            Resources = new Collection<Resource>();
        }
    }
}