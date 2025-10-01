import { useState } from "react";
import BookingCalendar from "@/components/BookingCalendar";
import ServiceGrid from "@/components/ServiceGrid";
import StaffCard from "@/components/StaffCard";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Calendar, User, Scissors, IndianRupee, Clock } from "lucide-react";
import { calculateServiceTotals } from "@shared/services";

interface BookingProps {
  onBack?: () => void;
}

export default function Booking({ onBack }: BookingProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
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
    setSelectedServices(prev => {
      if (prev.includes(serviceId)) {
        // Remove service if already selected
        const updated = prev.filter(id => id !== serviceId);
        console.log(`Removed service: ${serviceId}`);
        return updated;
      } else {
        // Add service if not selected
        const updated = [...prev, serviceId];
        console.log(`Added service: ${serviceId}`);
        return updated;
      }
    });
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
    if (selectedServices.length > 0 && selectedStaff && selectedDateTime) {
      console.log("Confirmed booking with all selections:", {
        services: selectedServices,
        staff: selectedStaff,
        dateTime: selectedDateTime
      });
      // TODO: Submit booking to backend
    }
  };

  const isComplete = selectedServices.length > 0 && selectedStaff && selectedDateTime;

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
          <div className={`flex items-center space-x-2 ${selectedServices.length > 0 ? 'text-primary' : 'text-muted-foreground'}`}>
            <CheckCircle className={`w-4 h-4 ${selectedServices.length > 0 ? 'fill-current' : ''}`} />
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
            <h2 className="text-lg font-semibold">Choose Services</h2>
            {selectedServices.length > 0 && <Badge variant="secondary">{selectedServices.length} Selected</Badge>}
          </div>
          <ServiceGrid selectedServices={selectedServices} onBookService={handleServiceSelect} />
        </section>

        {/* Staff Selection */}
        {selectedServices.length > 0 && (
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
              <div className="space-y-4">
                {/* Services Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Scissors className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground font-medium">Selected Services:</span>
                  </div>
                  <div className="space-y-2">
                    {(() => {
                      const { services: serviceDetails, totalPrice, totalDuration } = calculateServiceTotals(selectedServices);
                      return (
                        <>
                          {serviceDetails.map((service, index) => (
                            <div key={service.id} className="bg-muted/50 rounded-lg p-3">
                              <div className="flex justify-between items-start">
                                <div className="flex-1">
                                  <h4 className="font-medium text-sm">{service.name}</h4>
                                  <p className="text-xs text-muted-foreground mt-1">{service.category}</p>
                                </div>
                                <div className="text-right">
                                  <div className="font-medium text-sm">₹{service.price}</div>
                                  <div className="text-xs text-muted-foreground">{service.duration}min</div>
                                </div>
                              </div>
                            </div>
                          ))}
                          
                          {/* Totals */}
                          <div className="border-t border-border pt-3 mt-3">
                            <div className="flex justify-between items-center text-sm">
                              <div className="flex items-center gap-1">
                                <IndianRupee className="w-4 h-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Total Price:</span>
                              </div>
                              <span className="font-bold text-primary">₹{totalPrice}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm mt-1">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Total Duration:</span>
                              </div>
                              <span className="font-medium">{totalDuration} minutes</span>
                            </div>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </div>

                {/* Staff Section */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Staff:</span>
                  </div>
                  <span className="font-medium">{staff.find(s => s.id === selectedStaff)?.name}</span>
                </div>

                {/* Date & Time Section */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Date & Time:</span>
                  </div>
                  <span className="font-medium">{selectedDateTime?.date} at {selectedDateTime?.time}</span>
                </div>
              </div>
              
              <Button 
                onClick={handleConfirmBooking}
                className="w-full"
                size="lg"
                data-testid="button-confirm-final-booking"
              >
                Confirm Booking - ₹{(() => {
                  const { totalPrice } = calculateServiceTotals(selectedServices);
                  return totalPrice;
                })()}
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}