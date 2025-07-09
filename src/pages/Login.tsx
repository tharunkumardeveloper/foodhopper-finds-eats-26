
import { Link } from "react-router-dom";
import { User, Store } from "lucide-react";
import Navigation from "../components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserLoginForm from "../components/forms/UserLoginForm";
import OwnerLoginForm from "../components/forms/OwnerLoginForm";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8 animate-fade-in">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                Welcome to FoodHopper
              </h1>
              <p className="text-gray-600">Choose your login type to continue</p>
            </div>

            <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/95">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800">Login</CardTitle>
                <CardDescription>Access your account or create a new one</CardDescription>
              </CardHeader>
              
              <CardContent>
                <Tabs defaultValue="user" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="user" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>User Login</span>
                    </TabsTrigger>
                    <TabsTrigger value="owner" className="flex items-center space-x-2">
                      <Store className="h-4 w-4" />
                      <span>Owner Login</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="user">
                    <UserLoginForm />
                  </TabsContent>

                  <TabsContent value="owner">
                    <OwnerLoginForm />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>
                Need help? <Link to="/contact" className="text-orange-500 hover:text-orange-600 transition-colors">Contact Support</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
