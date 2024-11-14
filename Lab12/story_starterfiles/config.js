var config = {
    style: 'mapbox://styles/alexbohler2025/cm2xi4bqk00f101qkh6gb92lr',
    accessToken: 'pk.eyJ1IjoiYWxleGJvaGxlcjIwMjUiLCJhIjoiY20xdGkxc3p3MDJvMjJrcWE4aXNjOTlscCJ9.2LLU36JfjXPHnXZ3M2t8Fw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'NYC Pubic and Affordable Housing Flood Risk',
    subtitle: 'What parts of the city could be flooded by future storms?',
    byline: 'Alex Bohler',
    para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere finibus lorem, nec vulputate arcu ultricies non. Quisque porta nisi tempus faucibus varius. Maecenas scelerisque maximus ipsum, eget ullamcorper libero consectetur vel. Nullam tincidunt ultricies est non euismod. Proin egestas maximus sodales. Pellentesque nisi metus, cursus eu enim ac, aliquam lacinia mi. Morbi vitae nisl eros. Nam iaculis nisl quis auctor maximus. Praesent rutrum tincidunt odio at vehicula. Proin viverra erat sed consequat vulputate.",
    para2: "Duis tempus pulvinar tortor, ut viverra lectus dignissim et. Praesent maximus consectetur mi, et blandit elit sollicitudin quis. Morbi pretium aliquet velit a aliquam. Aenean scelerisque ultricies magna at semper. Donec quis egestas nisi. Phasellus sodales metus sed finibus maximus. Nunc efficitur gravida dolor. Ut ut est congue, sodales elit et, volutpat tortor. Sed ac velit enim. Phasellus bibendum, quam non dignissim dictum, dolor nisl sollicitudin nibh, eget lobortis turpis lacus eu arcu. Etiam ut aliquet felis. Ut ac enim ligula. Nam mi metus, aliquam ut placerat vitae, iaculis sit amet massa. Integer eu nisi bibendum, vulputate nulla quis, luctus elit.",
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Flood Risk Zones',
            image: 'https://www.nyc.gov/assets/lmcr/images/content/pages/Ch18_SM_Seaport_Flooding.jpg',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks]. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected.',
            location: {
                center: [-73.98189, 40.72228],
                zoom: 11.8,
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
    id: 'interlude',
    alignment: 'center',
    hidden: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
    video: 'images/902-1_902-2364-PD2_preview.mp4',
    location: {
      center: [-73.97615, 40.71901],
      zoom: 14.84,
      pitch: 48,
      bearing: 142.44,
    },
},
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Damage to the Red Hook Houses',
            image: 'https://thebridgebk.com/wp-content/uploads/2017/10/121029_5267-e1508777751352.jpg',
            description: 'When Hurricane Sandy hit in 2012 the Red Hook Residential Complex was slammed. Roofs collapsed and power went out for weeks. Former green spaces were torn up and covered in rubble. Despite 12 years having passed, the people of Red Hook are still living in a construction zone, waiting for a multi-million dollar redevelopment project to repair the complex and add much-needed flooding resistance.',
            location: {
                center: [-74.00915, 40.67551],
                zoom: 15,
                pitch: 60,
                bearing: -43.2,
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
      
    ]
};
