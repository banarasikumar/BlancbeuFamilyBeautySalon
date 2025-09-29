import { useState } from "react";
import BookingCalendar from "@/components/BookingCalendar";
import ServiceGrid from "@/components/ServiceGrid";
import StaffCard from "@/components/StaffCard";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Calendar, User, Scissors } from "lucide-react";

interface BookingProps {
  onBack?: () => void;
}

export default function Booking({ onBack }: BookingProps) {
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedStaff, setSelectedStaff] = useState<string>("");
  const [selectedDateTime, setSelectedDateTime] = useState<{date: string, time: string} | null>(null);

  // TODO: Replace with real data
  const staff = [
    {
      id: "staff-1",
      name: "Sarah Johnson",
      role: "Senior Hair Stylist",
      rating: 4.9,
      specialties: ["Color Specialist", "Cuts", "Styling"],
      experience: "8 years experience"
    },
    {
      id: "staff-2", 
      name: "Emma Davis",
      role: "Skincare Specialist", 
      rating: 4.8,
      specialties: ["Facials", "Anti-aging", "Acne Treatment"],
      experience: "5 years experience"
    },
    {
      id: "staff-3",
      name: "Maya Chen",
      role: "Nail Artist",
      rating: 4.7,
      specialties: ["Gel Manicure", "Nail Art", "Pedicure"],
      experience: "6 years experience"
    }
  ];

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    console.log(`Selected service: ${serviceId}`);
  };

  const handleStaffSelect = (staffId: string) => {
    setSelectedStaff(staffId);
    console.log(`Selected staff: ${staffId}`);
  };

  const handleDateTimeSelect = (date: string, time: string) => {
    setSelectedDateTime({ date, time });
    console.log(`Selected date/time: ${date} at ${time}`);
  };

  const handleConfirmBooking = () => {
    if (selectedService && selectedStaff && selectedDateTime) {
      console.log("Confirmed booking with all selections");
      // TODO: Submit booking to backend
    }
  };

  const isComplete = selectedService && selectedStaff && selectedDateTime;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" onClick={onBack} data-testid="button-back">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-semibold text-foreground">Book Appointment</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="fixed top-16 left-0 right-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-center space-x-4 p-3">
          <div className={`flex items-center space-x-2 ${selectedService ? 'text-primary' : 'text-muted-foreground'}`}>
            <CheckCircle className={`w-4 h-4 ${selectedService ? 'fill-current' : ''}`} />
            <span className="text-sm">Service</span>
          </div>
          <div className={`flex items-center space-x-2 ${selectedStaff ? 'text-primary' : 'text-muted-foreground'}`}>
            <User className={`w-4 h-4 ${selectedStaff ? 'fill-current' : ''}`} />
            <span className="text-sm">Staff</span>
          </div>
          <div className={`flex items-center space-x-2 ${selectedDateTime ? 'text-primary' : 'text-muted-foreground'}`}>
            <Calendar className={`w-4 h-4 ${selectedDateTime ? 'fill-current' : ''}`} />
            <span className="text-sm">Time</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-32 pb-24 px-4 space-y-8">
        {/* Service Selection */}
        <section>
          <div className="flex items-center space-x-2 mb-4">
            <Scissors className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">Choose Service</h2>
            {selectedService && <Badge variant="secondary">Selected</Badge>}
          </div>
          <ServiceGrid onBookService={handleServiceSelect} />
        </section>

        {/* Staff Selection */}
        {selectedService && (
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <User className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Select Staff</h2>
              {selectedStaff && <Badge variant="secondary">Selected</Badge>}
            </div>
            <div className="space-y-3">
              {staff.map((member) => (
                <StaffCard
                  key={member.id}
                  {...member}
                  isSelected={selectedStaff === member.id}
                  onSelect={handleStaffSelect}
                />
              ))}
            </div>
          </section>
        )}

        {/* Date & Time Selection */}
        {selectedStaff && (
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Pick Date & Time</h2>
              {selectedDateTime && <Badge variant="secondary">Selected</Badge>}
            </div>
            <BookingCalendar onBookSlot={handleDateTimeSelect} />
          </section>
        )}

        {/* Booking Summary & Confirm */}
        {isComplete && (
          <Card>
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service:</span>
                  <span className="font-medium">{selectedService}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Staff:</span>
                  <span className="font-medium">{staff.find(s => s.id === selectedStaff)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date & Time:</span>
                  <span className="font-medium">{selectedDateTime?.date} at {selectedDateTime?.time}</span>
                </div>
              </div>
              <Button 
                onClick={handleConfirmBooking}
                className="w-full"
                size="lg"
                data-testid="button-confirm-final-booking"
              >
                Confirm Booking
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}