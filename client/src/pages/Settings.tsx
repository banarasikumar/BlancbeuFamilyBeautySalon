import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Settings as SettingsIcon, Bell, User, Lock, HelpCircle } from "lucide-react";

interface SettingsProps {
  onBack?: () => void;
}

export default function Settings({ onBack }: SettingsProps) {
  const handleNotificationSettings = () => {
    console.log("Opening notification settings");
    // TODO: Implement notification settings
  };

  const handleAccountSettings = () => {
    console.log("Opening account settings");
    // TODO: Implement account settings
  };

  const handlePrivacySettings = () => {
    console.log("Opening privacy settings");
    // TODO: Implement privacy settings
  };

  const handleHelp = () => {
    console.log("Opening help");
    // TODO: Implement help
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
            <SettingsIcon className="w-5 h-5 text-primary" />
            <h1 className="text-xl font-semibold text-foreground">Settings</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 pb-24 p-4">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold mb-2">App Settings</h2>
            <p className="text-muted-foreground text-sm">
              Manage your preferences and account settings
            </p>
          </div>

          <Card className="hover-elevate" data-testid="card-notifications">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-base">
                <Bell className="w-5 h-5 text-primary" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Manage your notification preferences for appointments and updates
              </p>
              <Button 
                variant="outline" 
                onClick={handleNotificationSettings}
                data-testid="button-notifications"
              >
                Configure Notifications
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-account">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-base">
                <User className="w-5 h-5 text-primary" />
                Account
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Update your profile information and preferences
              </p>
              <Button 
                variant="outline" 
                onClick={handleAccountSettings}
                data-testid="button-account"
              >
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-privacy">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-base">
                <Lock className="w-5 h-5 text-primary" />
                Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Manage your privacy settings and account security
              </p>
              <Button 
                variant="outline" 
                onClick={handlePrivacySettings}
                data-testid="button-privacy"
              >
                Privacy Settings
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-help">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-base">
                <HelpCircle className="w-5 h-5 text-primary" />
                Help & Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Get help with the app and contact our support team
              </p>
              <Button 
                variant="outline" 
                onClick={handleHelp}
                data-testid="button-help"
              >
                Get Help
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}