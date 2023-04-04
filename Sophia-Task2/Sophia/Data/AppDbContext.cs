using Microsoft.EntityFrameworkCore;
using Sophia.Models;

namespace Sophia.Data
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Slider> Sliders { get; set; }
        public DbSet<SliderInfo> sliderInfos { get; set; }

    }
}
