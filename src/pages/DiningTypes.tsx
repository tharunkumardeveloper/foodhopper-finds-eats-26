
import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Users, Clock } from "lucide-react";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { chennaiRestaurants } from "../data/chennaiRestaurants";

const DiningTypes = () => {
  const [selectedType, setSelectedType] = useState<string>('');

  // Categorize restaurants by dining type
  const diningTypeCategories = {
    'Fine Dining': [1, 3, 12, 20], // The Spice Route, Royal Palace Dining, Sushi Zen, Skyline Dining
    'Casual Dining': [2, 5, 9, 19], // Golden Dragon, The Family Table, Dosa Palace, Grandma's Kitchen
    'Quick Bites': [4, 10, 11, 17], // Pizza Corner Express, Taco Fiesta, Burger Hub, Biryani Express
    'Café & Bistro': [8, 14, 15], // Morning Glory Café, Artisan Café, Brew & Beans
    'Outdoor Dining': [6, 13, 18], // Twilight Terrace, The Garden Bistro, Beachside Café
    'Nightlife & Bars': [7, 16] // Night Owl Lounge, Sports Bar Central
  };

  const getRestaurantsByType = (dineType: string) => {
    const restaurantIds = diningTypeCategories[dineType as keyof typeof diningTypeCategories] || [];
    return chennaiRestaurants.filter(restaurant => restaurantIds.includes(restaurant.id));
  };

  const diningTypes = [
    {
      name: "Fine Dining",
      description: "Elegant restaurants with premium cuisine and exceptional service",
      count: getRestaurantsByType("Fine Dining").length,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Casual Dining",
      description: "Relaxed atmosphere perfect for family meals and friendly gatherings",
      count: getRestaurantsByType("Casual Dining").length,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Quick Bites",
      description: "Fast and convenient meals for busy lifestyles",
      count: getRestaurantsByType("Quick Bites").length,
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Café & Bistro",
      description: "Cozy spots perfect for coffee, light meals, and conversations",
      count: getRestaurantsByType("Café & Bistro").length,
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Outdoor Dining",
      description: "Al fresco dining with beautiful views and fresh air",
      count: getRestaurantsByType("Outdoor Dining").length,
      image: "https://images.unsplash.com/photo-1530062845289-9109b2113427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-teal-500 to-blue-500"
    },
    {
      name: "Nightlife & Bars",
      description: "Vibrant spots for drinks, entertainment, and evening dining",
      count: getRestaurantsByType("Nightlife & Bars").length,
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const selectedRestaurants = selectedType ? getRestaurantsByType(selectedType) : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Explore Dining Types
            </h1>
            <p className="text-lg text-gray-600">
              Discover the perfect dining experience for every occasion
            </p>
          </div>

          {!selectedType ? (
            // Dining Type Categories Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {diningTypes.map((type) => (
                <Card 
                  key={type.name}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                  onClick={() => setSelectedType(type.name)}
                >
                  <div className="relative">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${type.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-gray-800">{type.count} restaurants</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{type.name}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="flex items-center text-orange-600 group-hover:text-orange-700 transition-colors">
                      <span className="font-medium">Explore restaurants</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            // Selected Type Restaurants Grid
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedType}</h2>
                  <p className="text-gray-600">{selectedRestaurants.length} restaurants found</p>
                </div>
                <Button 
                  onClick={() => setSelectedType('')}
                  variant="outline"
                  className="hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200"
                >
                  ← Back to Categories
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedRestaurants.map((restaurant) => (
                  <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${restaurant.image})` }}
                    />
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{restaurant.name}</h3>
                        <p className="text-gray-600 text-sm">{restaurant.cuisine.join(", ")}</p>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span>{restaurant.rating} ({restaurant.reviews})</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>₹{restaurant.priceForTwo} for two</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span className="truncate">{restaurant.address}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{restaurant.workingHours}</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Link 
                          to={`/restaurant/${restaurant.id}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex-1"
                        >
                          <Button 
                            variant="outline" 
                            className="w-full hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200"
                          >
                            View Details
                          </Button>
                        </Link>
                        <Link 
                          to={`/restaurant/${restaurant.id}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex-1"
                        >
                          <Button className="w-full bg-orange-500 hover:bg-orange-600">
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiningTypes;
