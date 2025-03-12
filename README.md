# Leaflet Challenge

## Overview

The **Leaflet Challenge** is a data visualization project that leverages **Leaflet.js** to create an interactive map displaying earthquake data provided by the **United States Geological Survey (USGS)**. This project helps visualize real-time earthquake occurrences based on magnitude and depth, enhancing public awareness and understanding of seismic activity.

## Background

The **USGS** collects massive amounts of earthquake data daily from all over the world. However, they lack a user-friendly way to visualize this data. This project aims to address that by creating an intuitive map that plots recent earthquakes, displaying relevant information such as location, magnitude, and depth.

## Features

- Uses **Leaflet.js** to create an interactive map.
- Retrieves real-time earthquake data from the **USGS GeoJSON Feed** API via **D3.js**.
- Plots earthquake locations using **latitude and longitude**.
- Markers vary in **size** based on earthquake magnitude.
- Markers change **color** based on earthquake depth.
- **Popups** provide additional details about each earthquake.
- A **legend** provides context for marker colors and depth.

## Data Source

The earthquake data is fetched dynamically from the **USGS GeoJSON Feed**:
[USGS Earthquake Data](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)

###

## Technologies Used

- **JavaScript**
- **Leaflet.js** (for mapping)
- **D3.js** (for data handling and fetching data from USGS)
- **HTML/CSS** (for structuring and styling the page)

## Setup Instructions

1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/leaflet-challenge.git
   ```
2. Navigate to the project directory:
   ```sh
   cd leaflet-challenge
   ```
3. Open the `index.html` file in a browser to view the interactive map.

## Visualization Details

- **Map Initialization**: The map is centered at an appropriate zoom level to display global earthquake activity.
- **Data Markers**:
  - Larger markers indicate stronger earthquakes.
  - Darker markers indicate deeper earthquakes.
- **Legend**: Helps interpret depth-based color coding.
- **Popups**: Display information like **magnitude, location, and depth**.

## Map

![Screenshot 2025-03-12 at 1 33 18 PM](https://github.com/user-attachments/assets/7563d6ef-d832-418c-8b7d-787807cd3655)


## References

Dataset created by the United States Geological Survey.



