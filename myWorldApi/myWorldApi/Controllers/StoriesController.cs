using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using myWorldApi.models;

namespace myWorldApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Stories")]
    public class StoriesController : Controller
    {
        private readonly WorldContext context;

        public StoriesController(WorldContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Story> getAll(string name, string country, string sort, int? page, int? length)
        {
            var ppage = page ?? 1;
            var llength = length ?? 5;

            IQueryable<Story> query = context.Stories;
            if (!string.IsNullOrWhiteSpace(name))
                query = query.Where(d => d.Author.Contains(name));

            if (country != null)
                query = query.Where(d => d.Country == country);

            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "country":
                            query = query.OrderBy(d => d.Country);
                        break;
                    case "author":
                            query = query.OrderBy(d => d.Author);
                        break;
                }
            }

            query = query.Skip((ppage - 1) * llength).Take(llength);

            return query.ToList();
        }

        
        [HttpGet]
        [Route("{id}")]
        public IActionResult getStoryById(long id)
        {
            var story = context.Stories.Find(id);
            if (story == null)
                return NotFound();
            return Ok(story);
        }


        [HttpDelete]
        [Route("{id}")]
        public IActionResult deleteStory(long id)
        {
            var story = context.Stories.Find(id);
            if (story == null)
                return NotFound();
            context.Stories.Remove(story);
            context.SaveChanges();
            return Ok(context.Stories);
        }

        [HttpPost]
        public IActionResult addStory([FromBody] Story newStory)
        {
            context.Stories.Add(newStory);
            context.SaveChanges();
            return Created("", newStory);
        }

        [HttpPut]
        public IActionResult updateStory([FromBody] Story storyIn)
        {

            var story = context.Stories.Find(storyIn.Id);
            if (story == null)
                return NotFound();
            story.Country = storyIn.Country;
            story.StartDate = storyIn.StartDate;
            story.EndDate = storyIn.EndDate;
            story.Author = storyIn.Author;
            story.Travelstory = storyIn.Travelstory;
            context.SaveChanges();
            return Ok(story);
        }
    }
}