import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface UserPreferencesPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserPreferencesPopup: React.FC<UserPreferencesPopupProps> = ({ isOpen, onClose }) => {
  const [showDetailedForm, setShowDetailedForm] = useState(false);
  const [quickFormData, setQuickFormData] = useState({
    name: '',
    gender: '',
    dietaryRestrictions: [] as string[]
  });
  const [detailedFormData, setDetailedFormData] = useState({
    name: '',
    phone: '',
    email: '',
    foodPreferred: [] as string[],
    tastePreference: '',
    location: ''
  });
  
  const { toast } = useToast();

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quick form submitted:', quickFormData);
    toast({
      title: "Preferences saved!",
      description: "Thank you for sharing your preferences with us.",
    });
    onClose();
  };

  const handleDetailedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Detailed form submitted:', detailedFormData);
    toast({
      title: "Detailed preferences saved!",
      description: "Thank you for the detailed information. We'll personalize your experience!",
    });
    onClose();
  };

  const handleDietaryRestrictionChange = (restriction: string, checked: boolean) => {
    setQuickFormData(prev => ({
      ...prev,
      dietaryRestrictions: checked
        ? [...prev.dietaryRestrictions, restriction]
        : prev.dietaryRestrictions.filter(r => r !== restriction)
    }));
  };

  const handleFoodPreferredChange = (food: string, checked: boolean) => {
    setDetailedFormData(prev => ({
      ...prev,
      foodPreferred: checked
        ? [...prev.foodPreferred, food]
        : prev.foodPreferred.filter(f => f !== food)
    }));
  };

  const dietaryOptions = ['Vegan', 'Vegetarian', 'Gluten-Free', 'Nut-Free', 'None'];
  const foodOptions = ['North Indian', 'South Indian', 'Continental', 'Chinese', 'Italian', 'Mexican', 'Thai'];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md animate-scale-in">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">
            {showDetailedForm ? 'Tell Us More About Your Preferences' : 'Quick Preferences'}
          </DialogTitle>
        </DialogHeader>

        {!showDetailedForm ? (
          <form onSubmit={handleQuickSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={quickFormData.name}
                onChange={(e) => setQuickFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Gender</Label>
              <RadioGroup
                value={quickFormData.gender}
                onValueChange={(value) => setQuickFormData(prev => ({ ...prev, gender: value }))}
                className="flex flex-row space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Dietary Restrictions</Label>
              <div className="grid grid-cols-2 gap-2">
                {dietaryOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={option}
                      checked={quickFormData.dietaryRestrictions.includes(option)}
                      onCheckedChange={(checked) => handleDietaryRestrictionChange(option, checked as boolean)}
                    />
                    <Label htmlFor={option} className="text-sm">{option}</Label>
                  </div>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
              Submit
            </Button>
            
            <button
              type="button"
              onClick={() => setShowDetailedForm(true)}
              className="w-full text-center text-sm text-orange-500 hover:underline"
            >
              Want to tell us more?
            </button>
          </form>
        ) : (
          <form onSubmit={handleDetailedSubmit} className="space-y-4 max-h-96 overflow-y-auto">
            <div className="space-y-2">
              <Label htmlFor="detailed-name">Name</Label>
              <Input
                id="detailed-name"
                value={detailedFormData.name}
                onChange={(e) => setDetailedFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={detailedFormData.phone}
                onChange={(e) => setDetailedFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={detailedFormData.email}
                onChange={(e) => setDetailedFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Type of Food Preferred</Label>
              <div className="grid grid-cols-2 gap-2">
                {foodOptions.map((food) => (
                  <div key={food} className="flex items-center space-x-2">
                    <Checkbox
                      id={food}
                      checked={detailedFormData.foodPreferred.includes(food)}
                      onCheckedChange={(checked) => handleFoodPreferredChange(food, checked as boolean)}
                    />
                    <Label htmlFor={food} className="text-sm">{food}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Taste Preference</Label>
              <RadioGroup
                value={detailedFormData.tastePreference}
                onValueChange={(value) => setDetailedFormData(prev => ({ ...prev, tastePreference: value }))}
                className="grid grid-cols-2 gap-2"
              >
                {['Spicy', 'Mild', 'Sweet', 'Tangy', 'Bland'].map((taste) => (
                  <div key={taste} className="flex items-center space-x-2">
                    <RadioGroupItem value={taste.toLowerCase()} id={taste} />
                    <Label htmlFor={taste}>{taste}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Select onValueChange={(value) => setDetailedFormData(prev => ({ ...prev, location: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="chennai">Chennai</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="pune">Pune</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
              Submit Detailed Preferences
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UserPreferencesPopup;
