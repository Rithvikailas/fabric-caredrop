
import { Shirt, Sparkles, Scissors, Clock, RefreshCw } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  index: number;
}) => {
  return (
    <div 
      className={`glass-card feature-card animate-fade-in-up delay-${(index % 5) * 100}`}
    >
      <div className="flex flex-col h-full">
        <div className="mb-6 inline-flex p-3 rounded-xl bg-launow-blue/10 text-launow-blue">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-launow-dark">{title}</h3>
        <p className="text-launow-dark/70 leading-relaxed flex-grow">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: "Laundry & Dry Cleaning",
      description: "Professional washing, drying, and pressing with premium detergents tailored to your fabric needs."
    },
    {
      icon: Sparkles,
      title: "Premium Fabric Care",
      description: "Specialized treatment for delicate, luxury fabrics ensuring longevity and preserved quality."
    },
    {
      icon: Scissors,
      title: "Tailoring & Alterations",
      description: "Expert alterations and tailoring services from skilled professionals to perfect your fit."
    },
    {
      icon: Clock,
      title: "Express Service",
      description: "Same-day processing and delivery for urgent needs with our priority handling service."
    },
    {
      icon: RefreshCw,
      title: "Subscription Plans",
      description: "Regular pickup and delivery schedules with exclusive benefits and priority processing."
    }
  ];

  return (
    <section id="services" className="section relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-launow-neutral-dark/30 to-transparent -z-10"></div>
      <div className="absolute top-1/3 -left-32 w-64 h-64 rounded-full bg-launow-light-blue/10 filter blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 rounded-full bg-launow-light-teal/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="section-heading animate-fade-in-up">
          <div className="inline-block bg-launow-blue/10 px-4 py-1.5 rounded-full text-launow-blue font-medium text-sm mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-launow-dark mb-4">Smart Solutions for Every Garment</h2>
          <p className="text-launow-dark/70 max-w-3xl mx-auto">
            Discover our comprehensive range of clothing care services designed to meet all your fabric needs with precision and excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
