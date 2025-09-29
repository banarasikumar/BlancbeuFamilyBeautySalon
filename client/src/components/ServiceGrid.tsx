import ServiceCard from "./ServiceCard";
import facialImage from "@assets/generated_images/Facial_treatment_service_4e8f10d4.png";
import hairImage from "@assets/generated_images/Hair_styling_service_20a8492f.png";
import nailImage from "@assets/generated_images/Nail_service_treatment_4203e8a6.png";

interface ServiceGridProps {
  onBookService?: (serviceId: string) => void;
}

export default function ServiceGrid({ onBookService }: ServiceGridProps) {
  // TODO: Replace with real data from API
  const services = [
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
      id: "gel-manicure",
      name: "Gel Manicure",
      description: "Long-lasting gel polish application with nail strengthening treatment and UV curing.",
      price: 45,
      duration: 45,
      rating: 4.6,
      image: nailImage,
      category: "Nails"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          {...service}
          onBook={onBookService}
        />
      ))}
    </div>
  );
}