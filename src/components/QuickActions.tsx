
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Star } from "lucide-react";

const QuickActions = () => {
  const quickActions = [
    {
      title: "Order Food Near Me",
      description: "Find restaurants delivering to your location",
      icon: MapPin,
      link: "/search?nearby=true",
      color: "bg-blue-500",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Quick Delivery",
      description: "Get food delivered in 30 minutes or less",
      icon: Clock,
      link: "/category/quick-bites",
      color: "bg-green-500",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Book for Group",
      description: "Perfect restaurants for large gatherings",
      icon: Users,
      link: "/category/casual-dining",
      color: "bg-purple-500",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Top Rated",
      description: "Restaurants with highest customer ratings",
      icon: Star,
      link: "/search?sort=rating",
      color: "bg-yellow-500",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <p className="text-lg text-gray-600">What are you looking for today?</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link 
                key={index}
                to={action.link}
                className="block hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl">
                  <div 
                    className="h-32 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${action.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className={`absolute top-4 left-4 ${action.color} p-2 rounded-full`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{action.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{action.description}</p>
                    <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600">
                      Explore Now
                    </Button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
