
import { Leaf, Recycle, Heart } from 'lucide-react';

const SustainabilityCard = ({ 
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
      className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md animate-fade-in-up transition-all duration-300 hover:shadow-lg"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-6 inline-flex p-4 rounded-full bg-launow-blue/10 text-launow-blue">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-launow-dark">{title}</h3>
        <p className="text-launow-dark/70 leading-relaxed flex-grow">{description}</p>
      </div>
    </div>
  );
};

const Sustainability = () => {
  const initiatives = [
    {
      icon: Leaf,
      title: "Eco-Friendly Operations",
      description: "We partner with service providers who use environmentally conscious cleaning methods, biodegradable detergents, and water-saving technologies."
    },
    {
      icon: Recycle,
      title: "Sustainable Packaging",
      description: "All deliveries use recyclable or biodegradable packaging materials, reducing plastic waste and environmental impact."
    },
    {
      icon: Heart,
      title: "Clothing Donation Program",
      description: "Our platform facilitates clothing donations to local charities, helping extend garment lifecycles and support communities in need."
    }
  ];

  return (
    <section id="sustainability" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-launow-neutral to-launow-neutral-dark/20 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 opacity-40 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-launow-light-blue/10 via-transparent to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 opacity-40 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-launow-light-teal/10 via-transparent to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-block bg-launow-blue/10 px-4 py-1.5 rounded-full text-launow-blue font-medium text-sm">
                Our Commitment
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-launow-dark">
                Sustainable Fabric Care for a Greener Future
              </h2>
              
              <p className="text-lg text-launow-dark/70">
                At Launow, we're committed to making a positive environmental impact while providing exceptional service. Our sustainability initiatives focus on reducing waste, conserving resources, and supporting ethical practices.
              </p>
              
              <div className="pt-4 grid gap-6 sm:grid-cols-2">
                {[
                  { stat: "40%", label: "Reduced Water Usage" },
                  { stat: "60%", label: "Eco-Friendly Partners" },
                  { stat: "10K+", label: "Garments Donated" },
                  { stat: "95%", label: "Recyclable Packaging" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white/70 backdrop-blur-sm rounded-xl p-4 animate-fade-in-up"
                    style={{ animationDelay: `${(index + 3) * 100}ms` }}
                  >
                    <p className="text-2xl font-bold text-launow-blue">{item.stat}</p>
                    <p className="text-launow-dark/70">{item.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <button className="btn-primary">Learn More About Our Impact</button>
              </div>
            </div>
          </div>
          
          {/* Initiative cards */}
          <div className="grid gap-6 animate-fade-in-up delay-200">
            {initiatives.map((initiative, index) => (
              <SustainabilityCard
                key={index}
                icon={initiative.icon}
                title={initiative.title}
                description={initiative.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
