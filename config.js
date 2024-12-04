var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiYWxleGJvaGxlcjIwMjUiLCJhIjoiY200OWFtY3d5MDI2MzJxcTVuZm1tMDZqMSJ9.WKWu-sRaEeyndzuLGIa2Og',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: 'images/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-74.00160, 40.71235],
                zoom: 10.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
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
            image: 'images/source.png',
            description: 'The original location of port of Dutch Manhattan in the 17th century. The South Seaport was a commercial hub throughout the 18th and 19th centuries. It preserves much of the oldest architecture in Manhattan. Today, it is a picturesque area for restaurants, stores, and cultural sites. The seaport was hit hard by Hurricane Sandy, flooding buildings and causing millions in damages.',
            location: {
                center: [-74.00223, 40.70720],
                zoom: 16.5,
                pitch: 5.23,
                bearing: -10.40
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
            image: 'images/source.png',
            description: 'Built in 1773, this house is the oldest in the South Street Historic District, and the third oldest building in Manhattan. It was originally built by Captain Joseph Rose, a merchant in the trade of sugar, mahogany, indigo, rice, and tobacco.',
            location: {
                center: [-74.00107, 40.70853],
                zoom: 20.58,
                pitch: 60.23,
                bearing: 144.80
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
            image: 'images/source.png',
            description: 'Built between 1719 and 1722, this is the oldest building in Manhattan. It was bought by Samuel Fraunces in 1762 and operated as a tavern until the 1840s. It was used by the Sons of Liberty as a meeting place, and was the location George Washington gave his officer farewell at the end of the American Revolution. Held the first offices for the Dept of Foreign Affairs, War, and Treasury in the country. Designated a NYC Landmark in 1966, the building now operates as a museum and restaurant. It sustained flooding and 200k in damages from Hurricane Sandy in 2012.',
            location: {
                center: [-74.01139, 40.70340],
                zoom: 21.37,
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
            id: 'fifth-site',
            alignment: 'right',
            hidden: false,
            title: 'Castle Clinton',
            image: 'images/source.png',
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
            id: 'sixth-site',
            alignment: 'left',
            hidden: false,
            title: 'Battery Maritime Building',
            image: 'images/source.png',
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
            id: 'seventh-site',
            alignment: 'left',
            hidden: false,
            title: 'Pier A',
            image: 'images/source.png',
            description: 'Built in 1886 as the headquarters for the NYC Docks Department. Oldest remaining pier in Manhattan. Opened to the public for the first time in 2014 after a lengthy restoration.',
            location: {
                center: [-74.01802, 40.70438],
                zoom: 18.77,
                pitch: 63.57,
                bearing: -17.60
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
            image: 'images/source.png',
            description: 'Contains some of the oldest industrial buildings in NYC. Last remaining remnants of the industrial and warehouse industries of the Lower East Side.',
            location: {
                center: [-74.00919, 40.72707],
                zoom: 15.00,
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
            image: 'images/source.png',
            description: 'The oldest building in the Tribeca North Historic District, built in 1853.',
            location: {
                center: [-74.01122, 40.72210],
                zoom: 19.93,
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
            image: 'images/source.png',
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
