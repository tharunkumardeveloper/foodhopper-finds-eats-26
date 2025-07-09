
import { Star, MapPin } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Restaurant } from "../../data/chennaiRestaurants";

interface RestaurantHeroProps {
  restaurant: Restaurant;
}

const RestaurantHero = ({ restaurant }: RestaurantHeroProps) => {
  return (
    <div className="relative h-96 bg-gray-900">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {restaurant.gallery.map((image, index) => (
            <CarouselItem key={index}>
              <div 
                className="h-96 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
        <div className="container mx-auto">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
            <p className="text-lg mb-2">{restaurant.cuisine.join(", ")}</p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span>{restaurant.rating} ({restaurant.reviews} reviews)</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{restaurant.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHero;
