﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        public List<Country> getAll()
        {
            return context.Countries.ToList();
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult getCountryById(long id)
        {
            var country = context.Countries.Find(id);
            if (country == null)
                return NotFound();
            return Ok(country);
        }

        [HttpGet]
        [Route("{name}")]
        public IActionResult searchCountries(string name) { 
            IQueryable<Country> query = context.Countries;

            if (!string.IsNullOrWhiteSpace(name))
                query = query.Where(d => d.Name == name);
            return Ok(query);
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
            context.Countries.Add(newCountry);
            context.SaveChanges();
            return Created("", newCountry);
        }

        [HttpPut]
        public IActionResult updateCountry([FromBody] Country countryIn, [FromBody] Boolean favorite)
        {

            var country = context.Countries.Find(countryIn.id);
            if (country == null)
                return NotFound();
            context.SaveChanges();
            return Ok(country);
        }
    }
}