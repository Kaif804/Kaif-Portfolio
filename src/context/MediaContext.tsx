import React, { createContext, useContext, useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface MediaContextType {
  profilePhoto: string;
  logoImage: string | null;
  setProfilePhotoFromFile: (file: File) => Promise<string>;
  setLogoFromFile: (file: File) => Promise<string>;
  resetProfilePhoto: () => void;
  resetLogo: () => void;
  isCustomPhoto: boolean;
  isCustomLogo: boolean;
  isMediaModalOpen: boolean;
  openMediaModal: () => void;
  closeMediaModal: () => void;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

const PROFILE_PHOTO_STORAGE_KEY = 'kaif_custom_profile_photo_v3';
const BRAND_LOGO_STORAGE_KEY = 'kaif_custom_brand_logo_v4';

export const MediaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profilePhoto, setProfilePhoto] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(PROFILE_PHOTO_STORAGE_KEY);
      if (saved) return saved;
    } catch (e) {
      console.warn('Could not load profile photo from storage', e);
    }
    return PERSONAL_INFO.avatar;
  });

  const [logoImage, setLogoImage] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem(BRAND_LOGO_STORAGE_KEY);
      if (saved) return saved;
    } catch (e) {
      console.warn('Could not load logo from storage', e);
    }
    return PERSONAL_INFO.logo;
  });

  const [isMediaModalOpen, setIsMediaModalOpen] = useState<boolean>(false);

  // Check if public files exist
  useEffect(() => {
    // Check if user uploaded kaif_photo.jpg to public directory
    const checkPublicAssets = async () => {
      if (!localStorage.getItem(PROFILE_PHOTO_STORAGE_KEY)) {
        try {
          const res = await fetch('/kaif_photo.jpg', { method: 'HEAD' });
          if (res.ok) {
            setProfilePhoto('/kaif_photo.jpg');
          }
        } catch (_) {}
      }

      if (!localStorage.getItem(BRAND_LOGO_STORAGE_KEY)) {
        try {
          const res = await fetch('/kaif_logo.png', { method: 'HEAD' });
          if (res.ok) {
            setLogoImage('/kaif_logo.png');
          }
        } catch (_) {}
      }
    };

    checkPublicAssets();
  }, []);

  const fileToDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const setProfilePhotoFromFile = async (file: File): Promise<string> => {
    const dataUrl = await fileToDataUrl(file);
    setProfilePhoto(dataUrl);
    try {
      localStorage.setItem(PROFILE_PHOTO_STORAGE_KEY, dataUrl);
    } catch (e) {
      console.warn('Storage quota exceeded for photo', e);
    }
    return dataUrl;
  };

  const setLogoFromFile = async (file: File): Promise<string> => {
    const dataUrl = await fileToDataUrl(file);
    setLogoImage(dataUrl);
    try {
      localStorage.setItem(BRAND_LOGO_STORAGE_KEY, dataUrl);
    } catch (e) {
      console.warn('Storage quota exceeded for logo', e);
    }
    return dataUrl;
  };

  const resetProfilePhoto = () => {
    setProfilePhoto(PERSONAL_INFO.avatar);
    try {
      localStorage.removeItem(PROFILE_PHOTO_STORAGE_KEY);
    } catch (_) {}
  };

  const resetLogo = () => {
    setLogoImage(PERSONAL_INFO.logo);
    try {
      localStorage.removeItem(BRAND_LOGO_STORAGE_KEY);
    } catch (_) {}
  };

  const openMediaModal = () => setIsMediaModalOpen(true);
  const closeMediaModal = () => setIsMediaModalOpen(false);

  const isCustomPhoto = profilePhoto !== PERSONAL_INFO.avatar;
  const isCustomLogo = logoImage !== PERSONAL_INFO.logo;

  return (
    <MediaContext.Provider
      value={{
        profilePhoto,
        logoImage,
        setProfilePhotoFromFile,
        setLogoFromFile,
        resetProfilePhoto,
        resetLogo,
        isCustomPhoto,
        isCustomLogo,
        isMediaModalOpen,
        openMediaModal,
        closeMediaModal,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = (): MediaContextType => {
  const context = useContext(MediaContext);
  if (!context) {
    throw new Error('useMedia must be used within a MediaProvider');
  }
  return context;
};
