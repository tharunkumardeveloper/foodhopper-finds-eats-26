
import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Restaurant } from "../../data/chennaiRestaurants";

interface BookingCardProps {
  restaurant: Restaurant;
}

const BookingCard = ({ restaurant }: BookingCardProps) => {
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    guests: 2
  });
  const { toast } = useToast();

  const handleBooking = () => {
    if (!bookingData.date || !bookingData.time) {
      toast({
        title: "Booking Error",
        description: "Please select date and time for your booking.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Booking Confirmed! 🎉",
      description: `Table for ${bookingData.guests} reserved at ${restaurant.name} on ${bookingData.date} at ${bookingData.time}`,
    });
  };

  return (
    <Card className="sticky top-8" id="booking">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calendar className="h-5 w-5 mr-2" />
          Book a Table
        </CardTitle>
        <CardDescription>
          Reserve your table at {restaurant.name}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            value={bookingData.date}
            onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="time">Time</Label>
          <select 
            id="time"
            value={bookingData.time}
            onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select time</option>
            <option value="12:00">12:00 PM</option>
            <option value="12:30">12:30 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="13:30">1:30 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="19:30">7:30 PM</option>
            <option value="20:00">8:00 PM</option>
            <option value="20:30">8:30 PM</option>
            <option value="21:00">9:00 PM</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="guests">Number of Guests</Label>
          <select 
            id="guests"
            value={bookingData.guests}
            onChange={(e) => setBookingData({...bookingData, guests: parseInt(e.target.value)})}
            className="w-full p-2 border rounded-md"
          >
            {[1,2,3,4,5,6,7,8].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>
        
        <Button 
          onClick={handleBooking}
          className="w-full bg-orange-500 hover:bg-orange-600 text-lg font-semibold py-3"
        >
          Book Table
        </Button>
        
        <div className="text-center text-sm text-gray-600">
          <p>No booking fees • Instant confirmation</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
