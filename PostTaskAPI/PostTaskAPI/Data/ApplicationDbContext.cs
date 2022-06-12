

using Microsoft.EntityFrameworkCore;

namespace PostTaskAPI.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<ProductItems> ProductItems { get; set; }
       
    }
}
