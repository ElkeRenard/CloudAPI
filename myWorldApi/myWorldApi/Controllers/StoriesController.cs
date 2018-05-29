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
        public List<Story> getAll(string name, string country, string sort, string dir="asc")
        {
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
                        if (dir == "asc")
                            query = query.OrderBy(d => d.Country);
                        else if (dir == "desc")
                            query = query.OrderByDescending(d => d.Country);
                        break;
                    case "author":
                        if (dir == "asc")
                            query = query.OrderBy(d => d.Author);
                        else if (dir == "desc")
                            query = query.OrderByDescending(d => d.Author);
                        break;
                }
            }


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
            return NoContent();
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