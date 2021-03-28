using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MedicineTracker_WebAPI.DAL;
using MedicineTracker_WebAPI.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MedicineTracker_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineController : ControllerBase
    {
        private MedicineDbContext dbCtx;
        public MedicineController(MedicineDbContext context) {
            dbCtx = context;
        }
        // GET: api/<MedicineController>
        [HttpGet]
        public IEnumerable<Medicine> Get()
        {
            //.Medicines.ToList();
            return dbCtx.Medicines.ToList();
        }

        // GET api/<MedicineController>/5
        [HttpGet("GetById")]
        public Medicine Get(int id)
        {
            var medicine = dbCtx.Medicines.Find(id);
            return medicine;

        }

        // POST api/<MedicineController>
        [HttpPost]
        public IActionResult Post([FromBody] Medicine value)
        {
            dbCtx.Medicines.Add(value);
            dbCtx.SaveChanges();
            return Ok();
           
        }

        // PUT api/<MedicineController>/5
        [HttpPut]
        public IActionResult Put(int id, [FromBody] Medicine value)
        {
            var medicine = dbCtx.Medicines.Find(id);
            if (medicine != null) {
                medicine.Notes = value.Notes;
            }
            dbCtx.SaveChanges();
            var res = new Result() { Type = "Success", Message = "Record Updated SuccessFully" };
            return Ok();
        }

        // DELETE api/<MedicineController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
