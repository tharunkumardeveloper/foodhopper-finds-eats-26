
import { Link } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Restaurant, chennaiRestaurants } from "../../data/chennaiRestaurants";

interface SimilarRestaurantsProps {
  currentRestaurant: Restaurant;
}

const SimilarRestaurants = ({ currentRestaurant }: SimilarRestaurantsProps) => {
  // Find restaurants with similar cuisine or dining type
  const getSimilarRestaurants = () => {
    return chennaiRestaurants
      .filter(restaurant => 
        restaurant.id !== currentRestaurant.id && (
          restaurant.cuisine.some(cuisine => currentRestaurant.cuisine.includes(cuisine)) ||
          restaurant.dineTypes.some(type => currentRestaurant.dineTypes.includes(type))
        )
      )
      .slice(0, 3);
  };

  const similarRestaurants = getSimilarRestaurants();

  if (similarRestaurants.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Restaurants</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similarRestaurants.map((restaurant) => (
          <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div 
              className="h-32 bg-cover bg-center"
              style={{ backgroundImage: `url(${restaurant.image})` }}
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{restaurant.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine.join(", ")}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span>{restaurant.rating}</span>
                </div>
                <div className="flex items-center">
                  <span>₹{restaurant.priceForTwo} for two</span>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="truncate">{restaurant.address}</span>
              </div>
              
              <Link 
                to={`/restaurant/${restaurant.id}`}
                className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm"
              >
                View Details
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SimilarRestaurants;
