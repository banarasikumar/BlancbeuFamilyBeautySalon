import ChatInterface from "@/components/ChatInterface";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";

interface ChatProps {
  onBack?: () => void;
}

export default function Chat({ onBack }: ChatProps) {
  const handleSendMessage = (message: string) => {
    console.log(`Sending message to salon: ${message}`);
    // TODO: Implement real chat functionality
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" onClick={onBack} data-testid="button-back">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <MessageCircle className="w-5 h-5 text-primary" />
            <h1 className="text-xl font-semibold text-foreground">Chat Support</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 pb-24 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold mb-2">Need help?</h2>
            <p className="text-muted-foreground text-sm">
              Chat with our friendly staff for assistance with bookings, services, or any questions.
            </p>
          </div>
          
          <ChatInterface onSendMessage={handleSendMessage} />
        </div>
      </main>
    </div>
  );
}