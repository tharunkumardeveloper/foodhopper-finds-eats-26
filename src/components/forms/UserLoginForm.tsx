
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { checkEmailExists, createUserData } from "@/utils/loginUtils";

const UserLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userIsNewUser, setUserIsNewUser] = useState(false);
  const [userEmailExists, setUserEmailExists] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: ""
  });

  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserFormData({
      ...userFormData,
      [name]: value
    });

    if (name === 'email') {
      const emailExists = checkEmailExists(value, 'user');
      setUserEmailExists(emailExists);
      setUserIsNewUser(false);
    }
  };

  const handleUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (!userFormData.name || !userFormData.email || !userFormData.password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    const userData = createUserData(userFormData);
    
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('userLoggedIn', 'true');
    
    setTimeout(() => {
      toast({
        title: `Welcome, ${userFormData.name}! 🎉`,
        description: "Successfully logged in to your dashboard.",
      });
      navigate("/dashboard");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleUserSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="user-name">Full Name *</Label>
        <div className="relative">
          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="user-name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={userFormData.name}
            onChange={handleUserInputChange}
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="user-email">Email Address *</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="user-email"
            name="email"
            type="email"
            placeholder="user@example.com"
            value={userFormData.email}
            onChange={handleUserInputChange}
            className="pl-10"
            required
          />
        </div>
      </div>

      {!userEmailExists && userFormData.email && (
        <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-md border border-blue-200">
          <Checkbox
            id="user-new-user"
            checked={userIsNewUser}
            onCheckedChange={(checked) => setUserIsNewUser(checked as boolean)}
          />
          <Label htmlFor="user-new-user" className="text-sm text-blue-700">
            I am a new user
          </Label>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="user-password">Password *</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="user-password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={userFormData.password}
            onChange={handleUserInputChange}
            className="pl-10 pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="user-phone">Phone Number</Label>
        <div className="relative">
          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="user-phone"
            name="phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            value={userFormData.phone}
            onChange={handleUserInputChange}
            className="pl-10"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3"
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Signing in...
          </div>
        ) : (
          "Login as User"
        )}
      </Button>
    </form>
  );
};

export default UserLoginForm;
