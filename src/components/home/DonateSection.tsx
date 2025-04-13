import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const presetAmounts = [50, 100, 200, 500];

const DonateSection = () => {
  const { toast } = useToast();
  const [donationAmount, setDonationAmount] = useState<number | "custom">(presetAmounts[1]);
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = donationAmount === "custom" ? parseFloat(customAmount) : donationAmount;
    
    if (isNaN(finalAmount) || finalAmount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally redirect to a payment gateway
    console.log("Donation form submitted:", {
      ...formData,
      amount: finalAmount
    });
    
    toast({
      title: "Donation Process Started",
      description: `Thank you for your generous donation of Rs{finalAmount}!`,
    });

    // Reset form
    setDonationAmount(presetAmounts[1]);
    setCustomAmount("");
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Make a Donation</CardTitle>
        <CardDescription>
          Your contribution helps support our programs and initiatives
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-4">
              <Label>Select Donation Amount</Label>
              <Tabs 
                defaultValue={donationAmount.toString()} 
                className="w-full"
                onValueChange={(value) => setDonationAmount(value === "custom" ? "custom" : parseInt(value))}
              >
                <TabsList className="grid grid-cols-5 w-full">
                  {presetAmounts.map((amount) => (
                    <TabsTrigger 
                      key={amount} 
                      value={amount.toString()}
                      className="data-[state=active]:bg-youit-primary data-[state=active]:text-white"
                    >
                      Rs. {amount}
                    </TabsTrigger>
                  ))}
                  <TabsTrigger 
                    value="custom"
                    className="data-[state=active]:bg-youit-primary data-[state=active]:text-white"
                  >
                    Custom
                  </TabsTrigger>
                </TabsList>

                {donationAmount === "custom" && (
                  <div className="mt-4">
                    <Label htmlFor="custom-amount">Custom Amount (Rs)</Label>
                    <div className="relative mt-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">Rs</span>
                      </div>
                      <Input
                        type="number"
                        id="custom-amount"
                        name="custom-amount"
                        className="pl-7"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        placeholder="Enter amount"
                        min="1"
                        step="1"
                        required={donationAmount === "custom"}
                      />
                    </div>
                  </div>
                )}
              </Tabs>
            </div>

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
              <Label htmlFor="email">Email Address (Optional)</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
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
          </div>

          <Button type="submit" className="w-full bg-youit-primary hover:bg-youit-primary/90">
            Proceed to Donate
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DonateSection;