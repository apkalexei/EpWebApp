using EPWeb.MockAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EPWeb.MockAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}