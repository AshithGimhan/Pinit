import { useState, useEffect } from 'react';

export function useGeolocation() {
  const [position, setPosition] = useState([6.9271, 79.8612]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
        setLoading(false);
      },
      () => {
        setLoading(false);
      },
    );
  }, []);

  return { loading, position };
}

