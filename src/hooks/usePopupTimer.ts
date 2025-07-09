
import { useState, useEffect } from 'react';

interface UsePopupTimerProps {
  delay?: number;
  storageKey?: string;
}

export const usePopupTimer = ({ delay = 10000, storageKey = 'userPreferencesShown' }: UsePopupTimerProps = {}) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if popup has already been shown
    const hasShownPopup = localStorage.getItem(storageKey);
    
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay, storageKey]);

  const closePopup = () => {
    setShowPopup(false);
    // Mark popup as shown so it doesn't appear again
    localStorage.setItem(storageKey, 'true');
  };

  return { showPopup, closePopup };
};
