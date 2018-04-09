using System;

namespace EPWeb.MockAPI.DTOs
{
    public class ResourceAllocationDto
    {
        public int ResAllocId { get; set; }
        public string Text { get; set; }
        public int ResourceId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; } 
    }
}