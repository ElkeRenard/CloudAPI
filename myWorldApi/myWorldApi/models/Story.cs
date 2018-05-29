using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myWorldApi.models
{
    public class Story
    {
        public long Id { get; set; }
        public string Country { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string Author { get; set; }
        public string Travelstory { get; set; }
    }
}
