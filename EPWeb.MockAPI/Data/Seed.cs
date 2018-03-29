using System.Collections.Generic;
using EPWeb.MockAPI.Models;
using Newtonsoft.Json;

namespace EPWeb.MockAPI.Data
{
    public class Seed
    {
        private readonly DataContext _context;
        public Seed(DataContext context)
        {
            this._context = context;
        }

        public void SeedResourceGroups()
        {
            _context.ResourceGroups.RemoveRange(_context.ResourceGroups);
            _context.SaveChanges();

            var resourceGroupData = System.IO.File.ReadAllText("Data/ResourceGroupSeedData.json");
            var resourceGroups = JsonConvert.DeserializeObject<List<ResourceGroup>>(resourceGroupData);

            foreach (var resourceGroup in resourceGroups)
            {
                _context.ResourceGroups.Add(resourceGroup);
            }

            _context.SaveChanges();
        }
        public void SeedResources() 
        {
            _context.Resources.RemoveRange(_context.Resources);
            _context.SaveChanges();

            var resourceData = System.IO.File.ReadAllText("Data/ResourceSeedData.json");
            var resources = JsonConvert.DeserializeObject<List<Resource>>(resourceData);

            foreach (var resource in resources)
            {
                _context.Resources.Add(resource);
            }

            _context.SaveChanges();
        }
    }
}