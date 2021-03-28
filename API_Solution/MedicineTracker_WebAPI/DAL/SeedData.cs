using MedicineTracker_WebAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MedicineTracker_WebAPI.DAL
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new MedicineDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<MedicineDbContext>>()))
            {
                // Look for any board games.
                if (context.Medicines.Any())
                {
                    return;   // Data was already seeded
                }

                context.Medicines.AddRange(
                    new Medicine
                    {
                        Id = 1,
                        Name = "Test Medicine 1",
                        Brand = "ABCD",
                        Quantity = 15,
                        Price = 40.20,
                        ExpiryDate = DateTime.Now.AddDays(5),
                        Notes = "Test Notes"
                        
                    },
                    new Medicine
                    {
                        Id = 2,
                        Name = "Test Medicine 2",
                        Brand = "CIPLA",
                        Quantity = 5,
                        Price = 40.20,
                        ExpiryDate = DateTime.Now.AddDays(5),
                        Notes = "Test Notes"

                    },
                    new Medicine
                    {
                        Id = 3,
                        Name = "Medicine 3",
                        Brand = "CIPLA",
                        Quantity = 15,
                        Price = 40.20,
                        ExpiryDate = DateTime.Now.AddDays(5),
                        Notes = "Test Notes"

                    },
                    new Medicine
                    {
                        Id = 4,
                        Name = "Medicine 4",
                        Brand = "CIPLA",
                        Quantity = 15,
                        Price = 40.20,
                        ExpiryDate = DateTime.Now.AddDays(5),
                        Notes = "Test Notes"

                    },
                    new Medicine
                    {
                        Id = 5,
                        Name = "Test Medicine 5",
                        Brand = "CIPLA",
                        Quantity = 15,
                        Price = 40.20,
                        ExpiryDate = DateTime.Now.AddDays(5),
                        Notes = "Test Notes"

                    },
                    new Medicine
                    {
                        Id = 6,
                        Name = "Test Medicine 6",
                        Brand = "CIPLA",
                        Quantity = 15,
                        Price = 40.20,
                        ExpiryDate = DateTime.Now.AddDays(5),
                        Notes = "Test Notes"

                    },
                    new Medicine
                    {
                        Id = 7,
                        Name = "Test Medicine 7",
                        Brand = "Medorma",
                        Quantity = 15,
                        Price = 100.20,
                        ExpiryDate = DateTime.Now.AddDays(40),
                        Notes = "Test Notes"

                    },
                    new Medicine
                    {
                        Id = 8,
                        Name = "Test Medicine 8",
                        Brand = "CIPLA",
                        Quantity = 15,
                        Price = 40.20,
                        ExpiryDate = DateTime.Now.AddDays(8),
                        Notes = "Test Notes"

                    },
                    new Medicine
                    {
                        Id = 9,
                        Name = "Test Medicine 9",
                        Brand = "MediCare",
                        Quantity = 9,
                        Price = 60.20,
                        ExpiryDate = DateTime.Now.AddDays(35),
                        Notes = "Test Notes"

                    },
                    new Medicine
                    {
                        Id = 10,
                        Name = "Test Medicine 10",
                        Brand = "CIPLA",
                        Quantity = 15,
                        Price = 40.20,
                        ExpiryDate = DateTime.Now.AddDays(10),
                        Notes = "Test Notes"

                    }
                   ); ;

                context.SaveChanges();
            }
        }
    }
}
