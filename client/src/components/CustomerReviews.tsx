import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      review: "Absolutely loved the bridal makeup service! The team made me look stunning on my wedding day. Highly professional and talented.",
      service: "Bridal Makeup",
      date: "2 weeks ago",
      avatar: ""
    },
    {
      id: 2,
      name: "Ananya Roy",
      rating: 5,
      review: "The hair spa was incredibly relaxing and my hair feels so soft and healthy now. The staff is very courteous and the ambiance is perfect.",
      service: "Luxury Hair Spa",
      date: "1 month ago",
      avatar: ""
    },
    {
      id: 3,
      name: "Sneha Patel",
      rating: 5,
      review: "Best facial I've ever had! The gold facial left my skin glowing for days. Worth every rupee. Will definitely come back!",
      service: "24K Gold Facial",
      date: "3 weeks ago",
      avatar: ""
    },
    {
      id: 4,
      name: "Kavya Reddy",
      rating: 5,
      review: "The nail art is just beautiful! Very creative designs and the gel manicure lasted for over 3 weeks. Excellent service!",
      service: "Nail Art & Gel Manicure",
      date: "1 week ago",
      avatar: ""
    }
  ];

  return (
    <section className="px-4 py-8 bg-muted/30">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-2">What Our Clients Say</h2>
        <p className="text-muted-foreground">Real experiences from real customers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <Card 
            key={review.id} 
            className="hover-elevate scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            data-testid={`card-review-${review.id}`}
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={review.avatar} alt={review.name} />
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                    <Quote className="w-8 h-8 text-primary/20" />
                  </div>

                  <div className="flex items-center space-x-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-sm text-foreground mb-2">{review.review}</p>
                  <p className="text-xs text-primary font-medium">{review.service}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <div className="inline-flex items-center space-x-2 bg-primary/5 px-6 py-3 rounded-lg">
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          <span className="font-bold text-2xl text-foreground">4.9</span>
          <span className="text-muted-foreground">Average Rating from 500+ Reviews</span>
        </div>
      </div>
    </section>
  );
}
