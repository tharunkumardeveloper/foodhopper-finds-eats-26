
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Store, MapPin, Phone, Clock, Upload, Camera, Save, ArrowLeft } from "lucide-react";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ShopSetup = () => {
  const [shopData, setShopData] = useState({
    restaurantName: "",
    address: "",
    phone: "",
    cuisine: "",
    diningType: "",
    workingHours: "",
    priceForTwo: "",
    description: "",
    coverImage: ""
  });
  
  const [ownerData, setOwnerData] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const diningTypes = [
    "Fine Dining",
    "Casual Dining", 
    "Fast Food",
    "Cafe",
    "Bar & Grill",
    "Food Truck",
    "Buffet",
    "Family Restaurant"
  ];

  useEffect(() => {
    const owner = localStorage.getItem('ownerData');
    if (!owner) {
      navigate('/login');
      return;
    }
    setOwnerData(JSON.parse(owner));
  }, [navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setShopData({
      ...shopData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setShopData({
          ...shopData,
          coverImage: e.target?.result as string
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!shopData.restaurantName || !shopData.address || !shopData.diningType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const restaurantData = {
      id: Date.now(),
      name: shopData.restaurantName,
      address: shopData.address,
      phone: shopData.phone,
      cuisine: shopData.cuisine.split(',').map(c => c.trim()),
      diningType: shopData.diningType,
      workingHours: shopData.workingHours || "9:00 AM - 10:00 PM",
      priceForTwo: parseInt(shopData.priceForTwo) || 800,
      description: shopData.description,
      rating: 4.0,
      reviews: 0,
      image: shopData.coverImage || "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      owner: ownerData?.name || "Restaurant Owner",
      isNewRestaurant: true
    };

    // Store the restaurant data
    const existingRestaurants = JSON.parse(localStorage.getItem('customRestaurants') || '[]');
    existingRestaurants.push(restaurantData);
    localStorage.setItem('customRestaurants', JSON.stringify(existingRestaurants));

    toast({
      title: "Shop Setup Complete! 🎉",
      description: "Your restaurant has been added to FoodHopper.",
    });

    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/dashboard')}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Setup Your Restaurant</h1>
              <p className="text-gray-600">Tell us about your restaurant to get started</p>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Restaurant Details</CardTitle>
              <CardDescription>Fill in the information about your restaurant</CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Cover Image Upload */}
                <div className="space-y-2">
                  <Label>Cover Image</Label>
                  <div className="flex flex-col items-center space-y-4">
                    {shopData.coverImage ? (
                      <div className="relative w-full h-48 rounded-lg overflow-hidden">
                        <img 
                          src={shopData.coverImage} 
                          alt="Cover" 
                          className="w-full h-full object-cover"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="absolute top-2 right-2 bg-white"
                          onClick={() => setShopData({...shopData, coverImage: ""})}
                        >
                          <Camera className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-500">Upload cover image</p>
                        </div>
                      </div>
                    )}
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="cover-upload"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById('cover-upload')?.click()}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Choose Image
                    </Button>
                  </div>
                </div>

                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="restaurantName">Restaurant Name *</Label>
                    <Input
                      id="restaurantName"
                      name="restaurantName"
                      placeholder="e.g., Murugan Idli Shop"
                      value={shopData.restaurantName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={shopData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Full address with area and city"
                    value={shopData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cuisine">Cuisine Type</Label>
                    <Input
                      id="cuisine"
                      name="cuisine"
                      placeholder="e.g., Indian, Chinese, Continental"
                      value={shopData.cuisine}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="diningType">Dining Type *</Label>
                    <select
                      id="diningType"
                      name="diningType"
                      value={shopData.diningType}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select dining type</option>
                      {diningTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="workingHours">Working Hours</Label>
                    <Input
                      id="workingHours"
                      name="workingHours"
                      placeholder="e.g., 9:00 AM - 10:00 PM"
                      value={shopData.workingHours}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priceForTwo">Price for Two (₹)</Label>
                    <Input
                      id="priceForTwo"
                      name="priceForTwo"
                      type="number"
                      placeholder="800"
                      value={shopData.priceForTwo}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    placeholder="Tell customers about your restaurant..."
                    value={shopData.description}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Restaurant Details
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ShopSetup;
