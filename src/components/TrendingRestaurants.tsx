
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import { searchPixabayImages } from "../utils/pixabayApi";
import { Link } from "react-router-dom";

const TrendingRestaurants = () => {
  const [restaurantImages, setRestaurantImages] = useState<string[]>([]);
  const [allRestaurants, setAllRestaurants] = useState<any[]>([]);

  useEffect(() => {
    const loadRestaurantImages = async () => {
      const images = await searchPixabayImages('restaurant food dining', 3);
      setRestaurantImages(images);
    };
    loadRestaurantImages();

    // Load custom restaurants from localStorage
    const customRestaurants = JSON.parse(localStorage.getItem('customRestaurants') || '[]');
    
    const defaultRestaurants = [
      {
        id: 1,
        name: "The Spice Route",
        cuisine: "Indian, Asian",
        rating: 4.8,
        reviews: 1250,
        price: "₹1,200 for two",
        location: "Bandra West",
        time: "30-40 mins"
      },
      {
        id: 14,
        name: "Artisan Café",
        cuisine: "European, Desserts",
        rating: 4.6,
        reviews: 620,
        price: "₹700 for two",
        location: "Nungambakkam",
        time: "25-35 mins"
      },
      {
        id: 18,
        name: "Beachside Café",
        cuisine: "Seafood, Continental",
        rating: 4.7,
        reviews: 780,
        price: "₹1,100 for two",
        location: "Marina Beach",
        time: "20-30 mins"
      }
    ];

    // Add custom restaurants to the end
    const combinedRestaurants = [
      ...defaultRestaurants,
      ...customRestaurants.map((restaurant: any) => ({
        id: restaurant.id,
        name: restaurant.name,
        cuisine: Array.isArray(restaurant.cuisine) ? restaurant.cuisine.join(", ") : restaurant.cuisine,
        rating: restaurant.rating || 4.0,
        reviews: restaurant.reviews || 0,
        price: `₹${restaurant.priceForTwo || 800} for two`,
        location: restaurant.address.split(',')[0],
        time: "25-35 mins",
        image: restaurant.image,
        isNew: restaurant.isNewRestaurant
      }))
    ];

    setAllRestaurants(combinedRestaurants);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Trending Restaurants</h2>
          <p className="text-lg text-gray-600">Most popular restaurants based on ratings and bookings</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allRestaurants.map((restaurant, index) => (
            <div 
              key={restaurant.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 relative"
            >
              {restaurant.isNew && (
                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold z-10">
                  NEW
                </div>
              )}
              {(restaurant.image || restaurantImages[index % 3]) && (
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${restaurant.image || restaurantImages[index % 3]})` }}
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{restaurant.name}</h3>
                <p className="text-gray-600 mb-3">{restaurant.cuisine}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold mr-2">
                      ★ {restaurant.rating}
                    </div>
                    <span className="text-gray-500 text-sm">({restaurant.reviews} reviews)</span>
                  </div>
                  <span className="text-gray-700 font-semibold">{restaurant.price}</span>
                </div>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="mr-4">{restaurant.location}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{restaurant.time}</span>
                </div>
                
                <div className="flex gap-2">
                  <Link to={`/restaurant/${restaurant.id}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full">View Details</Button>
                  </Link>
                  <Link to={`/restaurant/${restaurant.id}#booking`} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Book Now</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingRestaurants;
