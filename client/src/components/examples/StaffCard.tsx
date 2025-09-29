import StaffCard from '../StaffCard';

export default function StaffCardExample() {
  return (
    <div className="p-4 space-y-4 max-w-sm">
      <StaffCard 
        id="staff-1"
        name="Sarah Johnson"
        role="Senior Hair Stylist"
        rating={4.9}
        specialties={["Color Specialist", "Cuts", "Styling"]}
        experience="8 years experience"
        isSelected={true}
      />
      <StaffCard 
        id="staff-2"
        name="Emma Davis"
        role="Skincare Specialist"
        rating={4.8}
        specialties={["Facials", "Anti-aging", "Acne Treatment"]}
        experience="5 years experience"
      />
    </div>
  );
}