import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const RegisterForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: {
      woemch: false,
      smtl: false,
      sholi: false,
    },
    newsletter: {
      woemch: false,
      smtl: false,
      sholi: false,
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (
    category: keyof typeof formData.interests,
    field: 'interests' | 'newsletter',
    checked: boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [category]: checked,
      },
    }));
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally make an API call to register the user
    console.log("Form submitted:", formData);
    
    toast({
      title: "Registration Submitted",
      description: "Thank you for your interest in YouItOrg!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      interests: {
        woemch: false,
        smtl: false,
        sholi: false,
      },
      newsletter: {
        woemch: false,
        smtl: false,
        sholi: false,
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Register with Samudbhav</CardTitle>
        <CardDescription>
          Join our community to stay updated and get involved with our initiatives
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="space-y-3">
              <Label>Interests (Optional)</Label>
              <div className="grid gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="interest-woemch" 
                    checked={formData.interests.woemch}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange("woemch", "interests", checked as boolean)
                    }
                  />
                  <Label htmlFor="interest-woemch" className="font-normal text-gray-700">
                    WoW - Women Empowerment
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="interest-smtl" 
                    checked={formData.interests.smtl}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange("smtl", "interests", checked as boolean)
                    }
                  />
                  <Label htmlFor="interest-smtl" className="font-normal text-gray-700">
                    Supatham
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="interest-sholi" 
                    checked={formData.interests.sholi}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange("sholi", "interests", checked as boolean)
                    }
                  />
                  <Label htmlFor="interest-sholi" className="font-normal text-gray-700">
                    Adrishyaa
                  </Label>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Subscribe to Newsletters</Label>
              <div className="grid gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="newsletter-woemch" 
                    checked={formData.newsletter.woemch}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange("woemch", "newsletter", checked as boolean)
                    }
                  />
                  <Label htmlFor="newsletter-woemch" className="font-normal text-gray-700">
                    WOEMCH Newsletter
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="newsletter-smtl" 
                    checked={formData.newsletter.smtl}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange("smtl", "newsletter", checked as boolean)
                    }
                  />
                  <Label htmlFor="newsletter-smtl" className="font-normal text-gray-700">
                    SMTL Newsletter
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="newsletter-sholi" 
                    checked={formData.newsletter.sholi}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange("sholi", "newsletter", checked as boolean)
                    }
                  />
                  <Label htmlFor="newsletter-sholi" className="font-normal text-gray-700">
                    SHOLI Newsletter
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full bg-youit-primary hover:bg-youit-primary/90">
            Register
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;