import BottomNavigation from '../BottomNavigation';

export default function BottomNavigationExample() {
  return (
    <div className="h-screen relative bg-background">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">App Navigation</h2>
        <p className="text-muted-foreground">Bottom navigation stays fixed at bottom</p>
      </div>
      <BottomNavigation />
    </div>
  );
}