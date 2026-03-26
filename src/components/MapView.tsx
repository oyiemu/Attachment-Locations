import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Facility } from '../data';

// Fix for default marker icons in Leaflet with React
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  facilities: Facility[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

function ChangeView({ selectedFacility }: { selectedFacility: Facility | null }) {
  const map = useMap();
  
  React.useEffect(() => {
    // Fix for map not rendering correctly in some containers
    setTimeout(() => {
      map.invalidateSize();
    }, 250);
  }, [map]);

  React.useEffect(() => {
    if (selectedFacility) {
      map.flyTo([selectedFacility.lat, selectedFacility.lng], 12, {
        duration: 1.5,
        easeLinearity: 0.25
      });
    }
  }, [selectedFacility, map]);

  return null;
}

function ZoomControls() {
  const map = useMap();
  return (
    <div className="absolute bottom-6 right-6 z-[1000] flex flex-col gap-2 pointer-events-none">
      <button 
        onClick={(e) => {
          e.stopPropagation();
          map.zoomIn();
        }}
        className="w-10 h-10 bg-white shadow-lg rounded-xl flex items-center justify-center text-gray-600 hover:text-black transition-colors border border-gray-100 pointer-events-auto"
        title="Zoom In"
      >
        <span className="text-xl font-bold">+</span>
      </button>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          map.zoomOut();
        }}
        className="w-10 h-10 bg-white shadow-lg rounded-xl flex items-center justify-center text-gray-600 hover:text-black transition-colors border border-gray-100 pointer-events-auto"
        title="Zoom Out"
      >
        <span className="text-xl font-bold">−</span>
      </button>
    </div>
  );
}

export const MapView: React.FC<MapProps> = ({ facilities, selectedId, onSelect }) => {
  const selectedFacility = facilities.find(f => f.id === selectedId);
  
  const center = React.useMemo<[number, number]>(() => 
    selectedFacility 
      ? [selectedFacility.lat, selectedFacility.lng] 
      : [0.0236, 37.9062]
  , [selectedFacility]);
  
  const zoom = selectedFacility ? 12 : 6;

  return (
    <div className="w-full h-full relative group rounded-2xl overflow-hidden shadow-inner bg-gray-100">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        scrollWheelZoom={true}
        zoomControl={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {facilities.map((facility) => (
          <Marker 
            key={facility.id} 
            position={[facility.lat, facility.lng]}
            eventHandlers={{
              click: () => onSelect(facility.id),
            }}
          >
            <Popup className="custom-popup">
              <div className="p-2 min-w-[120px]">
                <p className="font-display font-bold text-sm m-0 text-gray-900">{facility.shortName}</p>
                <p className="text-[10px] font-semibold text-gray-500 m-0 uppercase tracking-wider">{facility.town}, {facility.county}</p>
                <div className="mt-2 pt-2 border-t border-gray-100">
                  <span className="text-[9px] font-bold text-blue-600 uppercase">{facility.level}</span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
        <ChangeView selectedFacility={selectedFacility || null} />
        <ZoomControls />
      </MapContainer>
      
      {/* Aesthetic Overlay */}
      <div className="absolute inset-0 pointer-events-none border-[1px] border-black/5 z-[1000] rounded-2xl shadow-inner"></div>
    </div>
  );
};
