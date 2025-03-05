
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonial = ({ 
  content, 
  name, 
  role, 
  rating, 
  isActive 
}: { 
  content: string;
  name: string;
  role: string;
  rating: number;
  isActive: boolean;
}) => {
  return (
    <div 
      className={`glass-card p-8 md:p-10 transition-all duration-500 transform ${
        isActive 
          ? 'opacity-100 scale-100 shadow-xl' 
          : 'opacity-0 scale-90 pointer-events-none absolute'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex mb-6">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              size={20} 
              className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
            />
          ))}
        </div>
        
        <p className="text-launow-dark text-lg md:text-xl mb-8 flex-grow leading-relaxed">
          "{content}"
        </p>
        
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-launow-blue/20 flex items-center justify-center mr-4">
            <span className="text-launow-blue font-bold text-xl">{name.charAt(0)}</span>
          </div>
          <div>
            <h4 className="font-semibold text-launow-dark">{name}</h4>
            <p className="text-launow-dark/60 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      content: "Launow has completely transformed how I handle my wardrobe. The AI recommendations have extended the life of my favorite clothes, and the service quality is consistently exceptional. Highly recommend!",
      name: "Sarah Johnson",
      role: "Marketing Executive",
      rating: 5
    },
    {
      content: "As someone who travels frequently for work, Launow is a game-changer. I can schedule pickups and have my clothes waiting freshly cleaned when I return. The tracking feature gives me peace of mind.",
      name: "Michael Chen",
      role: "Business Consultant",
      rating: 5
    },
    {
      content: "The fabric health reports have been eye-opening. I never realized how improper care was affecting my clothes. Now with Launow's personalized recommendations, my high-end pieces stay pristine longer.",
      name: "Emma Rodriguez",
      role: "Fashion Designer",
      rating: 4
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="section bg-gradient-soft relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 rounded-full bg-launow-light-blue/10 filter blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 rounded-full bg-launow-light-teal/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="section-heading animate-fade-in-up">
          <div className="inline-block bg-launow-blue/10 px-4 py-1.5 rounded-full text-launow-blue font-medium text-sm mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-launow-dark mb-4">What Our Users Say</h2>
          <p className="text-launow-dark/70 max-w-3xl mx-auto">
            Discover how Launow has simplified clothing care and elevated everyday life for our community of users.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto relative my-12">
          {/* Testimonials */}
          <div className="relative h-[320px] md:h-[280px]">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                content={testimonial.content}
                name={testimonial.name}
                role={testimonial.role}
                rating={testimonial.rating}
                isActive={index === activeIndex}
              />
            ))}
          </div>
          
          {/* Control buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-launow-blue/20 flex items-center justify-center text-launow-blue hover:bg-launow-blue hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-launow-blue/20 flex items-center justify-center text-launow-blue hover:bg-launow-blue hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Indicator dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-launow-blue scale-100' 
                    : 'bg-launow-blue/30 scale-75'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
