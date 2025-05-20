// imageUtils.js - Utility functions for optimizing image loading

import { Image } from 'react-native';

// Preloaded image cache
const imageCache = {};

/**
 * Preload multiple images into memory
 * @param {Array} images - Array of image require statements or URIs
 * @returns {Promise} - Promise that resolves when all images are preloaded
 */
export const preloadImages = async (images) => {
  if (!images || !images.length) return Promise.resolve();
  
  const promises = images.map((image) => {
    if (typeof image === 'number') {
      // Local image (require statement result)
      if (!imageCache[image]) {
        imageCache[image] = Image.resolveAssetSource(image);
      }
      return Promise.resolve();
    } else if (typeof image === 'string') {
      // Remote image URL
      return new Promise((resolve, reject) => {
        if (imageCache[image]) {
          resolve();
        } else {
          Image.prefetch(image)
            .then(() => {
              imageCache[image] = true;
              resolve();
            })
            .catch(reject);
        }
      });
    }
    return Promise.resolve();
  });
  
  return Promise.all(promises);
};

/**
 * Get cached images that were previously preloaded
 * @returns {Object} - Object with cached images
 */
export const getCachedImages = () => {
  return imageCache;
};

/**
 * Clear the image cache when needed (e.g., when app is in low memory)
 */
export const clearImageCache = () => {
  Object.keys(imageCache).forEach(key => {
    delete imageCache[key];
  });
};

// Common category image sources pre-required
export const categoryImageSources = [
  { imageKey: 'speeches', image: require('../assets/speechpics/pic2003.png') },
  { imageKey: 'presentations', image: require('../assets/presentationpics/pic1.png') },
  { imageKey: 'social', image: require('../assets/socialpics/pic4002.png') },
  { imageKey: 'interview', image: require('../assets/interviewpics/pic3921.png') },
  { imageKey: 'fundamentals', image: require('../assets/presentationpics/pic1.png') }, 
  { imageKey: 'virtual', image: require('../assets/interviewpics/pic3921.png') },
  { imageKey: 'random', image: require('../assets/speechpics/pic2003.png') },
  // Added/mapped keys for onboarding screens:
  { imageKey: 'keynote_speech_stage_audience', image: require('../assets/speechpics/pic2003.png') },
  { imageKey: 'man_in_suit_speaking_on_stage_side_view', image: require('../assets/presentationpics/pic1.png') }, 
  { imageKey: 'woman_presenting_on_stage_ted_style', image: require('../assets/speechpics/pic2003.png') }
];

// Default images used by the app
export const defaultImages = {
  promptBackground: require('../assets/prompt-backgrounds/good.png'),
};

export default {
  preloadImages,
  getCachedImages,
  clearImageCache,
  categoryImageSources,
  defaultImages
}; 