import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";

const Account = () => {
  const { toast } = useToast();
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  if (!isLoggedIn) {
    return (
      <div className="space-y-4">
        <LoginForm />
        <div className="container max-w-md mx-auto text-center">
          <p className="text-sm text-gray-600">
            Don't have an account yet?{" "}
            <Link 
              to="/register" 
              className="text-youit-primary hover:text-youit-primary/80 font-medium underline"
            >
              Register here!
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">My Account</CardTitle>
          <CardDescription>
            Manage your account details and preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-500">Username</Label>
                <p className="text-lg">{user?.username}</p>
              </div>
              {user?.name && (
                <div>
                  <Label className="text-sm font-medium text-gray-500">Name</Label>
                  <p className="text-lg">{user.name}</p>
                </div>
              )}
            </div>

            {user?.email && (
              <div>
                <Label className="text-sm font-medium text-gray-500">Email</Label>
                <p className="text-lg">{user.email}</p>
              </div>
            )}

            {user?.mobile && (
              <div>
                <Label className="text-sm font-medium text-gray-500">Mobile</Label>
                <p className="text-lg">{user.mobile}</p>
              </div>
            )}

            <div>
              <Label className="text-sm font-medium text-gray-500">Date of Joining</Label>
              <p className="text-lg">{new Date(user?.dateOfJoining || '').toLocaleDateString()}</p>
            </div>

            {user?.subscribedServices && user.subscribedServices.length > 0 && (
              <div>
                <Label className="text-sm font-medium text-gray-500">Subscribed Services</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {user.subscribedServices.map((service, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-youit-primary/10 text-youit-primary rounded-full text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
            <Button 
              onClick={handleLogout}
              variant="destructive"
              className="flex-1"
            >
              Logout
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link to="/under-development">Edit Profile</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Label component for consistency
const Label = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <label className={className}>{children}</label>
);

export default Account;


// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { useToast } from "@/hooks/use-toast";
// import { useEffect } from "react";

// const Account = () => {
//   useEffect(() => {
//     // Scroll to the top when the component mounts
//     window.scrollTo(0, 0);
//   }, []);

//   const { toast } = useToast();

//   const handleLogin = () => {
//     toast({
//       title: "Coming Soon",
//       description: "Account functionality will be available in the next update.",
//     });
//   };

//   return (
//     <div className="container py-12 max-w-md mx-auto">
//       <Card>
//         <CardHeader>
//           <CardTitle className="text-2xl">My Account</CardTitle>
//           <CardDescription>
//             Sign in to access your account and manage your preferences
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <p className="text-center text-gray-500 italic">
//             Account functionality coming soon
//           </p>
//           <Button className="w-full bg-youit-primary hover:bg-youit-primary/90" onClick={handleLogin}>
//             Sign In
//           </Button>
//           <p className="text-center text-sm text-gray-500">
//             Don't have an account? <a href="/" className="text-youit-primary hover:underline">Register</a>
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Account;