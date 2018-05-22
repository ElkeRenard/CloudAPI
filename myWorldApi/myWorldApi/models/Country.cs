using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myWorldApi.models
{
    public class Country
    {
        public long id { get; set; }
        public string Name { get; set; }
        public string Alpha2Code { get; set; }
        public string Alpha3Code { get; set; }
        public string NativeName { get; set; }
        public string Region { get; set; }
        public string SubRegion { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public double Area { get; set; }
        public int NumericCode { get; set; }
        public string NativeLanguage { get; set; }
        public string CurrencyCode { get; set; }
        public string CurrencyName { get; set; }
        public string CurrencySymbol { get; set; }
        public string Flag { get; set; }
        public string FlagPng { get; set; }

    }
}
