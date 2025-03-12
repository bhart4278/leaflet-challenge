// Create the map object with a center and zoom level
let map = L.map("map").setView([35.7749, -100.4194], 5);

// Add a tile layer (the background map)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// Fetch earthquake data from USGS
let earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
d3.json(earthquakeUrl).then(function (data) {

  // This function determines the color of the marker based on the depth of the earthquake.
  function getColor(depth) {
    return depth > 90 ? "#ff0000" :
           depth > 70 ? "#ff7300" :
           depth > 50 ? "#ffb300" :
           depth > 30 ? "#ffdd00" :
           depth > 10 ? "#a3ff00" : "#00ff00";
  }

  // This function determines the radius of the earthquake marker based on its magnitude.
  function getRadius(magnitude) {
    return magnitude ? magnitude * 4 : 1;
  }

  // This function returns the style data for each of the earthquakes we plot on
  // the map. Pass the magnitude and depth of the earthquake into two separate functions
  // to calculate the color and radius.  
  function styleInfo(feature) {
    return {
      radius: getRadius(feature.properties.mag),
      fillColor: getColor(feature.geometry.coordinates[2]),
      color: "#000",
      weight: 0.5,
      opacity: 1,
      fillOpacity: 0.8
    };
  }
  
  // Add a GeoJSON layer to the map once the file is loaded.
  L.geoJson(data, {
    // Turn each feature into a circleMarker on the map.
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },
    // Set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
    // Create a popup for each marker to display the magnitude and location of the earthquake after the marker has been created and styled
    onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "<h3>Location: " + feature.properties.place + "</h3>" +
        "<h4>Magnitude: " + feature.properties.mag + "</h4>" +
        "<h4>Depth: " + feature.geometry.coordinates[2] + " km</h4>"
      );
    }
  }).addTo(map);
  
  // Create a legend control object.
  let legend = L.control({ position: "bottomright" });
  // Then add all the details for the legend
  legend.onAdd = function () {
    let div = L.DomUtil.create("div", "info legend"),
        depths = ['-10 km ', ' 10 km ', ' 30 km ', ' 50 km ', ' 70 km ', ' 90 km'],
        //labels = [];
        colors = ["#00ff00", "#a3ff00", "#ffdd00", "#ffb300", "#ff7300", "#ff0000"];

     // Loop through our depth intervals to generate a label with a colored square for each interval.
    for (let i = 0; i < depths.length; i++) {
        div.innerHTML +=
        `<i style="background: ${colors[i]}; width: 18px; height: 18px; display: inline-block;"></i> ` +
        `${depths[i]}${depths[i + 1] ? `&ndash;${depths[i + 1]}<br>` : "+"}`;
    }
    return div;
  }; 
  // Add legend to map
  legend.addTo(map);
});
