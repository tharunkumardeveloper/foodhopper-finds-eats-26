
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, MapPin, Clock, Users } from "lucide-react";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { chennaiRestaurants, Restaurant } from "../data/chennaiRestaurants";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  // Better categorization mapping
  const diningTypeCategories = {
    'fine-dining': [1, 3, 12, 20],
    'casual-dining': [2, 5, 9, 19],
    'quick-bites': [4, 10, 11, 17],
    'cafe-bistro': [8, 14, 15],
    'outdoor-dining': [6, 13, 18],
    'nightlife-bars': [7, 16]
  };

  const getCategoryDisplayName = (urlName: string) => {
    const categoryMap: { [key: string]: string } = {
      'casual-dining': 'Casual Dining',
      'fine-dining': 'Fine Dining',
      'quick-bites': 'Quick Bites',
      'cafe-bistro': 'Café & Bistro',
      'outdoor-dining': 'Outdoor Dining',
      'nightlife-bars': 'Nightlife & Bars'
    };
    return categoryMap[urlName] || urlName;
  };

  useEffect(() => {
    if (categoryName) {
      const restaurantIds = diningTypeCategories[categoryName as keyof typeof diningTypeCategories] || [];
      const categoryRestaurants = chennaiRestaurants.filter(restaurant => 
        restaurantIds.includes(restaurant.id)
      );
      setRestaurants(categoryRestaurants);
      setFilteredRestaurants(categoryRestaurants);
    }
  }, [categoryName]);

  useEffect(() => {
    let filtered = restaurants.filter(restaurant => 
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.cuisine.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (cuisineFilter) {
      filtered = filtered.filter(restaurant => 
        restaurant.cuisine.includes(cuisineFilter)
      );
    }

    // Sort restaurants
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.priceForTwo - b.priceForTwo;
        case 'price-high':
          return b.priceForTwo - a.priceForTwo;
        default:
          return 0;
      }
    });

    setFilteredRestaurants(filtered);
  }, [searchTerm, cuisineFilter, sortBy, restaurants]);

  const openInGoogleMaps = (restaurant: Restaurant) => {
    const encodedAddress = encodeURIComponent(restaurant.address);
    const url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(url, '_blank');
  };

  const displayName = categoryName ? getCategoryDisplayName(categoryName) : '';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {displayName} Restaurants
            </h1>
            <p className="text-gray-600">
              Discover amazing {displayName.toLowerCase()} experiences in Chennai
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              placeholder="Search restaurants or cuisine..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            <Select value={cuisineFilter} onValueChange={setCuisineFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by cuisine" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Cuisines</SelectItem>
                <SelectItem value="Indian">Indian</SelectItem>
                <SelectItem value="Chinese">Chinese</SelectItem>
                <SelectItem value="Continental">Continental</SelectItem>
                <SelectItem value="Italian">Italian</SelectItem>
                <SelectItem value="American">American</SelectItem>
                <SelectItem value="Japanese">Japanese</SelectItem>
                <SelectItem value="Mexican">Mexican</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="text-sm text-gray-600 flex items-center">
              {filteredRestaurants.length} restaurants found
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${restaurant.image})` }}
                />
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{restaurant.name}</h3>
                    <p className="text-gray-600 text-sm">{restaurant.cuisine.join(", ")}</p>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>{restaurant.rating} ({restaurant.reviews})</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>₹{restaurant.priceForTwo} for two</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="truncate">{restaurant.address}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-6">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{restaurant.workingHours}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link to={`/restaurant/${restaurant.id}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">
                        View Details
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      onClick={() => openInGoogleMaps(restaurant)}
                      className="px-3"
                    >
                      <MapPin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredRestaurants.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No restaurants found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
              <Link to="/dining-types" className="text-orange-500 hover:text-orange-600 mt-4 inline-block">
                Browse all dining types
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
