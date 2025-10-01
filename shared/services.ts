import facialImage from "@assets/generated_images/Facial_treatment_service_4e8f10d4.png";
import hairImage from "@assets/generated_images/Hair_styling_service_20a8492f.png";
import nailImage from "@assets/generated_images/Nail_service_treatment_4203e8a6.png";

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  rating: number;
  image: string;
  category: string;
}

export const services: Service[] = [
  // Hair Services
  {
    id: "premium-haircut",
    name: "Premium Cut & Style",
    description: "Expert haircut with wash, conditioning treatment, and professional styling by our master stylists.",
    price: 85,
    duration: 90,
    rating: 4.8,
    image: hairImage,
    category: "Hair"
  },
  {
    id: "color-treatment",
    name: "Hair Color & Highlights",
    description: "Professional hair coloring with premium products, including consultation and color protection treatment.",
    price: 150,
    duration: 120,
    rating: 4.9,
    image: hairImage,
    category: "Hair"
  },
  {
    id: "keratin-treatment",
    name: "Keratin Smoothening",
    description: "Brazilian keratin treatment for smooth, frizz-free, and manageable hair that lasts for months.",
    price: 220,
    duration: 150,
    rating: 4.9,
    image: hairImage,
    category: "Hair"
  },
  {
    id: "hair-spa",
    name: "Luxury Hair Spa",
    description: "Rejuvenating hair spa with deep conditioning, scalp massage, and steam therapy for healthy hair.",
    price: 95,
    duration: 60,
    rating: 4.7,
    image: hairImage,
    category: "Hair"
  },
  {
    id: "balayage",
    name: "Balayage Highlights",
    description: "Hand-painted highlights for a natural, sun-kissed look with dimensional color and shine.",
    price: 180,
    duration: 150,
    rating: 4.8,
    image: hairImage,
    category: "Hair"
  },
  {
    id: "hair-extensions",
    name: "Hair Extensions",
    description: "Premium quality hair extensions for instant length and volume with natural-looking results.",
    price: 250,
    duration: 120,
    rating: 4.6,
    image: hairImage,
    category: "Hair"
  },

  // Skincare Services
  {
    id: "signature-facial",
    name: "Signature Facial",
    description: "Deep cleansing facial with premium organic products and LED light therapy for radiant, glowing skin.",
    price: 120,
    duration: 75,
    rating: 4.9,
    image: facialImage,
    category: "Skincare"
  },
  {
    id: "anti-aging-facial",
    name: "Anti-Aging Facial",
    description: "Advanced anti-aging treatment with peptides, retinol therapy, and collagen-boosting techniques.",
    price: 180,
    duration: 90,
    rating: 4.9,
    image: facialImage,
    category: "Skincare"
  },
  {
    id: "gold-facial",
    name: "24K Gold Facial",
    description: "Luxurious gold facial treatment for instant glow, anti-aging benefits, and radiant complexion.",
    price: 200,
    duration: 75,
    rating: 4.8,
    image: facialImage,
    category: "Skincare"
  },
  {
    id: "acne-treatment",
    name: "Acne Treatment Facial",
    description: "Specialized treatment for acne-prone skin with deep cleansing, extraction, and healing therapy.",
    price: 110,
    duration: 60,
    rating: 4.7,
    image: facialImage,
    category: "Skincare"
  },
  {
    id: "brightening-facial",
    name: "Skin Brightening Facial",
    description: "Vitamin C enriched facial for even skin tone, reduced pigmentation, and luminous glow.",
    price: 140,
    duration: 75,
    rating: 4.8,
    image: facialImage,
    category: "Skincare"
  },
  {
    id: "cleanup",
    name: "Basic Cleanup",
    description: "Quick and refreshing facial cleanup with cleansing, exfoliation, and moisturizing.",
    price: 60,
    duration: 45,
    rating: 4.5,
    image: facialImage,
    category: "Skincare"
  },

  // Nail Services
  {
    id: "luxury-manicure",
    name: "Luxury Manicure",
    description: "Complete nail care with cuticle treatment, shaping, and premium polish application with nail art.",
    price: 65,
    duration: 60,
    rating: 4.7,
    image: nailImage,
    category: "Nails"
  },
  {
    id: "gel-manicure",
    name: "Gel Manicure",
    description: "Long-lasting gel polish application with nail strengthening treatment and UV curing.",
    price: 45,
    duration: 45,
    rating: 4.6,
    image: nailImage,
    category: "Nails"
  },
  {
    id: "luxury-pedicure",
    name: "Luxury Pedicure",
    description: "Relaxing pedicure with foot soak, scrub, massage, and polish for soft, beautiful feet.",
    price: 75,
    duration: 75,
    rating: 4.8,
    image: nailImage,
    category: "Nails"
  },
  {
    id: "gel-pedicure",
    name: "Gel Pedicure",
    description: "Long-lasting gel pedicure with complete foot care and UV-cured polish for perfect toes.",
    price: 55,
    duration: 60,
    rating: 4.7,
    image: nailImage,
    category: "Nails"
  },
  {
    id: "nail-art",
    name: "Nail Art Design",
    description: "Creative and trendy nail art designs customized to your style and preferences.",
    price: 35,
    duration: 30,
    rating: 4.9,
    image: nailImage,
    category: "Nails"
  },
  {
    id: "nail-extensions",
    name: "Acrylic Nail Extensions",
    description: "Beautiful acrylic nail extensions for length and strength with customized shape and design.",
    price: 80,
    duration: 90,
    rating: 4.7,
    image: nailImage,
    category: "Nails"
  },

  // Makeup Services
  {
    id: "bridal-makeup",
    name: "Bridal Makeup",
    description: "Complete bridal makeup package with trial, HD makeup, hairstyling, and draping for your special day.",
    price: 350,
    duration: 180,
    rating: 5.0,
    image: facialImage,
    category: "Makeup"
  },
  {
    id: "party-makeup",
    name: "Party Makeup",
    description: "Glamorous party makeup with professional techniques for a stunning look at any event.",
    price: 120,
    duration: 75,
    rating: 4.8,
    image: facialImage,
    category: "Makeup"
  },
  {
    id: "airbrush-makeup",
    name: "HD Airbrush Makeup",
    description: "Flawless airbrush makeup for photography and special occasions with long-lasting finish.",
    price: 150,
    duration: 90,
    rating: 4.9,
    image: facialImage,
    category: "Makeup"
  },
  {
    id: "natural-makeup",
    name: "Natural Day Makeup",
    description: "Light and natural makeup look perfect for everyday wear or casual events.",
    price: 80,
    duration: 45,
    rating: 4.6,
    image: facialImage,
    category: "Makeup"
  },

  // Spa & Wellness Services
  {
    id: "full-body-massage",
    name: "Full Body Massage",
    description: "Therapeutic full body massage with aromatherapy oils for complete relaxation and stress relief.",
    price: 140,
    duration: 90,
    rating: 4.9,
    image: facialImage,
    category: "Spa & Wellness"
  },
  {
    id: "body-polishing",
    name: "Body Polishing",
    description: "Luxurious body polishing treatment for smooth, glowing skin from head to toe.",
    price: 180,
    duration: 75,
    rating: 4.8,
    image: facialImage,
    category: "Spa & Wellness"
  },
  {
    id: "body-scrub",
    name: "Body Scrub & Wrap",
    description: "Exfoliating body scrub with hydrating wrap for soft, rejuvenated skin.",
    price: 130,
    duration: 60,
    rating: 4.7,
    image: facialImage,
    category: "Spa & Wellness"
  },
  {
    id: "waxing-full",
    name: "Full Body Waxing",
    description: "Complete body waxing service with premium wax for smooth, hair-free skin.",
    price: 100,
    duration: 90,
    rating: 4.6,
    image: facialImage,
    category: "Spa & Wellness"
  },
  {
    id: "threading",
    name: "Threading & Shaping",
    description: "Precise threading for eyebrows and facial hair with perfect shaping and definition.",
    price: 25,
    duration: 20,
    rating: 4.8,
    image: facialImage,
    category: "Spa & Wellness"
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getSelectedServicesData = (selectedIds: string[]): Service[] => {
  return selectedIds.map(id => getServiceById(id)).filter(Boolean) as Service[];
};

export const calculateServiceTotals = (selectedIds: string[]) => {
  const selectedServices = getSelectedServicesData(selectedIds);
  const totalPrice = selectedServices.reduce((sum, service) => sum + service.price, 0);
  const totalDuration = selectedServices.reduce((sum, service) => sum + service.duration, 0);
  
  return {
    services: selectedServices,
    totalPrice,
    totalDuration
  };
};

export const getServiceCategories = (): string[] => {
  const categories = Array.from(new Set(services.map(service => service.category)));
  return categories;
};

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

export const getPopularServices = (limit: number = 6): Service[] => {
  return services
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};