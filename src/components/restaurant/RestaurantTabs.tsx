
import { useState } from "react";
import { ChefHat, Camera } from "lucide-react";
import MenuItem from "./MenuItem";
import { Restaurant } from "../../data/chennaiRestaurants";

interface RestaurantTabsProps {
  restaurant: Restaurant;
  menu: Array<{
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    isVeg: boolean;
    isSpicy?: boolean;
  }>;
}

const RestaurantTabs = ({ restaurant, menu }: RestaurantTabsProps) => {
  const [activeTab, setActiveTab] = useState("menu");

  const tabs = [
    { id: "menu", name: "Menu", icon: ChefHat },
    { id: "gallery", name: "Gallery", icon: Camera },
  ];

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="border-b">
        <nav className="flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {tab.name}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "menu" && (
        <div className="space-y-4">
          {menu.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      )}

      {activeTab === "gallery" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {restaurant.gallery.map((image, index) => (
            <div 
              key={index}
              className="h-48 bg-cover bg-center rounded-lg cursor-pointer hover:scale-105 transition-transform"
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantTabs;
