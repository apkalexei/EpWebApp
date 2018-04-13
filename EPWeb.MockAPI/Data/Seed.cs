using System;
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

        public void SeedData() 
        {
            /* _context.Users.RemoveRange(_context.Users);
            _context.ResourceGroups.RemoveRange(_context.ResourceGroups);
            _context.Resources.RemoveRange(_context.Resources);
            _context.ResourceAllocations.RemoveRange(_context.ResourceAllocations);
            _context.SaveChanges(); */

            SeedResourceGroups();
            SeedResources();
            SeedResourceAllocations();
            SeedUsers();
        }

        private void SeedUsers() {

            var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
            var users = JsonConvert.DeserializeObject<List<User>>(userData);

            foreach (var user in users)
            {

                byte[] passwordHash, passwordSalt;
                CreatePasswordHash("password", out passwordHash, out passwordSalt);

                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
                user.Username = user.Username.ToLower();
                user.IsAllowed = true;

                _context.Users.Add(user);
            }

            _context.SaveChanges();
        }
        
        private void SeedResourceGroups()
        {

            var resourceGroupData = System.IO.File.ReadAllText("Data/ResourceGroupSeedData.json");
            var resourceGroups = JsonConvert.DeserializeObject<List<ResourceGroup>>(resourceGroupData);

            foreach (var resourceGroup in resourceGroups)
            {
                _context.ResourceGroups.Add(resourceGroup);
            }

            _context.SaveChanges();
        }
        private void SeedResources() 
        {

            var resourceData = System.IO.File.ReadAllText("Data/ResourceSeedData.json");
            var resources = JsonConvert.DeserializeObject<List<Resource>>(resourceData);

            foreach (var resource in resources)
            {
                _context.Resources.Add(resource);
            }

            _context.SaveChanges();
        }

        private void SeedResourceAllocations() 
        {

            var resAllocs = CreateResourceAllocations();

            foreach (var resAlloc in resAllocs)
            {
                _context.ResourceAllocations.Add(resAlloc);
            }

            _context.SaveChanges();
        }

        private List<ResourceAllocation> CreateResourceAllocations() 
        {
            var resAllocs = new List<ResourceAllocation>() {
                new ResourceAllocation { Id = 1, Name = "Directing 1", ResourceId = 1, StartDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day, 7, 30, 0), EndDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day, 9, 30, 0) },
                new ResourceAllocation { Id = 2, Name = "Directing 2", ResourceId = 1, StartDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day, 10, 30, 0), EndDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day, 13, 30, 0) },
                new ResourceAllocation { Id = 3, Name = "Directing 3", ResourceId = 1, StartDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day+1, 9, 30, 0), EndDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day+1, 11, 30, 0) },
                new ResourceAllocation { Id = 4, Name = "Directing 4", ResourceId = 1, StartDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day-1, 11, 30, 0), EndDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day-1, 13, 30, 0) },
                new ResourceAllocation { Id = 5, Name = "Directing 5", ResourceId = 2, StartDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day, 15, 30, 0), EndDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day, 16, 30, 0) },
                new ResourceAllocation { Id = 6, Name = "Directing 6", ResourceId = 2, StartDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day, 17, 30, 0), EndDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day, 18, 30, 0) },
                new ResourceAllocation { Id = 7, Name = "Directing 7", ResourceId = 2, StartDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day, 19, 30, 0), EndDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day, 20, 30, 0) }
            };

            return resAllocs;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}