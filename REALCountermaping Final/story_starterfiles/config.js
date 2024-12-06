var config = {
    style: 'mapbox://styles/alexbohler2025/cm4ase4ol00e701qo3k9y1bre',
    accessToken: 'pk.eyJ1IjoiYWxleGJvaGxlcjIwMjUiLCJhIjoiY200OWFtY3d5MDI2MzJxcTVuZm1tMDZqMSJ9.WKWu-sRaEeyndzuLGIa2Og',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Flooded History',
    subtitle: 'How Sea Level Rise could effect the historic landmarks of New York City',
    byline: 'Alex Bohler',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'What causes Sea Level Rise?',
            image: 'images/GlacialMelt.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            id: 'battery-slr',
            alignment: 'center',
            hidden: false,
            title: 'Sea Level Rise in New York City',
            image: 'images/BatteryGraph.png',
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
            alignment: 'left',
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
            alignment: 'right',
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
            alignment: 'left',
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
            alignment: 'right',
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
            alignment: 'left',
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
            alignment: 'right',
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
            alignment: 'left',
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
            alignment: 'right',
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
            alignment: 'left',
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
            alignment: 'right',
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
            alignment: 'left',
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
            alignment: 'right',
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
            alignment: 'left',
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
            alignment: 'right',
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
            alignment: 'left',
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
            alignment: 'right',
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
            alignment: 'left',
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
            alignment: 'right',
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
            alignment: 'left',
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
            alignment: 'right',
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
