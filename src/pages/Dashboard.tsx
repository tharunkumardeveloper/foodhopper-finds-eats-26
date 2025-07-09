
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Calendar, 
  Heart, 
  Star, 
  User, 
  MapPin, 
  Clock, 
  Phone,
  Mail,
  Camera,
  Trash2,
  Edit,
  Store,
  Menu as MenuIcon,
  Users,
  TrendingUp,
  Settings,
  Bell,
  Plus,
  Eye
} from "lucide-react";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import UserBookings from "../components/dashboard/UserBookings";
import UserSavedRestaurants from "../components/dashboard/UserSavedRestaurants";
import UserReviews from "../components/dashboard/UserReviews";
import OwnerRestaurantManagement from "../components/dashboard/OwnerRestaurantManagement";
import OwnerMenuManagement from "../components/dashboard/OwnerMenuManagement";
import OwnerBookingRequests from "../components/dashboard/OwnerBookingRequests";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isOwner, setIsOwner] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: ""
  });
  
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('userLoggedIn');
    const ownerLoggedIn = localStorage.getItem('ownerLoggedIn');
    
    if (ownerLoggedIn) {
      setIsOwner(true);
      const ownerData = JSON.parse(localStorage.getItem('ownerData') || '{}');
      setUserData(ownerData);
    } else if (userLoggedIn) {
      setIsOwner(false);
      const storedUserData = JSON.parse(localStorage.getItem('userData') || '{}');
      setUserData(storedUserData);
    } else {
      navigate('/login');
      return;
    }
  }, [navigate]);

  const handleProfileUpdate = () => {
    if (isOwner) {
      localStorage.setItem('ownerData', JSON.stringify(userData));
    } else {
      localStorage.setItem('userData', JSON.stringify(userData));
    }
    
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
    });
  };

  const userTabs = [
    { id: "dashboard", name: "Dashboard", icon: TrendingUp },
    { id: "bookings", name: "My Bookings", icon: Calendar },
    { id: "saved", name: "Saved", icon: Heart },
    { id: "reviews", name: "Reviews", icon: Star },
    { id: "profile", name: "Profile", icon: User }
  ];

  const ownerTabs = [
    { id: "dashboard", name: "Dashboard", icon: TrendingUp },
    { id: "restaurant", name: "Restaurant", icon: Store },
    { id: "menu", name: "Menu", icon: MenuIcon },
    { id: "bookings", name: "Bookings", icon: Users },
    { id: "profile", name: "Profile", icon: User }
  ];

  const currentTabs = isOwner ? ownerTabs : userTabs;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="flex items-center space-x-4">
                <div 
                  className="w-16 h-16 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${userData.avatar})` }}
                />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Welcome back, {userData.name}! 👋</h1>
                  <div className="flex items-center space-x-2">
                    <p className="text-gray-600">{userData.email}</p>
                    <Badge variant={isOwner ? "default" : "secondary"}>
                      {isOwner ? "Restaurant Owner" : "Customer"}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="icon">
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {isOwner ? <Store className="h-5 w-5" /> : <User className="h-5 w-5" />}
                    <span>{isOwner ? "Owner" : "User"} Menu</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {currentTabs.map((tab) => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                            activeTab === tab.id ? 'bg-orange-50 text-orange-600 border-r-2 border-orange-500' : 'text-gray-600'
                          }`}
                        >
                          <Icon className="h-5 w-5 mr-3" />
                          {tab.name}
                        </button>
                      );
                    })}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              {/* Dashboard Overview */}
              {activeTab === "dashboard" && (
                <div className="space-y-6">
                  {isOwner && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-600">Today's Bookings</p>
                              <p className="text-2xl font-bold text-gray-900">12</p>
                            </div>
                            <Users className="h-8 w-8 text-blue-500" />
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-600">This Month</p>
                              <p className="text-2xl font-bold text-gray-900">384</p>
                            </div>
                            <TrendingUp className="h-8 w-8 text-green-500" />
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-600">Average Rating</p>
                              <p className="text-2xl font-bold text-gray-900">4.5</p>
                            </div>
                            <Star className="h-8 w-8 text-yellow-500" />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {isOwner ? (
                        <>
                          <Button 
                            className="h-16 bg-orange-500 hover:bg-orange-600" 
                            onClick={() => navigate('/shop-setup')}
                          >
                            <Store className="h-6 w-6 mr-2" />
                            Setup Restaurant
                          </Button>
                          <Button 
                            variant="outline" 
                            className="h-16" 
                            onClick={() => setActiveTab("bookings")}
                          >
                            <Users className="h-6 w-6 mr-2" />
                            View Bookings
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button 
                            className="h-16 bg-orange-500 hover:bg-orange-600" 
                            onClick={() => setActiveTab("bookings")}
                          >
                            <Calendar className="h-6 w-6 mr-2" />
                            View My Bookings
                          </Button>
                          <Button 
                            variant="outline" 
                            className="h-16" 
                            onClick={() => setActiveTab("saved")}
                          >
                            <Heart className="h-6 w-6 mr-2" />
                            Saved Restaurants
                          </Button>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Profile Section */}
              {activeTab === "profile" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Settings</CardTitle>
                    <CardDescription>Update your personal information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div 
                        className="w-20 h-20 rounded-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${userData.avatar})` }}
                      />
                      <Button variant="outline">
                        <Camera className="h-4 w-4 mr-2" />
                        Change Photo
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={userData.name}
                          onChange={(e) => setUserData({...userData, name: e.target.value})}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email (Read Only)</Label>
                        <Input
                          id="email"
                          type="email"
                          value={userData.email}
                          disabled
                          className="bg-gray-100"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={userData.phone}
                          onChange={(e) => setUserData({...userData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <Button onClick={handleProfileUpdate} className="w-full md:w-auto">
                      Update Profile
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* User-specific content */}
              {!isOwner && (
                <>
                  {activeTab === "bookings" && <UserBookings />}
                  {activeTab === "saved" && <UserSavedRestaurants />}
                  {activeTab === "reviews" && <UserReviews />}
                </>
              )}

              {/* Owner-specific content */}
              {isOwner && (
                <>
                  {activeTab === "restaurant" && <OwnerRestaurantManagement />}
                  {activeTab === "menu" && <OwnerMenuManagement />}
                  {activeTab === "bookings" && <OwnerBookingRequests />}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
