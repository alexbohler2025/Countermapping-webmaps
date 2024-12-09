var config = {
    style: 'mapbox://styles/alexbohler2025/cm4ase4ol00e701qo3k9y1bre',
    accessToken: 'pk.eyJ1IjoiYWxleGJvaGxlcjIwMjUiLCJhIjoiY200OWFtY3d5MDI2MzJxcTVuZm1tMDZqMSJ9.WKWu-sRaEeyndzuLGIa2Og',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Flooded History',
    subtitle: 'How Sea Level Rise could effect the historic landmarks of New York City',
    byline: 'Alex Bohler',
    para1: 'Due primarily to human activity, global temperatures have been artifically rising the past 150 years, and will continue to rise in the future. This rise in temperature is also causing sea levels to rise. The IPCC currently forecasts that average sea level worldwide could rise anywhere from 2.5 feet to 7.5 feet by 2100, depending mostly on how well humanity curbs its carbon emissions. With roughly 10% of the population of the world living in coastal and low-lying areas, this rise in sea level will have major effects. One area of infrastructure that often gets little attention is historic buildings, sites, and landmarks. These locations are particularly at risk from sea level rise.',
    para2: 'Settled by the Dutch in 1624, New York City has 400 years of history. Today, it contains over 38,000 properties labeled historic, spread across 157 historic districts and 1,463 individual landmarks. Located on low-lying land at the mouth of the Hudson River, sea level rise is a major threat to NYC. Resiliency plans for the future are being constructed and put into motion right now. This storymap explores what historic sites in NYC would be at risk with 6 feet of sea level rise, showing the need for their preservation to be a part of resiliency planning.',
    footer: 'GIS Data Sources: <br> <a href="https://coast.noaa.gov/slrdata/index.html" target="_blank"> NOAA Sea Level Rise Viewer GIS Data</a> <br> <a href="https://data.cityofnewyork.us/Housing-Development/LPC-Individual-Landmark-and-Historic-District-Buil/7mgd-s57w" target="_blank"> NYC Open Data: Individual Landmarks and Historic Districts Database </a> <br> <a href="https://data.cityofnewyork.us/Housing-Development/Historic-Districts/xbvj-gfnw" target="_blank"> NYC Open Data: Historic Districts </a> <br> Sea level rise background: <br> <a href="https://www.ipcc.ch/srocc/chapter/chapter-4-sea-level-rise-and-implications-for-low-lying-islands-coasts-and-communities/" target="_blank"> IPCC AR6 Chapter 4: Sea Level Rise and Implications for Lowlying Islands, Coasts, and Communities </a> <br> <a href="https://nyaspubs.onlinelibrary.wiley.com/doi/10.1111/nyas.15150?af=R" target="_blank"> New York City Panel on Climate Change 4th Assessment Climate Risk and Equity: Advancing Knowledge Toward a Sustainable Future </a> <br> <a href="https://tidesandcurrents.noaa.gov/sltrends/sltrends_station.shtml?id=8518750" target="_blank"> NOAA: Relative Sea Level Rise at the Battery, New York </a> <br> <a href="https://climate.nasa.gov/vital-signs/global-temperature/" target="_blank"> NASA: Global Temperature </a> <br> <a href="https://climate.cityofnewyork.us/subtopics/coastal-infrastructure/#:~:text=The%20Financial%20District%20and%20Seaport,storms%20and%20sea%20level%20rise." target="_blank"> NYC Risiliency Projects </a> <br> Ellis Island sources  <br> <a href="https://www.nationalparks.org/explore/parks/ellis-island-national-monument" target="_blank">Ellis Island National Monument</a> <br> <a href="https://www.nps.gov/elis/after-the-storm-at-ellis-island.htm" target="_blank">Ellis Island and Hurricane Sandy</a> <br> South Street Seaport sources: <br> <a href="https://theseaport.nyc/history/" target="_blank"> Seaport History </a> <br> <a href="https://theseaport.nyc/blog/the-seaport-during-superstorm-sandy/" target="_blank">Seaport and Hurricane Sandy </a> <br> <a href="https://southstreetseaportmuseum.org/seaport-architectural-gems/" target="_blank">Seaport Architecture </a> <br> <a href="https://6tocelebrate.org/site/captain-joseph-rose-house/" target="_blank">Captain John Rose House </a> <br> Fraunces Tavern sources: <br> <a href="https://www.nps.gov/places/000/fraunces-tavern.htm" target="_blank"> NPS: Fraunces Tavern </a> <br> <a href="https://www.nydailynews.com/2012/11/20/historic-fraunces-tavern-other-lower-manhattan-businesses-trying-to-rebound-from-devastating-impact-of-hurricane-sandy/" target="_blank">Fraunces Tavern and Hurricane Sandy </a> <br> <a href="https://www.thewallstreetexperience.com/blog/fraunces-tavern-nyc-dining-history/" target="_blank"> Fraunces Tavern Image </a> <br> Battery Maritime Building sources: <br> <a href="https://www.batterymaritimebuilding.org/bulding-history" target="_blank">Battery Maritime Building History </a> <br> <a href="https://www.aiany.org/architecture/featured-projects/view/battery-maritime-building-casa-cipriani/" target="_blank">Battery Maritime Building Image</a> <br> Castle Clinton sources: <br> <a href="https://www.nypap.org/preservation-history/castle-clinton/" target="_blank">Castle Clinton History </a> <br> Pier A sources: <br> <a href="https://bpca.ny.gov/place/pier-a/" target="_blank">Pier A History </a> <br> <a href="https://commons.wikimedia.org/wiki/File:City_Pier_A_(24272).jpg#/media/File:City_Pier_A_(24272).jpg" target="_blank">Pier A Image</a> <br> Tribeca North Historic District <br> <a href="https://artsandculture.google.com/asset/bgFYQUVcg4Tdjw?hl=en&childassetid=OwGlx_lZ6EbNDg" target="_blank">Tribeca North history and image</a> <br> <a href="https://www.fsi-architecture.com/engineering/79-laight-street-new-york-ny" target="_blank">Sugar Refinery Image </a> <br> Weehawken Street Historic District sources <br> <a href="https://hdc.org/buildings/weehawken-street-historic-district/" target="_blank">Weehawken Street history </a> <br> <a href="https://westviewnews.org/2019/03/09/thennow-weehawken-street-historic-district/gcapsis/" target="_blank">Weehawken Street image </a> <br> Gansevoort Historic District <br> <a href="https://hdc.org/buildings/gansevoort-market-historic-district/" target="_blank"> Gansevoor District history </a> <br> <a href="https://villageview.nyc/2023/05/04/gansevoort-market-historic-district-avoids-a-disaster/" target="_blank"> Gansevoort District image </a> <br> <a href="https://hdc.org/buildings/american-seamens-friend-society-sailors-home-and-institute/" target="_blank">American Seamens Friends history </a> <br> <a href="https://commons.wikimedia.org/wiki/File:Jane_Hotel_American_Seamen%27s_Friend_Society_Sailors%27_Home_and_Institute.jpg" target="_blank">American Seamens Friends image </a> <br> West Chelsea Historic District sources: <br> <a href="https://s-media.nyc.gov/agencies/lpc/lp/2302.pdf" target="_blank">West Chelsea History </a> <br> <a href="https://nyclandmarks.lunaimaging.com/luna/servlet/detail/NYClandmarks~2~2~110018~114218:West-Chelsea-Historic-District" target="_blank"> West Chelsea image </a> <br> Fulton Ferry Historic District sources: <br> <a href="https://hdc.org/hdc-across-nyc/brooklyn/brooklyn-landmarked/fulton-ferry/" target="_blank">Fulton Ferry History and Image </a> <br> <a href="https://www.bkwaterfronthistory.org/story/warehouse-way/" target="_blank"> Nesmith & Sons History </a> <br> <a href="https://www.brownstoner.com/history/empire-stores/" target="_blank"> Nesmith & Sons Image </a> <br> Smallpox Memorial Hospital <br> <a href="https://rioc.ny.gov/178/Smallpox-Hospital" target="_blank"> Smallpox Memorial Hospital History and Image </a> <br> Governors Island Sources: <br> <a href="https://www.govisland.com/real-estate" target="_blank">Governors Island History and Image </a> <br> <a href="https://www.nps.gov/gois/learn/historyculture/castle-williams.htm" target="_blank"> Castle Williams History and Image </a> <br> <a href="https://www.hmdb.org/m.asp?m=47104" target="_blank">South Battery History and Image </a> <br> Battery Weed sources: <br> <a href="https://www.nps.gov/places/000/battery-weed.htm" target="_blank"> Battery Weed History and Image</a> <br> Historic Richmond Town sources: <br> <a href="https://nylandmarks.org/celebrate-50-at-50/historic-richmond-town/" target="_blank">Historic Richmond Town History and Image </a> <br> <a href="https://en.wikipedia.org/wiki/Voorlezer%27s_House#/media/File:Vorleezer-house.jpg" target="_blank"> Vorleezer House History and Image </a> <br> <a href="https://www.historicrichmondtown.org/historic-houses/2018/7/26/christopher-house" target="_blank"> Christopher House History and Image </a> <br> <a href="https://www.historicrichmondtown.org/historic-houses/2018/11/9/treasure-house-42" target="_blank"> Treasure House History and Image </a>',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'What causes Sea Level Rise?',
            image: 'images/GlacialMelt.jpg',
            description: 'Large amounts of the water are stored in glaciers. Global rises in temperature cause these glaciers to melt, releasing their water into the oceans. Temperature rise also causes thermal expansion: decreasing the density of oceanic water, causing it to expand in volume. The combination of glacial melt and thermal expansion is what causes sea level rise.',
            location: {
                center: [90, -90],
                zoom: 1.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'anthro-slr',
            alignment: 'center',
            hidden: false,
            title: 'Anthropogenic Sea Level Rise',
            image: 'images/GlobalTemp.png',
            description: 'Global temperature rise the past 150 years has been almost entirely caused by humans. Burning of fossil fuels releases carbon dioxide. This atmospheric carbon dioxide blocks makes the Earth less efficient and dispelling heat. As the graph above shows, global temperatures have risen significantly over the past century. Due to this, global mean sea level has already risen about 8 inches since 1920.',
            location: {
                   center: [-84.34264, 26.15254],
                zoom: 1.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
    id: 'interlude',
    alignment: 'center',
    hidden: false,
    description: 'Historic sites are in many ways especially susceptible to sea level rise-related damage or destruction. To begin, sea levels have already risen over the past hundreds of years, meaning many sites are already much closer to sea level than they used to be. Second, historic sites are inherently old and make already have structural/preservation issues. This is especially true for archaeological sites, which can be totally destroyed just by coastal erosion. Third, many organizations that control historic sites lack adequate funds to properly do repairs and prepare for the future. The image above shows how the historic site of Jamestown, Virginia could be affected by just one foot of sea level rise.',
    image: 'images/Jamestown.png',
    location: {
      center: [-76.75830, 37.20420],
      zoom: 12.67,
      pitch: 26.07,
      bearing: 0,
    },
},
    {
            id: 'battery-slr',
            alignment: 'center',
            hidden: false,
            title: 'Sea Level Rise in New York City',
            image: 'images/BatteryGraph.png',
            description: 'New York City is especially at risk from sea level rise. Readings from the Battery tide guage, collected for over 100 years, show sea level has risen an average of 2.92 millimeters since 1856, and 4.3 mm/year between 1992 and 2021. This is higher than the global average rise per year of 3.3 mm.',
            location: {
                center: [-74.01449, 40.69932],
                zoom: 15.75,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'begin-map',
            alignment: 'left',
            hidden: false,
            title: 'NYC after 6ft of Sea Level Rise',
            description: 'This map shows what New York City could look like at daily high tide if sea levels rise 6 feet. Historic landmarks and districts have been highlighted. The following section will explore which of these locations, across all boroughs, could be most affected.',
            location: {
                center: [-74.00308, 40.70308],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'first-site',
            alignment: 'right',
            hidden: false,
            title: 'Ellis Island',
            image: 'images/Ellis-Island.webp',
            description: 'Opened in 1892, Ellis Island served as the premier federal immigration station for the country. In a span of over 50 years, about 12 million people were processed there. Ellis Island was designated as a National Historic Landmark in 1966, and turned into a museum in 1990. Due to the small size of the island and its low elevation, the entire island could become submerged by 2100',
            location: {
                center: [-74.04067, 40.69871],
                zoom: 16,
                pitch: 38.24,
                bearing: -14.75,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second-site',
            alignment: 'left',
            hidden: false,
            title: 'South Street Seaport Historic District',
            image: 'images/southstreetseapot.jpg',
            description: 'The original location of port of Dutch Manhattan in the 17th century. The South Seaport was a commercial hub throughout the 18th and 19th centuries. It preserves much of the oldest architecture in Manhattan. Today, it is a picturesque area for restaurants, stores, and cultural sites. The seaport was hit hard by Hurricane Sandy, flooding buildings and causing millions in damages.',
            location: {
                center: [-74.00274, 40.70662],
                zoom: 16.5,
                pitch: 42.53,
                bearing: -50.31
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-site',
            alignment: 'right',
            hidden: false,
            title: 'Captain Joseph Rose House',
            image: 'images/CaptJosephRose.jpg',
            description: 'Built in 1773, this house is the oldest in the South Street Historic District, and the third oldest building in Manhattan. It was originally built by Captain Joseph Rose, a merchant in the trade of sugar, mahogany, indigo, rice, and tobacco.',
            location: {
                center: [-74.00107, 40.70854],
                zoom: 19.73,
                pitch: 21.99,
                bearing: 152.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-site',
            alignment: 'left',
            hidden: false,
            title: 'Fraunces Tavern',
            image: 'images/FrauncesTavern.webp',
            description: 'Built between 1719 and 1722, this is the oldest building in Manhattan. It was bought by Samuel Fraunces in 1762 and operated as a tavern until the 1840s. It was used by the Sons of Liberty as a meeting place, and was the location George Washington gave his officer farewell at the end of the American Revolution. Held the first offices for the Dept of Foreign Affairs, War, and Treasury in the country. Designated a NYC Landmark in 1966, the building now operates as a museum and restaurant. It sustained flooding and 200k in damages from Hurricane Sandy in 2012.',
            location: {
                center: [-74.01127, 40.70336],
                zoom: 20,
                pitch: 64.23,
                bearing: 125.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-site',
            alignment: 'right',
            hidden: false,
            title: 'Battery Maritime Building',
            image: 'images/BatteryMaritime.jpg',
            description: 'Built between 1906 and 1909, the Battery Maritime Building is the last remaining historic working ferry terminal in the city. A 6ft SLR would flood the area around the building and likely cause significant damage.',
            location: {
                center: [-74.01170, 40.70101],
                zoom: 18.40,
                pitch: 56.00,
                bearing: -17.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-site',
            alignment: 'left',
            hidden: false,
            title: 'Castle Clinton',
            image: 'images/CastleClinton.jpg',
            description: 'Built in 1808 as a fortification for the New York Harbor. Served as a military headquarters during the War of 1812. Turned into an entertainment venue in the 1820s-40s. Served as the premier immigration station for the country from 1855-1890, before being replaced by Ellis Island. Designated a National Historic Landmark in 1946, and a NYC Landmark in 1965. It has been renovated to its original appearance and turned into a museum. While SLR likely wont cause significant damage to the structure, it could contribute to quick erosion of its sandstone appearance. Daily flooding would also obstruct the park around it.',
            location: {
                center: [-74.01679, 40.70344],
                zoom: 18.64,
                pitch: 37.33,
                bearing: 88.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'added-site',
            alignment: 'right',
            hidden: false,
            title: 'Pier A',
            image: 'images/PierA.jpg',
            description: 'Built between 1906 and 1909, the Battery Maritime Building is the last remaining historic working ferry terminal in the city. A 6ft SLR would flood the area around the building and likely cause significant damage.',
            location: {
                center: [-74.01835, 40.70435],
                zoom: 19.1,
                pitch: 53.48,
                bearing: 37.14
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighth-site',
            alignment: 'left',
            hidden: false,
            title: 'Tribeca North Historic District',
            image: 'images/TribecaNorth.png',
            description: 'Contains some of the oldest industrial buildings in NYC. Last remaining remnants of the industrial and warehouse industries of the Lower East Side.',
            location: {
                center: [-74.01029, 40.72417],
                zoom: 17.00,
                pitch: 45.07,
                bearing: -92.76
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth-site',
            alignment: 'right',
            hidden: false,
            title: 'Grocers Steam Sugar Refining Company Building',
            image: 'images/SugarRefinery.jpg',
            description: 'The oldest building in the Tribeca North Historic District, built in 1853.',
            location: {
                center: [-74.01122, 40.72210],
                zoom: 18.5,
                pitch: 65.57,
                bearing: 138.25
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tenth-site',
            alignment: 'left',
            hidden: false,
            title: 'Weehawken Street Historic District',
            image: 'images/WeehawkenStreet.jpg',
            description: 'Contains buildings dating from 1830 to 1938. Once held many maritime industries.',
            location: {
                center: [-74.00984, 40.73282],
                zoom: 18.64,
                pitch: 43.86,
                bearing: 12.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eleventh-site',
            alignment: 'right',
            hidden: false,
            title: 'Gansevoort Meatpacking Market Historic District',
            image: 'images/Gansevoort.webp',
            description: 'Historic site of meatpacking industry. Contains buildings dating from the 1840s-1940s.',
            location: {
                center: [-74.00924, 40.73922],
                zoom: 17.5,
                pitch: 32.22,
                bearing: 11.53
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twelth-site',
            alignment: 'left',
            hidden: false,
            title: 'American Seamen’s Friend Society Sailor’s Home and Institute',
            image: 'images/SeamanFriend.jpg',
            description: 'Built 1907-1908 and housed an organization concerned with improving and social and moral welfare of seamen. Treated survivors of the Titanic.',
            location: {
                center: [-74.00945, 40.73831],
                zoom: 18.7,
                pitch: 52,
                bearing: 38.93
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirteenth-site',
            alignment: 'right',
            hidden: false,
            title: 'West Chelsea Historic District',
            image: 'images/WestC.png',
            description: 'One of few surviving industrial neighborhoods, with structures dating between 1885 and 1930.',
            location: {
                center: [-74.00658, 40.75236],
                zoom: 16,
                pitch: 52,
                bearing: 38.93
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourteenth-site',
            alignment: 'left',
            hidden: false,
            title: 'Fulton Ferry Historic District',
            image: 'images/FultonFerry.png',
            description: 'The ferry service here dates back to the mid 17th century. This historic district contains several 19th century buildings, including what is beleived to be the oldest office building in NYC.',
            location: {
                center: [-73.99147, 40.70367],
                zoom: 16.7,
                pitch: 39.08,
                bearing: 0.0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fihthteenth-site',
            alignment: 'right',
            hidden: false,
            title: 'Nesmith & Sons Empire Stores',
            image: 'images/EmpireStores.webp',
            description: 'Constructed in 1868, this building complex originally held merchandise imported from across the world, including sugar from Puerto Rico and palm oil from Liberia. Later used by the Arbuckle brothers as a facility for packing, refining, and storing sugar and coffee. From the 1960s until about 2013 the building stood abandoned and deteriorating. Redevelopment of the complex finally began in 2015. Today, it is a multi-use complex of shops, restaurants, and offices.',
            location: {
                center: [-73.99159, 40.70375],
                zoom: 18.43,
                pitch: 64.58,
                bearing: -178.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixthteenth-site',
            alignment: 'left',
            hidden: false,
            title: 'Smallpox Memorial Hospital',
            image: 'images/Smallpox.png',
            description: 'Built in 1856, this was the first smallpox hospital in the country. It was closed in the early 20th century and fell to ruin. The only ruin in to have been designated a NYC landmark, the ruins were opened to the public after a 4.5 million dollar stabilization project.',
            location: {
                center: [-73.95954, 40.75157],
                zoom: 19.05,
                pitch: 59.61,
                bearing: 128.35
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventeenth-site',
            alignment: 'right',
            hidden: false,
            title: 'Governors Island',
            image: 'images/GovernorsIsland.jpg',
            description: 'Began as a colonial militia base in 1755. Remained an army and coast guard base until 1996.',
            location: {
                center: [-74.02012, 40.68829],
                zoom: 14.85,
                pitch: 33.47,
                bearing: 31.59
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighteenth-site',
            alignment: 'left',
            hidden: false,
            title: 'Castle Williams',
            image: 'images/CastleWilliams.jpg',
            description: 'Built in 1811 on Governors Island to defend the New York Harbor. It served a prison during the American Civil War.',
            location: {
                center: [-74.01936, 40.69281],
                zoom: 18.79,
                pitch: 63.81,
                bearing: -97.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nineteenth-site',
            alignment: 'right',
            hidden: false,
            title: 'South Battery, Governors Island',
            image: 'images/SouthBattery.jpg',
            description: 'Also built in 1811. It served as the army school of practice from 1836-1878. It was an Officers Club from 1939-1996.',
            location: {
                center: [-74.01509, 40.68751],
                zoom: 19.45,
                pitch: 57.62,
                bearing: -24.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twentieth-site',
            alignment: 'left',
            hidden: false,
            title: 'Battery Weed',
            image: 'images/BetteryWeed.jpg',
            description: 'Built btween 1847 and 1861. Named after New Yorker Stephen Weed, who died at the Battle of Gettysburg. ',
            location: {
                center: [-74.05423, 40.60550],
                zoom: 18.1,
                pitch: 69.1,
                bearing: -103.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twenty-first-site',
            alignment: 'right',
            hidden: false,
            title: 'Historic Richmond Town',
            image: 'images/RichmondTown.jpg',
            description: 'A living history farm and village with many structures dating from the 17th to 20th centuries. While far from the shore of Staten Island, Historic Richmond Town is very close to a lowlying estuarine environment, making it very susceptible to sea level rise. The complex was damaged signficantly by Hurricane Sandy, which caused the flooding of multiple buildings.',
            location: {
                center: [-74.14619, 40.57153],
                zoom: 16.97,
                pitch: 28.18,
                bearing: 0.0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twenty-second-site',
            alignment: 'left',
            hidden: false,
            title: 'The Voorlezer House',
            image: 'images/Vorleezer-house.jpg',
            description: 'A woodenframe building likely built in the 1760s. It is the oldest known schoolhouse building in the United States.',
            location: {
                center: [-74.14749, 40.57139],
                zoom: 20.0,
                pitch: 62.68,
                bearing: -22.93
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twenty-third-site',
            alignment: 'right',
            hidden: false,
            title: 'The Christopher House',
            image: 'images/ChrisHouse.png',
            description: 'A stone farmhouse built in the 1720s-30s. The building was moved from its original location and reassambled at Historic Richmond Town in 1974. Supposedly the meeting place of the local Committee of Safety during the American Revolution.',
            location: {
                center: [-74.14784, 40.57192],
                zoom: 20.0,
                pitch: 62.68,
                bearing: -22.93
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twenty-fourth-site',
            alignment: 'left',
            hidden: false,
            title: 'The Treasure House',
            image: 'images/TreasureHouse.jpg',
            description: 'So named because of the story that a cache of gold coins left by British soldiers was found in its walls in about 1860. The earliest part of the building was built in 1700.',
            location: {
                center: [-74.14717, 40.57203],
                zoom: 20.0,
                pitch: 62.68,
                bearing: -22.93
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
