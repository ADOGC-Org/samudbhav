
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Samudbhav</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Learn about our mission, vision, and the dedicated team working to make a difference.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Samudbhav is dedicated to creating positive change through education, empowerment, and 
              sustainable initiatives. We work to uplift communities by providing resources, 
              knowledge, and support through our specialized chapters.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700">
              We envision a world where every individual has the opportunity to thrive, regardless 
              of their background or circumstances. Through our diverse chapters, we aim to create 
              lasting impact and build self-sustaining communities.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center my-16">
        <p className="text-lg text-gray-600 italic">
          "Together, we can make a difference." - Samudbhav
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Story</h2>
        <p className="text-gray-700 mb-4">
          Samudbhav was founded with a simple yet powerful idea: to create an organization that addresses 
          multiple aspects of community development through specialized chapters. Each chapter focuses on 
          a unique area where we identified opportunities to make a significant impact.
        </p>
        <p className="text-gray-700 mb-4">
          Our journey began with the WoW chapter, dedicated to rural women's empowerment. Recognizing 
          the transformative power of education, we soon expanded to include Supatham, our educational initiative.
          Most recently, we launched Adrishyaa, our cummunity based e-commerce platform, completing our holistic approach
          to community development.
        </p>
        <p className="text-gray-700">
          Today, Samudbhav continues to grow, guided by our core values of integrity, compassion, and innovation.
          We are committed to creating sustainable change and building brighter futures for the communities we serve.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;