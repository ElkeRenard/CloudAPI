using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using myWorldApi.models;

namespace myWorldApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Countries")]
    public class CountriesController : Controller
    {
        private readonly WorldContext context;

        public CountriesController(WorldContext context)
        {
            this.context = context;
        }

        [HttpGet]        
        public List<Country> getAll(string name, bool favourite, int? page, int? length)
        {
            var ppage = page ?? 1;
            var llength = length ?? 5;

            IQueryable < Country > query = context.Countries;
            if (!string.IsNullOrWhiteSpace(name))
                query = query.Where(d => d.Name.Contains(name));

            if (favourite)
                query = query.Where(d => d.Favourite == true);

            query = query.Skip((ppage - 1) * llength).Take(llength);

            return query.ToList();
        }

        //[EnableCors("AllowAll")]
        [HttpGet]
        [Route("{id}")]
        public IActionResult getCountryById(long id)
        {
            var country = context.Countries.Find(id);
            if (country == null)
                return NotFound();
            return Ok(country);
        }


        [HttpDelete]
        [Route("{id}")]
        public IActionResult deleteCountry(long id)
        {
            var country = context.Countries.Find(id);
            if (country == null)
                return NotFound();
            context.Countries.Remove(country);
            context.SaveChanges();
            return NoContent();
        }

        [HttpPost]
        public IActionResult addCountry([FromBody] Country newCountry)
        {
            newCountry.Favourite = false;
            context.Countries.Add(newCountry);
            context.SaveChanges();
            return Created("", newCountry);
        }

        [HttpPut]
        public IActionResult updateCountry([FromBody] Country countryIn)
        {

            var country = context.Countries.Find(countryIn.id);
            if (country == null)
                return NotFound();
            country.Favourite = countryIn.Favourite;
            context.SaveChanges();
            return Ok(country);
        }
    }
}