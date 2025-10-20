import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { diseaseData } from '../data/dummyData';

// Fix for default markers in Leaflet with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapContainer = ({ onSelectLocation, selectedLocation }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!mapInstance.current) {
      // Initialize map
      mapInstance.current = L.map(mapRef.current).setView([-6.2088, 106.8456], 11);
      
      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstance.current);
      
      // Color based on disease level
      const getColor = (level) => {
        return level === 'high' ? 'red' :
               level === 'medium' ? 'orange' : 'green';
      };
      
      // Add markers for each location
      diseaseData.forEach(location => {
        const marker = L.circleMarker([location.lat, location.lng], {
          color: getColor(location.level),
          fillColor: getColor(location.level),
          fillOpacity: 0.7,
          radius: 25,
          weight: 2
        }).addTo(mapInstance.current);
        
        // Popup with information
        marker.bindPopup(`
          <div class="p-2">
            <strong class="text-lg">${location.name}</strong><br>
            <span class="text-sm">Penyakit: ${location.diseases.join(", ")}</span><br>
            <span class="text-sm">Tingkat Risiko: ${location.level === 'high' ? 'Tinggi' : location.level === 'medium' ? 'Sedang' : 'Rendah'}</span>
          </div>
        `);
        
        // Add click event to marker
        marker.on('click', () => {
          if (onSelectLocation) {
            onSelectLocation(location);
          }
        });
        
        markersRef.current.push(marker);
      });
      
      // Add legend
      const legend = L.control({position: 'bottomright'});
      legend.onAdd = function () {
        const div = L.DomUtil.create('div', 'legend bg-white p-2 rounded shadow');
        div.innerHTML = `
          <h4 class="font-bold mb-1">Keterangan Tingkat Risiko</h4>
          <div class="flex items-center mb-1"><div class="w-4 h-4 bg-red-500 rounded-full mr-2"></div> Tinggi</div>
          <div class="flex items-center mb-1"><div class="w-4 h-4 bg-orange-500 rounded-full mr-2"></div> Sedang</div>
          <div class="flex items-center"><div class="w-4 h-4 bg-green-500 rounded-full mr-2"></div> Rendah</div>
        `;
        return div;
      };
      legend.addTo(mapInstance.current);
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [onSelectLocation]);

  // Effect to highlight selected location on map
  useEffect(() => {
    if (selectedLocation && mapInstance.current) {
      // Reset all markers to default style
      markersRef.current.forEach(marker => {
        marker.setStyle({
          fillOpacity: 0.7,
          radius: 30,
          weight: 2
        });
      });
      
      // Find and highlight the selected marker
      const selectedMarker = markersRef.current.find(marker => {
        const latLng = marker.getLatLng();
        return latLng.lat === selectedLocation.lat && latLng.lng === selectedLocation.lng;
      });
      
      if (selectedMarker) {
        selectedMarker.setStyle({
          fillOpacity: 1,
          radius: 15,
          weight: 3
        });
        
        // Zoom to selected location with appropriate zoom level
        mapInstance.current.setView([selectedLocation.lat, selectedLocation.lng], 14);
        
        // Open popup
        selectedMarker.openPopup();
      }
    }
  }, [selectedLocation]);

  return <div ref={mapRef} className="h-96 w-full rounded-lg mb-6" />;
};

export default MapContainer;