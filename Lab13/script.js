mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGJvaGxlcjIwMjUiLCJhIjoiY20xdGkxc3p3MDJvMjJrcWE4aXNjOTlscCJ9.2LLU36JfjXPHnXZ3M2t8Fw';

const map = new mapboxgl.Map({
  container: 'Alex', // container id
  style: 'mapbox://styles/iamwfx/ckh275yks01ri19mtotvwgwak', // replace this with your style URL
  center: [-122.42285, 37.76869],
  zoom: 13,
  pitch: 30.00,
  bearing: 0.00,
  minZoom: 13

});

map.on('load', function () {
	// MORE CODE WILL GO INSIDE HERE
	map.addSource('restaurantSource',{
        'type':'vector',
        'url': 'mapbox://alexbohler2025.8ac5qr21'
      });


	map.addLayer({
		"id": "restaurantLayer",
		"type": "circle",
    "source": "restaurantSource",
    "source-layer": "Historical_Restaurant_Inspect-161gr7",
    "type": "circle",
    "paint": {
      "circle-color": "#008F8C",
  	  }
	});

})