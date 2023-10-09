
const bounds = [
                [-180,-5], //SW corner
                [-30,76]   //NE corner
            ]
            
            
            //  load map  //
            var map = new mapboxgl.Map({
                container: 'map', // container id
                style: 'mapbox://styles/ptimmys/cli0j2lad00ul01po2d4t5fyo',  // stylesheet location
                projection: 'globe',
                center: [-95.7129, 37.0902],
                zoom: 3,
                minZoom: 1, 
                maxZoom: 11,
                maxBounds: bounds,
            });