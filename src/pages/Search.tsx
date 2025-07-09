
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Star, Clock, Filter } from "lucide-react";
import { searchPixabayImages } from "../utils/pixabayApi";
import { chennaiRestaurants } from "../data/chennaiRestaurants";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [restaurantImages, setRestaurantImages] = useState<string[]>([]);
  const [allRestaurants, setAllRestaurants] = useState<any[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<any[]>([]);
  
  const isNearby = searchParams.get('nearby') === 'true';
  const diningType = searchParams.get('type') || '';

  useEffect(() => {
    const loadRestaurantImages = async () => {
      const customRestaurants = JSON.parse(localStorage.getItem('customRestaurants') || '[]');
      const totalRestaurants = chennaiRestaurants.length + customRestaurants.length;
      const images = await searchPixabayImages('restaurant food dining elegant interior gourmet cuisine variety', totalRestaurants);
      setRestaurantImages(images);
    };
    loadRestaurantImages();

    // Combine default restaurants with custom ones
    const customRestaurants = JSON.parse(localStorage.getItem('customRestaurants') || '[]');
    const combinedRestaurants = [
      ...chennaiRestaurants,
      ...customRestaurants.map((restaurant: any) => ({
        ...restaurant,
        cuisine: Array.isArray(restaurant.cuisine) ? restaurant.cuisine : [restaurant.cuisine || "Multi Cuisine"],
        isNewRestaurant: true
      }))
    ];
    setAllRestaurants(combinedRestaurants);
    setFilteredRestaurants(combinedRestaurants);
  }, []);

  useEffect(() => {
    if (isNearby) {
      setLocation("Near your location");
    }
    if (diningType) {
      setSearchQuery(diningType.replace('-', ' '));
    }
  }, [isNearby, diningType]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredRestaurants(allRestaurants);
    } else {
      const filtered = allRestaurants.filter(restaurant => {
        const matchesName = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCuisine = restaurant.cuisine.some((c: string) => 
          c.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const matchesDish = restaurant.menuItems?.some((item: any) => 
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        return matchesName || matchesCuisine || matchesDish;
      });
      setFilteredRestaurants(filtered);
    }
  }, [searchQuery, allRestaurants]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Search Header */}
          <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <SearchBar onSearch={handleSearch} />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Button 
                variant="outline"
                size="lg"
                className="h-12 px-4"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cuisine</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>All Cuisines</option>
                    <option>Indian</option>
                    <option>Chinese</option>
                    <option>Italian</option>
                    <option>Continental</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>All Prices</option>
                    <option>Under ₹500</option>
                    <option>₹500 - ₹1000</option>
                    <option>₹1000 - ₹2000</option>
                    <option>Above ₹2000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>All Ratings</option>
                    <option>4.5+ Stars</option>
                    <option>4.0+ Stars</option>
                    <option>3.5+ Stars</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dining Type</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>All Types</option>
                    <option>Dine-in</option>
                    <option>Takeaway</option>
                    <option>Delivery</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Results Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {isNearby ? "All Restaurants" : searchQuery ? `Results for "${searchQuery}"` : "All Restaurants"}
            </h2>
            <p className="text-gray-600">{filteredRestaurants.length} restaurants found</p>
          </div>

          {/* Restaurant Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant, index) => (
              <div 
                key={restaurant.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative"
              >
                {restaurant.isNewRestaurant && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold z-10">
                    NEW
                  </div>
                )}
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${restaurantImages[index] || restaurant.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{restaurant.name}</h3>
                  <p className="text-gray-600 mb-3">{restaurant.cuisine.join(", ")}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold mr-2">
                        <Star className="h-3 w-3 inline mr-1" />
                        {restaurant.rating}
                      </div>
                      <span className="text-gray-500 text-sm">({restaurant.reviews} reviews)</span>
                    </div>
                    <span className="text-gray-700 font-semibold">₹{restaurant.priceForTwo} for two</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="mr-4">{restaurant.address.split(',')[0]}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{restaurant.workingHours ? restaurant.workingHours.split(' - ')[0] : "9:00 AM"}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link to={`/restaurant/${restaurant.id}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                    <Link to={`/restaurant/${restaurant.id}#booking`} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">
                        Book Table
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
