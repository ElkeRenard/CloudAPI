using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myWorldApi.models
{
    public class WorldContext: DbContext
    {
        public WorldContext(DbContextOptions<WorldContext> options): base(options)
        {
        }

        public DbSet<Country> Countries { get; set; }
    }

    
}
