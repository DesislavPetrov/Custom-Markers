mapboxgl.accessToken = 'pk.eyJ1IjoiYmF0ZW5jZTE5ODYiLCJhIjoiY2lqYTc0MXljMDA0aHVzbTRndzMzamdwaCJ9.t-6XEpne5M6Ux4XJhQyF4Q';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/batence1986/cjwzi600j0okr1coycia327t9',
    center: [150.180318, -34.605543],
    zoom: 12
});

$.getJSON('map_data_withClass.json', function (geojson) {
    // add markers to map
    geojson.features.forEach(function (marker) {

        // create a HTML element for each feature
        var el = document.createElement('span');
        el.className = 'marker';
        el.style.backgroundColor = marker.properties["Class"];

        // Icon
        var markerIcon = document.createElement("span");
        el.appendChild(markerIcon);
        markerIcon.className = "marker-icon";  

        // create the "SVG" tag
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute('class', 'svg-class');
        svg.setAttribute('width', '24px');
        svg.setAttribute('height', '24px');
        svg.setAttribute("transform", "rotate(" + (marker.properties["Rotate"] - 90) + ")");
        svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        markerIcon.appendChild(svg);

        // create the "g" tag in the "SVG" tag
        var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        svg.appendChild(g);

        // create the three "line" tags for the arrow in the "g" tag
        var line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line1.setAttribute('class', 'st0');
        line1.setAttribute('x1', '2.5');
        line1.setAttribute('y1', '13.6');
        line1.setAttribute('x2', '21');
        line1.setAttribute('y2', '13.6');
        g.appendChild(line1);

        var line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line2.setAttribute('class', 'st0');
        line2.setAttribute('x1', '13.972564');
        line2.setAttribute('y1', '20.921761');
        line2.setAttribute('x2', '21.194845');
        line2.setAttribute('y2', '13.441109');
        g.appendChild(line2);

        var line3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line3.setAttribute('class', 'st0');
        line3.setAttribute('x1', '21.68104');
        line3.setAttribute('y1', '14.029357');
        line3.setAttribute('x2', '14.181871');
        line3.setAttribute('y2', '5.331367');
        g.appendChild(line3);

        // Text
        var markerText = document.createElement("span");
        el.appendChild(markerText);
        markerText.className = "marker-text";
        markerText.innerHTML = marker.properties["MarkerText"];
        markerText.style.textAlign = "center";


        // add marker to map
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    });
});
