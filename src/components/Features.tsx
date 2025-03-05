
import { Brain, Calendar, Shield, RefreshCw, Smartphone } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="section relative bg-launow-blue text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-launow-blue via-launow-blue to-launow-teal opacity-90 -z-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/5 backdrop-blur-xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-white/5 backdrop-blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="section-heading animate-fade-in-up">
          <div className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-white font-medium text-sm mb-4">
            Smart Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI-Powered Clothing Care</h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            Experience cutting-edge technology that transforms how you care for your garments and simplifies your routine.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-xl animate-fade-in-up">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse-soft"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Brain size={100} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">AI Recommendations & Insights</h3>
                <p className="text-white/80 mb-6">
                  Our advanced AI platform analyzes your garments to provide personalized care recommendations, extending their lifespan and maintaining their quality. Get detailed fabric health reports and tailored care instructions for each item in your wardrobe.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Fabric Analysis', 'Care Instructions', 'Longevity Tips'].map((item, index) => (
                    <div key={index} className="bg-white/10 rounded-lg px-4 py-2 text-center text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature cards */}
          {[
            {
              icon: Calendar,
              title: "Smart Scheduling",
              description: "Book laundry pickups in seconds with instant slot confirmation based on real-time service provider availability."
            },
            {
              icon: Shield,
              title: "Launow Protect+",
              description: "Premium insurance for your valuable garments with compensation for any service-related damages or issues."
            },
            {
              icon: RefreshCw,
              title: "Real-Time Tracking",
              description: "Monitor your garments throughout the cleaning process with live status updates and delivery ETAs."
            },
            {
              icon: Smartphone,
              title: "Virtual Wardrobe",
              description: "Digitally catalog your garments with care history, scheduled services, and personalized care tips."
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg transition-all duration-300 hover:bg-white/20 animate-fade-in-up" 
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <feature.icon size={32} className="mb-4 text-white/90" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
