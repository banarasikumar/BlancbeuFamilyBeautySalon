import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface BookingCalendarProps {
  onBookSlot?: (date: string, time: string) => void;
}

export default function BookingCalendar({ onBookSlot }: BookingCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  // Mock data for demonstration
  const timeSlots: TimeSlot[] = [
    { time: "09:00", available: true },
    { time: "10:30", available: false },
    { time: "12:00", available: true },
    { time: "13:30", available: true },
    { time: "15:00", available: false },
    { time: "16:30", available: true },
  ];

  const dates = [
    "Today",
    "Tomorrow", 
    "Thu 3", 
    "Fri 4", 
    "Sat 5"
  ];

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime("");
    console.log(`Selected date: ${date}`);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    console.log(`Selected time: ${time}`);
  };

  const handleConfirmBooking = () => {
    if (selectedDate && selectedTime) {
      console.log(`Confirmed booking for ${selectedDate} at ${selectedTime}`);
      onBookSlot?.(selectedDate, selectedTime);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="w-5 h-5" />
          <span>Select Date & Time</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Date Selection */}
        <div>
          <h4 className="font-medium mb-3">Choose Date</h4>
          <div className="flex flex-wrap gap-2">
            {dates.map((date) => (
              <Button
                key={date}
                variant={selectedDate === date ? "default" : "outline"}
                size="sm"
                onClick={() => handleDateSelect(date)}
                data-testid={`button-date-${date.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {date}
              </Button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        {selectedDate && (
          <div>
            <h4 className="font-medium mb-3 flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Available Times</span>
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((slot) => (
                <Button
                  key={slot.time}
                  variant={selectedTime === slot.time ? "default" : "outline"}
                  size="sm"
                  disabled={!slot.available}
                  onClick={() => slot.available && handleTimeSelect(slot.time)}
                  className="relative"
                  data-testid={`button-time-${slot.time.replace(':', '')}`}
                >
                  {slot.time}
                  {!slot.available && (
                    <Badge variant="destructive" className="absolute -top-1 -right-1 text-xs px-1">
                      Booked
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Confirm Button */}
        {selectedDate && selectedTime && (
          <Button 
            onClick={handleConfirmBooking}
            className="w-full"
            data-testid="button-confirm-booking"
          >
            Confirm Booking for {selectedDate} at {selectedTime}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}