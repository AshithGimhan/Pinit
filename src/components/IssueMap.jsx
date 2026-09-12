import { useGeolocation } from '../hooks/useGeolocation';
import { CircleMarker, MapContainer, TileLayer, Popup } from 'react-leaflet';

export function IssueMap({ issues }) {
  const { position, loading } = useGeolocation();

  const colors = {
    open: '#991b1b',
    active: '#f97316',
    resolved: '#16a34a',
  };

  if (loading) return;

  return (
    <div className="flex justify-center mt-3">
      <MapContainer center={position} zoom={13} className="z-0 h-50 w-11/12">
        <TileLayer
          attribution="© OpenStreetMap © CARTO"
          url="https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png?key=cb1_31sx_1_843714cdfe87fab2ae5c9aa4"
        />

        {issues.map((issue) => (
          <CircleMarker
            key={issue.id}
            center={[issue.lat, issue.lng]}
            radius={7}
            pathOptions={{
              color: colors[issue.status],
              fillOpacity: 0.9,
              weight: 0,
            }}
          >
            <Popup>
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.location}</p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
