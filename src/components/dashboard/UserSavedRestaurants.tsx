
import { Heart, MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getRestaurantImages } from "../../utils/pixabayApi";
import { Link } from "react-router-dom";

const UserSavedRestaurants = () => {
  const restaurantImages = getRestaurantImages();
  
  const savedRestaurants = [
    {
      id: 2,
      name: "Golden Dragon",
      cuisine: "Chinese, Thai",
      rating: 4.2,
      location: "Anna Nagar, Chennai",
      image: restaurantImages[3],
      distance: "2.5 km"
    },
    {
      id: 14, 
      name: "Artisan Café",
      cuisine: "European, Desserts",
      rating: 4.6,
      location: "Nungambakkam, Chennai",
      image: restaurantImages[4],
      distance: "3.2 km"
    },
    {
      id: 18,
      name: "Beachside Café",
      cuisine: "Seafood, Continental",
      rating: 4.7,
      location: "Marina Beach, Chennai",
      image: restaurantImages[5],
      distance: "5.1 km"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Saved Restaurants</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedRestaurants.map((restaurant) => (
          <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div 
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${restaurant.image})` }}
            />
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                <Heart className="h-5 w-5 text-red-500 fill-current" />
              </div>
              
              <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
              
              <div className="flex items-center mb-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                <span className="text-sm font-medium">{restaurant.rating}</span>
              </div>
              
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{restaurant.location} • {restaurant.distance}</span>
              </div>
              
              <div className="flex gap-2">
                <Link to={`/restaurant/${restaurant.id}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600">
                    Book Now
                  </Button>
                </Link>
                <Button variant="outline" size="sm" className="flex-1">
                  Remove
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserSavedRestaurants;
