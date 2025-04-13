
import DonateSection from "@/components/home/DonateSection";

const Donate = () => {
  return (
    <div className="container py-12 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Support Our Mission</h1>
        <p className="text-lg text-gray-600">
          Your generous donations help us continue our work and make a real difference
          in the communities we serve.
        </p>
      </div>
      <DonateSection />
    </div>
  );
};

export default Donate;