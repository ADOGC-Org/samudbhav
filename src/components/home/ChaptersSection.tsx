import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const chapters = [
  {
    id: "wow",
    name: "WoW",
    title: "Women of Wonders : Empowering women",
    description: "Dedicated to uplifting rural women through education, skill development, and sustainable livelihood opportunities.",
    color: "bg-youit-woemch",
    hoverColor: "hover:bg-youit-woemch/90",
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "supatham",
    name: "Supatham",
    title: "Supatham : A Way to Wisdom",
    description: "Providing knowledge in various fields to empower individuals.",
    color: "bg-youit-smtl",
    hoverColor: "hover:bg-youit-smtl/90",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "adrishyaa",
    name: "Adrishyaa",
    title: "Cummunity based E-Commerce Platform",
    description: "An online marketplace focused on ethical products supporting local communities and sustainable practices.",
    color: "bg-youit-sholi",
    hoverColor: "hover:bg-youit-sholi/90",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  }
];

const ChaptersSection = () => {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex space-x-6 min-w-max px-4 md:px-0">
        {chapters.map((chapter) => (
          <Card key={chapter.id} className="w-80 md:w-96 flex-shrink-0 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="p-0">
              <img 
                src={chapter.image} 
                alt={chapter.name} 
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-3 h-3 rounded-full ${chapter.color}`}></div>
                <CardTitle className="text-xl">{chapter.name}</CardTitle>
              </div>
              <h3 className="font-medium text-lg text-gray-700">{chapter.title}</h3>
              <CardDescription className="mt-2">{chapter.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className={`${chapter.color} ${chapter.hoverColor} mt-2`}>
                <Link to={`/chapters/${chapter.id}`} className="flex items-center gap-1">
                  Learn More <ChevronRight size={16} />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ChaptersSection;