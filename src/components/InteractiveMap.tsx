import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-0.1276, 5.6037], // Accra, Ghana coordinates
      zoom: 6,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add markers for key locations
    const locations = [
      {
        name: 'Britonnia Ltd - Accra Office',
        coordinates: [-0.1276, 5.6037] as [number, number],
        description: 'Main office serving Ghana and West Africa'
      },
      {
        name: 'Kumasi Service Area',
        coordinates: [-1.6244, 6.6885] as [number, number],
        description: 'Extended service coverage'
      },
      {
        name: 'Tamale Service Area',
        coordinates: [-0.8393, 9.4008] as [number, number],
        description: 'Northern Ghana coverage'
      }
    ];

    locations.forEach(location => {
      // Create marker element
      const markerEl = document.createElement('div');
      markerEl.className = 'custom-marker';
      markerEl.style.width = '30px';
      markerEl.style.height = '30px';
      markerEl.style.borderRadius = '50%';
      markerEl.style.backgroundColor = '#3b82f6';
      markerEl.style.border = '3px solid white';
      markerEl.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
      markerEl.style.cursor = 'pointer';

      // Create popup
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<div class="p-2">
          <h3 class="font-semibold text-sm">${location.name}</h3>
          <p class="text-xs text-gray-600 mt-1">${location.description}</p>
        </div>`
      );

      // Add marker to map
      new mapboxgl.Marker(markerEl)
        .setLngLat(location.coordinates)
        .setPopup(popup)
        .addTo(map.current!);
    });

    // Add service area circle
    map.current.on('load', () => {
      map.current?.addSource('service-area', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-0.1276, 5.6037]
          },
          properties: {}
        }
      });

      map.current?.addLayer({
        id: 'service-area-circle',
        type: 'circle',
        source: 'service-area',
        paint: {
          'circle-radius': {
            stops: [
              [0, 0],
              [20, 300]
            ],
            base: 2
          },
          'circle-color': '#3b82f6',
          'circle-opacity': 0.1,
          'circle-stroke-color': '#3b82f6',
          'circle-stroke-width': 2,
          'circle-stroke-opacity': 0.3
        }
      });
    });

    setShowTokenInput(false);
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Enter your Mapbox public token to view our service areas across Ghana and West Africa.
          </p>
          <p className="text-xs text-muted-foreground mb-4">
            Get your free token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
          </p>
          <div className="flex gap-2">
            <Input
              type="password"
              placeholder="Enter Mapbox token..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleTokenSubmit()}
            />
            <Button onClick={handleTokenSubmit} disabled={!mapboxToken.trim()}>
              Load Map
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <h4 className="font-semibold text-sm mb-1">Service Areas</h4>
        <p className="text-xs text-muted-foreground">
          Ghana & West Africa Coverage
        </p>
      </div>
    </div>
  );
};

export default InteractiveMap;