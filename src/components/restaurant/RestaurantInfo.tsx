
import { Clock, Phone, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Restaurant } from "../../data/chennaiRestaurants";

interface RestaurantInfoProps {
  restaurant: Restaurant;
}

const RestaurantInfo = ({ restaurant }: RestaurantInfoProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-gray-500 mr-2" />
            <div>
              <p className="font-semibold">Working Hours</p>
              <p className="text-sm text-gray-600">{restaurant.workingHours}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Phone className="h-5 w-5 text-gray-500 mr-2" />
            <div>
              <p className="font-semibold">Contact</p>
              <p className="text-sm text-gray-600">{restaurant.phone}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 text-gray-500 mr-2" />
            <div>
              <p className="font-semibold">Price for Two</p>
              <p className="text-sm text-gray-600">₹{restaurant.priceForTwo}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <p className="text-gray-700">{restaurant.description}</p>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {restaurant.features.map((feature, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
            >
              {feature}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
