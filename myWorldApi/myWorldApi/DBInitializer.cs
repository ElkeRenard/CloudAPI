using myWorldApi.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myWorldApi
{
    public class DBInitializer
    {
        public static void Initialize(WorldContext context)
        {
            context.Database.EnsureCreated();

            if (!context.Countries.Any())
            {
                var country1 = new Country()
                {
                    Name = "Belize",
                    Alpha2Code = "BZ",
                    Alpha3Code = "BLZ",
                    NativeName = "Belize",
                    Region = "Americas",
                    SubRegion = "Central America",
                    Latitude = 17.25,
                    Longitude = -88.75,
                    Area = 22966,
                    NumericCode = 84,
                    NativeLanguage = "eng",
                    CurrencyCode = "BZD",
                    CurrencyName = "Belize dollar",
                    CurrencySymbol = "$",
                    Flag = "https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlags/blz.svg",
                    FlagPng = "https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/blz.png",
                    Favourite = false
                };

                var country2 = new Country()
                {
                    Name = "Costa Rica",
                    Alpha2Code = "CR",
                    Alpha3Code = "CRI",
                    NativeName = "Costa Rica",
                    Region = "Americas",
                    SubRegion = "Central America",
                    Latitude = 10,
                    Longitude = -84,
                    Area = 51100,
                    NumericCode = 188,
                    NativeLanguage = "spa",
                    CurrencyCode = "CRC",
                    CurrencyName = "Costa Rican colón",
                    CurrencySymbol = "₡",
                    Flag = "https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlags/cri.svg",
                    FlagPng = "https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/cri.png",
                    Favourite = true
                };

                var author1 = new Traveller()
                {
                    Name = "Elke"
                };

                var author2 = new Traveller()
                {
                    Name = "Floor"
                };

                var story1 = new Story()
                {
                    Country = "Nederland",
                    StartDate = "18/10/20216",
                    EndDate = "18/09/2016",
                    Author = "floor",
                    Travelstory = "We gingen de eendjes eten geven en dan naar het rampolinepark."

                };

                var story2 = new Story()
                {
                    Country = "Kribati",
                    StartDate = "24/05/2017",
                    EndDate = "25/05/2017",
                    Author = "elke",
                    Travelstory = "Tijdens het snorkelen zagen we veel felgekleurde visjes en mooie koralen. We hebben ook enkele lege schelpen opgevist."

                };
                context.Travellers.Add(author1);
                context.Travellers.Add(author1);
                context.Stories.Add(story1);
                context.Stories.Add(story2);
                context.Countries.Add(country1);
                context.Countries.Add(country2);
                context.SaveChanges();
            }
        }
    }
}
