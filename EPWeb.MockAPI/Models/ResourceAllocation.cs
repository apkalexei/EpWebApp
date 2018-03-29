using System;

namespace EPWeb.MockAPI.Models
{
    public class ResourceAllocation
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Resource Resource { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}