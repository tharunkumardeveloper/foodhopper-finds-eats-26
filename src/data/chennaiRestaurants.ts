
export interface Restaurant {
  id: number;
  name: string;
  cuisine: string[];
  rating: number;
  reviews: number;
  priceForTwo: number;
  address: string;
  workingHours: string;
  image: string;
  dineTypes: string[];
  phone: string;
  description: string;
  features: string[];
  gallery: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const chennaiRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "The Spice Route",
    cuisine: ["Indian", "Asian"],
    rating: 4.8,
    reviews: 1250,
    priceForTwo: 1200,
    address: "Express Avenue Mall, Royapettah, Chennai - 600014",
    workingHours: "12:00 PM - 11:30 PM",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Fine Dining"],
    phone: "+91 98765 43210",
    description: "Experience authentic Indian and Asian flavors in an elegant setting with traditional spices and modern presentation. Our award-winning chefs create memorable dining experiences.",
    features: ["Air Conditioned", "Free WiFi", "Valet Parking", "Private Dining", "Live Music", "Full Bar", "Wheelchair Accessible"],
    gallery: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 13.0827, lng: 80.2707 }
  },
  {
    id: 2,
    name: "Golden Dragon",
    cuisine: ["Chinese", "Thai"],
    rating: 4.2,
    reviews: 540,
    priceForTwo: 750,
    address: "Anna Nagar, Chennai - 600040",
    workingHours: "11:30 AM - 10:45 PM",
    image: "https://images.unsplash.com/photo-1559847844-d21b22d5ba00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Casual Dining"],
    phone: "+91 98765 43213",
    description: "Authentic Chinese and Thai cuisine with traditional flavors and modern presentation in a comfortable dining atmosphere. Perfect for family gatherings and casual meals.",
    features: ["Air Conditioned", "Family Friendly", "Takeaway", "Chinese Specialties", "Thai Curries", "Group Dining", "Kids Menu"],
    gallery: [
      "https://images.unsplash.com/photo-1559847844-d21b22d5ba00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 13.0878, lng: 80.2785 }
  },
  {
    id: 3,
    name: "Royal Palace Dining",
    cuisine: ["Indian", "Mughlai"],
    rating: 4.9,
    reviews: 1890,
    priceForTwo: 1800,
    address: "T. Nagar, Chennai - 600017",
    workingHours: "12:00 PM - 11:00 PM",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Fine Dining"],
    phone: "+91 98765 43216",
    description: "Experience royal Mughlai cuisine in an opulent setting with live classical music and traditional service. Our heritage recipes have been perfected over generations.",
    features: ["Live Music", "Royal Ambiance", "Traditional Service", "Private Dining Rooms", "Valet Parking", "Premium Bar", "Cultural Shows"],
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 13.0418, lng: 80.2341 }
  },
  {
    id: 4,
    name: "Pizza Corner Express",
    cuisine: ["Italian", "Fast Food"],
    rating: 4.1,
    reviews: 1560,
    priceForTwo: 350,
    address: "Vadapalani, Chennai - 600026",
    workingHours: "11:00 AM - 1:00 AM",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Quick Bites"],
    phone: "+91 98765 43217",
    description: "Quick and delicious wood-fired pizzas with fresh toppings, perfect for fast meals and takeaway orders. Made with authentic Italian techniques and fresh ingredients.",
    features: ["Wood-fired Oven", "Quick Service", "Takeaway", "Home Delivery", "Student Friendly", "Fresh Dough Daily", "Customizable Toppings"],
    gallery: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1532636719873-1196ab4b7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 13.0514, lng: 80.2103 }
  },
  {
    id: 5,
    name: "The Family Table",
    cuisine: ["Multi-cuisine", "Indian"],
    rating: 4.3,
    reviews: 890,
    priceForTwo: 650,
    address: "Adyar, Chennai - 600020",
    workingHours: "11:00 AM - 10:30 PM",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Casual Dining"],
    phone: "+91 98765 43218",
    description: "A warm and welcoming restaurant perfect for family gatherings with diverse menu options for all age groups. Our spacious seating and friendly service make every visit memorable.",
    features: ["Family Friendly", "Kids Menu", "Group Bookings", "Birthday Celebrations", "Air Conditioned", "Play Area", "Special Occasions"],
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 13.0067, lng: 80.2568 }
  },
  {
    id: 6,
    name: "Twilight Terrace",
    cuisine: ["Continental", "Mediterranean"],
    rating: 4.8,
    reviews: 1020,
    priceForTwo: 1300,
    address: "Boat Club Road, Chennai - 600028",
    workingHours: "6:00 PM - 12:00 AM",
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Outdoor Dining"],
    phone: "+91 98765 43219",
    description: "Rooftop dining experience with Mediterranean cuisine, craft cocktails, and panoramic city views under the stars. Perfect for romantic dinners and special occasions.",
    features: ["Rooftop Dining", "City Views", "Craft Cocktails", "Live DJ", "Romantic Setting", "Sunset Views", "Climate Controlled Terrace"],
    gallery: [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1530062845289-9109b2113427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559847844-d21b22d5ba00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 13.0569, lng: 80.2426 }
  },
  {
    id: 7,
    name: "Night Owl Lounge",
    cuisine: ["Finger Food", "Cocktails"],
    rating: 4.4,
    reviews: 1340,
    priceForTwo: 2000,
    address: "Phoenix MarketCity, Chennai - 600142",
    workingHours: "7:00 PM - 2:00 AM",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Nightlife & Bars"],
    phone: "+91 98765 43220",
    description: "Upscale lounge with signature cocktails, gourmet finger foods, and live entertainment in a sophisticated setting. Chennai's premier nightlife destination.",
    features: ["Signature Cocktails", "Live Entertainment", "DJ Nights", "VIP Sections", "Late Night Dining", "Premium Spirits", "Dance Floor"],
    gallery: [
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 12.9952, lng: 80.2229 }
  },
  {
    id: 8,
    name: "Morning Glory Café",
    cuisine: ["Breakfast", "Healthy"],
    rating: 4.5,
    reviews: 750,
    priceForTwo: 450,
    address: "Alwarpet, Chennai - 600018",
    workingHours: "6:00 AM - 2:00 PM",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Café & Bistro"],
    phone: "+91 98765 43221",
    description: "Start your day right with healthy breakfast options, fresh juices, and organic coffee in a bright, airy space. Our menu focuses on nutritious and delicious morning meals.",
    features: ["Healthy Options", "Fresh Juices", "Organic Coffee", "Early Opening", "Outdoor Seating", "Vegan Options", "Fresh Bakery"],
    gallery: [
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 13.0339, lng: 80.2619 }
  },
  {
    id: 9,
    name: "Dosa Palace",
    cuisine: ["South Indian", "Traditional"],
    rating: 4.6,
    reviews: 2200,
    priceForTwo: 300,
    address: "Mylapore, Chennai - 600004",
    workingHours: "6:00 AM - 11:00 PM",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Casual Dining"],
    phone: "+91 98765 43222",
    description: "Authentic South Indian cuisine with crispy dosas, fluffy idlis, and traditional filter coffee in a heritage setting. A Chennai institution for traditional flavors.",
    features: ["Authentic Recipes", "Filter Coffee", "Traditional Ambiance", "Budget Friendly", "Quick Service", "Heritage Recipes", "All Day Dining"],
    gallery: [
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 13.0339, lng: 80.2619 }
  },
  {
    id: 10,
    name: "Taco Fiesta",
    cuisine: ["Mexican", "Tex-Mex"],
    rating: 4.3,
    reviews: 860,
    priceForTwo: 550,
    address: "Velachery, Chennai - 600042",
    workingHours: "12:00 PM - 11:00 PM",
    image: "https://images.unsplash.com/photo-1565299585323-38174c22f0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Quick Bites"],
    phone: "+91 98765 43223",
    description: "Vibrant Mexican restaurant serving authentic tacos, burritos, and margaritas with a lively fiesta atmosphere. Experience the true taste of Mexico in Chennai.",
    features: ["Authentic Mexican", "Margaritas", "Vibrant Decor", "Live Mariachi", "Spicy Food", "Mexican Imports", "Festive Atmosphere"],
    gallery: [
      "https://images.unsplash.com/photo-1565299585323-38174c22f0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1532636719873-1196ab4b7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 12.9816, lng: 80.2209 }
  },
  {
    id: 11,
    name: "Burger Hub",
    cuisine: ["Fast Food", "American"],
    rating: 4.2,
    reviews: 2100,
    priceForTwo: 400,
    address: "Express Avenue, Chennai - 600014",
    workingHours: "10:00 AM - 12:00 AM",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Quick Bites"],
    phone: "+91 98765 43214",
    description: "Delicious gourmet burgers and American fast food favorites in a casual, friendly environment perfect for quick meals. Made with fresh ingredients and served fast.",
    features: ["Quick Service", "Takeaway", "Delivery", "Family Friendly", "Value for Money", "Fresh Ingredients", "Customizable Burgers"],
    gallery: [
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1532636719873-1196ab4b7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 13.0827, lng: 80.2707 }
  },
  {
    id: 12,
    name: "Sushi Zen",
    cuisine: ["Japanese", "Sushi"],
    rating: 4.7,
    reviews: 950,
    priceForTwo: 1500,
    address: "Banjara Hills, Chennai - 600034",
    workingHours: "12:30 PM - 10:30 PM",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Fine Dining"],
    phone: "+91 98765 43224",
    description: "Authentic Japanese cuisine with fresh sushi, sashimi, and traditional dishes in a serene zen-inspired setting. Our master chefs bring Tokyo's finest flavors to Chennai.",
    features: ["Fresh Sushi", "Zen Ambiance", "Traditional Service", "Premium Ingredients", "Sake Collection", "Omakase Experience", "Japanese Imports"],
    gallery: [
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 13.0569, lng: 80.2426 }
  },
  {
    id: 13,
    name: "The Garden Bistro",
    cuisine: ["Continental", "Salads"],
    rating: 4.4,
    reviews: 670,
    priceForTwo: 850,
    address: "Boat Club Road, Chennai - 600028",
    workingHours: "11:00 AM - 10:00 PM",
    image: "https://images.unsplash.com/photo-1530062845289-9109b2113427?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Outdoor Dining"],
    phone: "+91 98765 43225",
    description: "Beautiful garden setting with fresh continental cuisine, organic salads, and natural ambiance perfect for relaxed dining. Surrounded by lush greenery and fresh air.",
    features: ["Garden Setting", "Organic Ingredients", "Natural Ambiance", "Pet Friendly", "Fresh Air", "Sustainable Dining", "Farm-to-Table"],
    gallery: [
      "https://images.unsplash.com/photo-1530062845289-9109b2113427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 13.0569, lng: 80.2426 }
  },
  {
    id: 14,
    name: "Artisan Café",
    cuisine: ["European", "Desserts"],
    rating: 4.6,
    reviews: 620,
    priceForTwo: 700,
    address: "Nungambakkam, Chennai - 600034",
    workingHours: "8:00 AM - 11:30 PM",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Café & Bistro"],
    phone: "+91 98765 43211",
    description: "A cozy European-style café serving artisanal coffee, fresh pastries, and gourmet desserts in a warm atmosphere. Perfect for work meetings and casual conversations.",
    features: ["Free WiFi", "Outdoor Seating", "Fresh Pastries", "Specialty Coffee", "Book Corner", "Artisan Breads", "Dessert Selection"],
    gallery: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 13.0569, lng: 80.2426 }
  },
  {
    id: 15,
    name: "Brew & Beans",
    cuisine: ["Café", "Continental"],
    rating: 4.5,
    reviews: 980,
    priceForTwo: 600,
    address: "Besant Nagar, Chennai - 600090",
    workingHours: "7:00 AM - 11:00 PM",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Café & Bistro"],
    phone: "+91 98765 43215",
    description: "Premium coffee experience with freshly roasted beans, continental breakfast options, and cozy ambiance for work and relaxation. The perfect spot for coffee lovers.",
    features: ["Specialty Coffee", "Free WiFi", "Work Friendly", "Fresh Beans", "Continental Menu", "Laptop Friendly", "Bean Roastery"],
    gallery: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544378730-6b3734c3dd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 12.9010, lng: 80.2668 }
  },
  {
    id: 16,
    name: "Sports Bar Central",
    cuisine: ["American", "Bar Food"],
    rating: 4.2,
    reviews: 1120,
    priceForTwo: 1200,
    address: "OMR, Chennai - 600097",
    workingHours: "4:00 PM - 1:00 AM",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Nightlife & Bars"],
    phone: "+91 98765 43226",
    description: "Ultimate sports viewing experience with multiple screens, craft beers, and hearty American bar food. The go-to destination for sports enthusiasts and group gatherings.",
    features: ["Multiple Screens", "Live Sports", "Craft Beer", "Pool Tables", "Game Nights", "Large Groups", "Sports Packages"],
    gallery: [
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 12.8449, lng: 80.2281 }
  },
  {
    id: 17,
    name: "Biryani Express",
    cuisine: ["Biryani", "Hyderabadi"],
    rating: 4.5,
    reviews: 1800,
    priceForTwo: 500,
    address: "Tambaram, Chennai - 600045",
    workingHours: "11:00 AM - 11:00 PM",
    image: "https://images.unsplash.com/photo-1563379091339-03246967d4d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Quick Bites"],
    phone: "+91 98765 43227",
    description: "Authentic Hyderabadi biryani and traditional dishes served quickly with rich flavors and aromatic spices. Made with the finest basmati rice and premium ingredients.",
    features: ["Authentic Biryani", "Quick Service", "Traditional Recipes", "Home Delivery", "Value Meals", "Dum Cooking", "Hyderabadi Style"],
    gallery: [
      "https://images.unsplash.com/photo-1563379091339-03246967d4d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 12.9249, lng: 80.1000 }
  },
  {
    id: 18,
    name: "Beachside Café",
    cuisine: ["Seafood", "Continental"],
    rating: 4.7,
    reviews: 780,
    priceForTwo: 1100,
    address: "Marina Beach, Chennai - 600001",
    workingHours: "5:00 PM - 11:00 PM",
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Outdoor Dining"],
    phone: "+91 98765 43212",
    description: "Enjoy fresh seafood and continental cuisine with stunning ocean views at Chennai's premier beachside dining destination. Perfect for romantic dinners by the sea.",
    features: ["Ocean View", "Fresh Seafood", "Outdoor Dining", "Sunset Views", "Live Music", "Sea Breeze", "Romantic Setting"],
    gallery: [
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559847844-d21b22d5ba00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1530062845289-9109b2113427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 13.0549, lng: 80.2830 }
  },
  {
    id: 19,
    name: "Grandma's Kitchen",
    cuisine: ["Home-style", "Comfort Food"],
    rating: 4.8,
    reviews: 1450,
    priceForTwo: 400,
    address: "Guindy, Chennai - 600032",
    workingHours: "10:00 AM - 9:00 PM",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Casual Dining"],
    phone: "+91 98765 43228",
    description: "Home-style cooking with traditional recipes passed down through generations, served in a cozy family atmosphere. Like eating at your grandmother's house.",
    features: ["Home-style Cooking", "Traditional Recipes", "Cozy Atmosphere", "Family Friendly", "Comfort Food", "Heritage Recipes", "Nostalgic Ambiance"],
    gallery: [
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 13.0119, lng: 80.2200 }
  },
  {
    id: 20,
    name: "Skyline Dining",
    cuisine: ["International", "Fusion"],
    rating: 4.9,
    reviews: 1200,
    priceForTwo: 2500,
    address: "UB City Mall, Chennai - 600001",
    workingHours: "7:00 PM - 12:00 AM",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    dineTypes: ["Fine Dining"],
    phone: "+91 98765 43229",
    description: "Exquisite fine dining experience with international fusion cuisine and breathtaking city skyline views from the 25th floor. Chennai's most prestigious dining destination.",
    features: ["City Skyline Views", "International Fusion", "25th Floor Location", "Premium Service", "Romantic Setting", "Celebrity Chef", "Wine Pairing"],
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    coordinates: { lat: 13.0827, lng: 80.2707 }
  }
];

export const getDineTypes = () => {
  const types = new Set<string>();
  chennaiRestaurants.forEach(restaurant => {
    restaurant.dineTypes.forEach(type => types.add(type));
  });
  return Array.from(types);
};
