
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const Account = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();

  const handleLogin = () => {
    toast({
      title: "Coming Soon",
      description: "Account functionality will be available in the next update.",
    });
  };

  return (
    <div className="container py-12 max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">My Account</CardTitle>
          <CardDescription>
            Sign in to access your account and manage your preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-gray-500 italic">
            Account functionality coming soon
          </p>
          <Button className="w-full bg-youit-primary hover:bg-youit-primary/90" onClick={handleLogin}>
            Sign In
          </Button>
          <p className="text-center text-sm text-gray-500">
            Don't have an account? <a href="/" className="text-youit-primary hover:underline">Register</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Account;