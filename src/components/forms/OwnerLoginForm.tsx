
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { checkEmailExists, createOwnerData } from "@/utils/loginUtils";

const OwnerLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ownerIsNewUser, setOwnerIsNewUser] = useState(false);
  const [ownerEmailExists, setOwnerEmailExists] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  const [ownerFormData, setOwnerFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: ""
  });

  const handleOwnerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOwnerFormData({
      ...ownerFormData,
      [name]: value
    });

    if (name === 'email') {
      const emailExists = checkEmailExists(value, 'owner');
      setOwnerEmailExists(emailExists);
      setOwnerIsNewUser(false);
    }
  };

  const handleOwnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (!ownerFormData.name || !ownerFormData.email || !ownerFormData.password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    const ownerData = createOwnerData(ownerFormData);
    
    localStorage.setItem('ownerData', JSON.stringify(ownerData));
    localStorage.setItem('ownerLoggedIn', 'true');
    
    setTimeout(() => {
      toast({
        title: `Welcome, ${ownerFormData.name}! 🤠`,
        description: "Successfully logged in. Set up your shop now!",
      });
      navigate("/shop-setup");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleOwnerSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="owner-name">Full Name *</Label>
        <div className="relative">
          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="owner-name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={ownerFormData.name}
            onChange={handleOwnerInputChange}
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="owner-email">Email Address *</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="owner-email"
            name="email"
            type="email"
            placeholder="owner@restaurant.com"
            value={ownerFormData.email}
            onChange={handleOwnerInputChange}
            className="pl-10"
            required
          />
        </div>
      </div>

      {!ownerEmailExists && ownerFormData.email && (
        <div className="flex items-center space-x-2 p-3 bg-orange-50 rounded-md border border-orange-200">
          <Checkbox
            id="owner-new-user"
            checked={ownerIsNewUser}
            onCheckedChange={(checked) => setOwnerIsNewUser(checked as boolean)}
          />
          <Label htmlFor="owner-new-user" className="text-sm text-orange-700">
            I am a new restaurant owner
          </Label>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="owner-password">Password *</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="owner-password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={ownerFormData.password}
            onChange={handleOwnerInputChange}
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
        <Label htmlFor="owner-phone">Phone Number</Label>
        <div className="relative">
          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="owner-phone"
            name="phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            value={ownerFormData.phone}
            onChange={handleOwnerInputChange}
            className="pl-10"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3"
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Signing in...
          </div>
        ) : (
          "Login as Owner"
        )}
      </Button>
    </form>
  );
};

export default OwnerLoginForm;
