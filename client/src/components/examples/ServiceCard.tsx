import ServiceCard from '../ServiceCard';
import facialImage from "@assets/generated_images/Facial_treatment_service_4e8f10d4.png";

export default function ServiceCardExample() {
  return (
    <div className="p-4 max-w-sm">
      <ServiceCard 
        id="facial-deluxe"
        name="Signature Facial"
        description="Deep cleansing facial with premium organic products and LED light therapy for radiant skin."
        price={120}
        duration={75}
        rating={4.9}
        image={facialImage}
        category="Skincare"
      />
    </div>
  );
}