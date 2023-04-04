using Microsoft.AspNetCore.Mvc;
using Sophia.Data;
using Sophia.Models;
using System.Diagnostics;

namespace Sophia.Controllers
{
    public class HomeController : Controller
    {
        private readonly AppDbContext _context;
        public HomeController(AppDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            List<Slider> sliders = _context.Sliders.ToList();
            SliderInfo sliderInfo = _context.sliderInfos.FirstOrDefault();
            return View(sliders);
        }
    }
}