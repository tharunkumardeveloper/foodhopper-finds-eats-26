import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import RestaurantHero from "../components/restaurant/RestaurantHero";
import RestaurantInfo from "../components/restaurant/RestaurantInfo";
import RestaurantTabs from "../components/restaurant/RestaurantTabs";
import BookingCard from "../components/restaurant/BookingCard";
import SimilarRestaurants from "../components/restaurant/SimilarRestaurants";
import { chennaiRestaurants, Restaurant } from "../data/chennaiRestaurants";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  isVeg: boolean;
  isSpicy?: boolean;
}

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [menu, setMenu] = useState<MenuItem[]>([]);

  const generateMenuByCuisine = (cuisines: string[]): MenuItem[] => {
    const menuItems: MenuItem[] = [];
    let itemId = 1;

    // Indian/Asian Menu Items
    if (cuisines.includes("Indian") || cuisines.includes("Asian")) {
      menuItems.push(
        { id: itemId++, name: "Butter Chicken", price: 380, category: "Main Course", description: "Tender chicken in rich tomato and butter gravy with aromatic spices", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: false },
        { id: itemId++, name: "Paneer Tikka Masala", price: 320, category: "Main Course", description: "Grilled cottage cheese in creamy tomato gravy", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: true },
        { id: itemId++, name: "Hyderabadi Biryani", price: 420, category: "Rice", description: "Aromatic basmati rice layered with marinated meat and saffron", image: "https://images.unsplash.com/photo-1563379091339-03246967d4d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: false, isSpicy: true },
        { id: itemId++, name: "Dal Makhani", price: 240, category: "Main Course", description: "Slow-cooked black lentils in butter and cream", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: true },
        { id: itemId++, name: "Tandoori Platter", price: 650, category: "Appetizer", description: "Mixed grilled meats and vegetables from tandoor oven", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: false, isSpicy: true }
      );
    }

    // European/Desserts Menu Items (Café)
    if (cuisines.includes("European") || cuisines.includes("Desserts")) {
      menuItems.push(
        { id: itemId++, name: "Artisan Coffee", price: 180, category: "Beverages", description: "Single-origin coffee beans, expertly roasted and brewed", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: true },
        { id: itemId++, name: "French Croissant", price: 120, category: "Pastry", description: "Buttery, flaky pastry baked fresh daily", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: true },
        { id: itemId++, name: "Tiramisu", price: 280, category: "Dessert", description: "Classic Italian dessert with coffee-soaked ladyfingers", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: true },
        { id: itemId++, name: "European Breakfast", price: 350, category: "Breakfast", description: "Continental breakfast with fresh bread, cheese, and cold cuts", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: false },
        { id: itemId++, name: "Chocolate Lava Cake", price: 220, category: "Dessert", description: "Warm chocolate cake with molten center, served with vanilla ice cream", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: true }
      );
    }

    // Seafood/Continental Menu Items
    if (cuisines.includes("Seafood") || cuisines.includes("Continental")) {
      menuItems.push(
        { id: itemId++, name: "Grilled Sea Bass", price: 580, category: "Seafood", description: "Fresh sea bass grilled with herbs and lemon butter", image: "https://images.unsplash.com/photo-1559847844-d21b22d5ba00?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: false },
        { id: itemId++, name: "Prawn Cocktail", price: 420, category: "Appetizer", description: "Chilled prawns served with cocktail sauce", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: false },
        { id: itemId++, name: "Fish & Chips", price: 380, category: "Main Course", description: "Beer-battered fish with crispy fries and tartar sauce", image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: false },
        { id: itemId++, name: "Seafood Paella", price: 650, category: "Main Course", description: "Spanish rice dish with mixed seafood and saffron", image: "https://images.unsplash.com/photo-1563379091339-03246967d4d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: false, isSpicy: true },
        { id: itemId++, name: "Ocean View Salad", price: 280, category: "Salad", description: "Fresh greens with seafood and citrus dressing", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: false }
      );
    }

    // Chinese/Thai Menu Items
    if (cuisines.includes("Chinese") || cuisines.includes("Thai")) {
      menuItems.push(
        { id: itemId++, name: "Kung Pao Chicken", price: 320, category: "Chinese", description: "Spicy stir-fried chicken with peanuts and vegetables", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: false, isSpicy: true },
        { id: itemId++, name: "Vegetable Fried Rice", price: 220, category: "Chinese", description: "Wok-fried rice with fresh vegetables and soy sauce", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: true },
        { id: itemId++, name: "Thai Green Curry", price: 380, category: "Thai", description: "Creamy coconut curry with Thai basil and vegetables", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: true, isSpicy: true },
        { id: itemId++, name: "Sweet & Sour Pork", price: 340, category: "Chinese", description: "Crispy pork with pineapple in tangy sauce", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: false },
        { id: itemId++, name: "Pad Thai Noodles", price: 280, category: "Thai", description: "Stir-fried rice noodles with tamarind and peanuts", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: true }
      );
    }

    // Fast Food/American Menu Items
    if (cuisines.includes("Fast Food") || cuisines.includes("American")) {
      menuItems.push(
        { id: itemId++, name: "Classic Cheeseburger", price: 220, category: "Burgers", description: "Beef patty with cheese, lettuce, tomato, and special sauce", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: false },
        { id: itemId++, name: "Chicken Wings", price: 280, category: "Appetizer", description: "Crispy wings with your choice of sauce", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: false, isSpicy: true },
        { id: itemId++, name: "Loaded Fries", price: 180, category: "Sides", description: "Crispy fries topped with cheese, bacon, and green onions", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: false },
        { id: itemId++, name: "Veggie Burger", price: 190, category: "Burgers", description: "Plant-based patty with fresh vegetables", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: true },
        { id: itemId++, name: "Milkshake", price: 120, category: "Beverages", description: "Thick vanilla milkshake topped with whipped cream", image: "https://images.unsplash.com/photo-1544378730-6b3734c3dd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: true }
      );
    }

    // Café/Continental Menu Items
    if (cuisines.includes("Café") || cuisines.includes("Continental")) {
      menuItems.push(
        { id: itemId++, name: "Espresso", price: 80, category: "Coffee", description: "Strong Italian coffee, perfectly extracted", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: true },
        { id: itemId++, name: "Avocado Toast", price: 240, category: "Breakfast", description: "Smashed avocado on multigrain bread with herbs", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: true },
        { id: itemId++, name: "Pancake Stack", price: 180, category: "Breakfast", description: "Fluffy pancakes with maple syrup and butter", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: true },
        { id: itemId++, name: "Caesar Salad", price: 260, category: "Salad", description: "Romaine lettuce with parmesan and caesar dressing", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: true },
        { id: itemId++, name: "Cappuccino", price: 120, category: "Coffee", description: "Espresso with steamed milk and foam art", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", isVeg: true }
      );
    }

    return menuItems.slice(0, 8);
  };

  useEffect(() => {
    const foundRestaurant = chennaiRestaurants.find(r => r.id === parseInt(id || "0"));
    if (foundRestaurant) {
      setRestaurant(foundRestaurant);
      setMenu(generateMenuByCuisine(foundRestaurant.cuisine));
    }
  }, [id]);

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-20 p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Restaurant not found</h1>
          <Link to="/search" className="text-orange-500 hover:text-orange-600 mt-4 inline-block">
            Browse all restaurants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-16">
        <RestaurantHero restaurant={restaurant} />

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <RestaurantInfo restaurant={restaurant} />
              
              {/* Location Info Section */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Location & Contact</h2>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Address:</strong> {restaurant.address}</p>
                  <p><strong>Phone:</strong> {restaurant.phone}</p>
                  <p><strong>Hours:</strong> {restaurant.workingHours}</p>
                </div>
              </div>
              
              <RestaurantTabs restaurant={restaurant} menu={menu} />
            </div>

            <div className="lg:col-span-1">
              <BookingCard restaurant={restaurant} />
            </div>
          </div>
          
          {/* Similar Restaurants Section */}
          <SimilarRestaurants currentRestaurant={restaurant} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
