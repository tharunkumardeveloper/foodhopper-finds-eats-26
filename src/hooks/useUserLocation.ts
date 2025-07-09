
import { useState, useEffect } from 'react';

interface LocationData {
  latitude: number;
  longitude: number;
  city?: string;
  error?: string;
}

export const useUserLocation = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUserLocation = () => {
      if (!navigator.geolocation) {
        setError('Geolocation is not supported by this browser');
        setLoading(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          
          try {
            // Optional: Get city name from coordinates using reverse geocoding
            // For now, we'll just store the coordinates
            setLocation({
              latitude,
              longitude
            });
            console.log('User location accessed:', { latitude, longitude });
            
            // Store in localStorage for future use
            localStorage.setItem('userLocation', JSON.stringify({
              latitude,
              longitude,
              timestamp: Date.now()
            }));
            
          } catch (err) {
            console.error('Error processing location:', err);
            setLocation({
              latitude,
              longitude,
              error: 'Could not determine city'
            });
          } finally {
            setLoading(false);
          }
        },
        (error) => {
          let errorMessage = 'Failed to get location';
          
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = 'Location access denied by user';
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = 'Location information unavailable';
              break;
            case error.TIMEOUT:
              errorMessage = 'Location request timed out';
              break;
          }
          
          console.error('Geolocation error:', errorMessage);
          setError(errorMessage);
          setLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // 5 minutes
        }
      );
    };

    // Check if we have recent location data in localStorage
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      const parsed = JSON.parse(savedLocation);
      const isRecent = Date.now() - parsed.timestamp < 300000; // 5 minutes
      
      if (isRecent) {
        setLocation({
          latitude: parsed.latitude,
          longitude: parsed.longitude
        });
        setLoading(false);
        return;
      }
    }

    getUserLocation();
  }, []);

  return { location, loading, error };
};
