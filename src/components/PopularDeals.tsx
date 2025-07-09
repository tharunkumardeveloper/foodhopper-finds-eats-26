
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Percent, Star } from "lucide-react";

const PopularDeals = () => {
  const deals = [
    {
      id: 1,
      restaurant: "The Spice Route",
      discount: "30% OFF",
      originalPrice: 800,
      discountedPrice: 560,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      validUntil: "Limited Time",
      restaurantId: 1
    },
    {
      id: 2,
      restaurant: "Burger Hub",
      discount: "25% OFF",
      originalPrice: 400,
      discountedPrice: 300,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      validUntil: "Today Only",
      restaurantId: 11
    },
    {
      id: 3,
      restaurant: "Brew & Beans",
      discount: "20% OFF",
      originalPrice: 600,
      discountedPrice: 480,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      validUntil: "This Week",
      restaurantId: 15
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Deals</h2>
          <p className="text-lg text-gray-600">Save big on your favorite restaurants</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div 
              key={deal.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border"
            >
              <div className="relative">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${deal.image})` }}
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold">
                  <Percent className="h-3 w-3 inline mr-1" />
                  {deal.discount}
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  <Star className="h-3 w-3 inline mr-1" />
                  {deal.rating}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{deal.restaurant}</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-green-600">₹{deal.discountedPrice}</span>
                    <span className="text-sm text-gray-500 line-through">₹{deal.originalPrice}</span>
                  </div>
                  <div className="flex items-center text-sm text-orange-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{deal.validUntil}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Link to={`/restaurant/${deal.restaurantId}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      Order Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/search">
            <Button variant="outline" size="lg">
              View All Deals
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDeals;
