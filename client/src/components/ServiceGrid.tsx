import ServiceCard from "./ServiceCard";
import { services } from "@shared/services";

interface ServiceGridProps {
  selectedServices?: string[];
  onBookService?: (serviceId: string) => void;
}

export default function ServiceGrid({ selectedServices = [], onBookService }: ServiceGridProps) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          {...service}
          isSelected={selectedServices.includes(service.id)}
          onBook={onBookService}
        />
      ))}
    </div>
  );
}