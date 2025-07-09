
import { useState, useEffect } from "react";
import { searchPixabayImages } from "../utils/pixabayApi";

const Categories = () => {
  const [categoryImages, setCategoryImages] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const loadCategoryImages = async () => {
      // Use simple, effective search terms that will return relevant results
      const fineDiningImages = await searchPixabayImages('elegant restaurant dining', 3);
      const fastFoodImages = await searchPixabayImages('burger food meal', 3);
      const cafeImages = await searchPixabayImages('coffee cafe drink', 3);
      const veganImages = await searchPixabayImages('salad healthy food', 3);
      const dessertImages = await searchPixabayImages('cake dessert sweet', 3);
      const streetFoodImages = await searchPixabayImages('food meal snack', 3);

      setCategoryImages({
        'Fine Dining': fineDiningImages[0],
        'Fast Food': fastFoodImages[0],
        'Cafes': cafeImages[0],
        'Vegan': veganImages[0],
        'Desserts': dessertImages[0],
        'Street Food': streetFoodImages[0]
      });
    };
    loadCategoryImages();
  }, []);
  
  const categories = [
    {
      name: "Fine Dining",
      icon: "🍽️",
      count: "500+ restaurants",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Fast Food",
      icon: "🍔",
      count: "1200+ restaurants", 
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Cafes",
      icon: "☕",
      count: "800+ restaurants",
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Vegan",
      icon: "🥗",
      count: "300+ restaurants",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Desserts",
      icon: "🧁",
      count: "400+ restaurants",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Street Food",
      icon: "🌮",
      count: "600+ restaurants",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Browse by Category</h2>
          <p className="text-lg text-gray-600">Find restaurants that match your mood</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className="group cursor-pointer relative overflow-hidden rounded-lg"
            >
              <div className="relative">
                {categoryImages[category.name] && (
                  <div 
                    className="h-32 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${categoryImages[category.name]})` }}
                  />
                )}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-85 rounded-lg`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 rounded-lg hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="font-bold text-sm mb-1 text-center">{category.name}</h3>
                  <p className="text-xs opacity-90 text-center">{category.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
