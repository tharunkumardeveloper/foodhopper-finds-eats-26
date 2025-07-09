
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MenuItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    isVeg: boolean;
    isSpicy?: boolean;
  };
}

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex space-x-4">
            <div 
              className="w-20 h-20 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded text-xs ${
                  item.isVeg ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {item.isVeg ? '🟢 Veg' : '🔴 Non-Veg'}
                </span>
                {item.isSpicy && (
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
                    🌶️ Spicy
                  </span>
                )}
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                  {item.category}
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-gray-900">₹{item.price}</p>
            <Button size="sm" className="mt-2 bg-orange-500 hover:bg-orange-600">
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuItem;
