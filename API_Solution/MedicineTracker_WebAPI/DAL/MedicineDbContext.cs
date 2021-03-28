using MedicineTracker_WebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace MedicineTracker_WebAPI.DAL
{
    public class MedicineDbContext:DbContext
    {
       public MedicineDbContext(DbContextOptions<MedicineDbContext> options) :base(options) { }

        public DbSet<Medicine> Medicines { get; set; }
    }
}
