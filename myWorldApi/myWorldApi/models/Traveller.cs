using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myWorldApi.models
{
    public class Traveller
    {
        public long Id { get; set; }
        public string Name { get; set; }
        [JsonIgnore]
        public ICollection<Story> Stories { get; set; }
    }
}
