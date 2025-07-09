
const PIXABAY_API_KEY = '51101534-5ea0626a1f88bac19855c0037';
const PIXABAY_BASE_URL = 'https://pixabay.com/api/';

export const searchPixabayImages = async (query: string, perPage: number = 12) => {
  try {
    // Pixabay API allows per_page from 3 to 200, so we need to clamp the value
    const clampedPerPage = Math.max(3, Math.min(200, perPage));
    
    const response = await fetch(`${PIXABAY_BASE_URL}?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&per_page=${clampedPerPage}&safesearch=true&min_width=1920&min_height=1080&order=popular&category=food,places,people,backgrounds`);
    
    if (!response.ok) {
      console.error('Pixabay API error:', response.status, response.statusText);
      return getFallbackImages().slice(0, perPage);
    }
    
    const data = await response.json();
    const images = data.hits.map((hit: any) => hit.largeImageURL || hit.webformatURL);
    
    // If we don't get enough images, pad with fallback images
    if (images.length < perPage) {
      const fallbackImages = getFallbackImages();
      const additionalImages = fallbackImages.slice(0, perPage - images.length);
      return [...images, ...additionalImages];
    }
    
    return images.slice(0, perPage);
  } catch (error) {
    console.error('Error fetching Pixabay images:', error);
    return getFallbackImages().slice(0, perPage);
  }
};

// High-quality fallback images from Pixabay (using direct URLs)
const getFallbackImages = () => [
  'https://cdn.pixabay.com/photo/2017/08/03/13/30/people-2576336_1920.jpg',
  'https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1920.jpg',
  'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1920.jpg',
  'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1920.jpg',
  'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1920.jpg',
  'https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1920.jpg',
  'https://cdn.pixabay.com/photo/2016/11/18/14/39/beans-1834984_1920.jpg',
  'https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2280656_1920.jpg',
  'https://cdn.pixabay.com/photo/2015/03/26/09/54/peppermint-tea-690733_1920.jpg',
  'https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1897649_1920.jpg',
  'https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_1920.jpg',
  'https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_1920.jpg',
  'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1920.jpg',
  'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1920.jpg',
  'https://cdn.pixabay.com/photo/2016/02/29/12/49/woman-1228328_1920.jpg',
  'https://cdn.pixabay.com/photo/2014/08/14/14/21/shish-kebab-417994_1920.jpg'
];

// Generic image fetching functions with better search terms
export const fetchHeroImages = async () => {
  return await searchPixabayImages('restaurant food gourmet dining', 8);
};

export const fetchRestaurantImages = async () => {
  return await searchPixabayImages('restaurant interior dining', 12);
};

export const fetchFoodImages = async () => {
  return await searchPixabayImages('food dish meal cuisine', 12);
};

export const fetchCuisineImages = async () => {
  return await searchPixabayImages('food cuisine meal', 8);
};

export const fetchCityImages = async () => {
  return await searchPixabayImages('city skyline urban', 8);
};

export const fetchDiningImages = async () => {
  return await searchPixabayImages('restaurant dining food', 8);
};

export const fetchUserAvatars = async () => {
  return await searchPixabayImages('person portrait professional', 8);
};

export const fetchAmbientImages = async () => {
  return await searchPixabayImages('restaurant atmosphere dining', 6);
};

// Static getter functions that return dynamic results
export const getHeroImages = () => getFallbackImages();
export const getRestaurantImages = () => getFallbackImages();
export const getFoodImages = () => getFallbackImages();
export const getCuisineImages = () => getFallbackImages();
export const getCityImages = () => getFallbackImages();
export const getDiningImages = () => getFallbackImages();
export const getUserAvatars = () => getFallbackImages();
export const getAmbientImages = () => getFallbackImages();
