using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace EPWeb.MockAPI.Controllers
{
    public class Fallback : Controller
    {
        /* This controller is being called inside of the startup.cs and allows Angular routing across ASP.NET application */
        public IActionResult Index()   
        {
            return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html"), "text/HTML");
        }
    }
}