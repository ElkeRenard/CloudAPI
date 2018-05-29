using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myWorldApi.models
{
    public class Story
    {
        public long Id { get; set; }
        public Country Country { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public Traveller Author { get; set; }
        public string Travelstory { get; set; }
    }
}
