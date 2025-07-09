
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import FeaturedCities from "../components/FeaturedCities";
import TrendingRestaurants from "../components/TrendingRestaurants";
import Categories from "../components/Categories";
import PopularDeals from "../components/PopularDeals";
import QuickActions from "../components/QuickActions";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import UserPreferencesPopup from "../components/UserPreferencesPopup";
import { usePopupTimer } from "../hooks/usePopupTimer";
import { useUserLocation } from "../hooks/useUserLocation";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const Index = () => {
  const { showPopup, closePopup } = usePopupTimer({ delay: 10000 });
  const { location, loading, error } = useUserLocation();
  const { toast } = useToast();

  useEffect(() => {
    if (location && !loading) {
      console.log('Location accessed successfully:', location);
      toast({
        title: "Location Access Granted",
        description: "We'll show you nearby restaurants and personalized recommendations!",
      });
    }
    
    if (error) {
      console.log('Location access error:', error);
      toast({
        title: "Location Access",
        description: "Enable location access for better restaurant recommendations nearby.",
        variant: "default"
      });
    }
  }, [location, loading, error, toast]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <QuickActions />
        <FeaturedCities />
        <TrendingRestaurants />
        <PopularDeals />
        <Categories />
        <Testimonials />
        <Footer />
      </div>
      
      <UserPreferencesPopup 
        isOpen={showPopup} 
        onClose={closePopup} 
      />
    </div>
  );
};

export default Index;
