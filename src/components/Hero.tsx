
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-soft -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-launow-light-blue/10 rounded-full filter blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-launow-light-teal/10 rounded-full filter blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in-up">
            <div className="inline-block bg-launow-blue/10 px-4 py-1.5 rounded-full text-launow-blue font-medium text-sm">
              Smart Laundry Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-launow-dark">
              The Intelligent <span className="text-launow-blue">Fabric Care</span> Platform
            </h1>
            
            <p className="text-lg md:text-xl text-launow-dark/80 max-w-xl">
              Connect with premium laundry, dry cleaning, and tailoring services with doorstep pickup and delivery, all through one seamless app.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center gap-2">
                <span>Get Started</span>
                <ArrowRight size={18} />
              </button>
              <button className="btn-secondary">Learn More</button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                    aria-label="User avatar"
                  >
                    <div className="w-full h-full bg-launow-blue/20"></div>
                  </div>
                ))}
              </div>
              <div>
                <p className="font-semibold text-launow-dark">2,500+ Happy Users</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="text-sm text-gray-500 ml-1">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="relative flex items-center justify-center animate-fade-in delay-300">
            {/* Circle backdrop */}
            <div className="absolute -z-10 w-[80%] h-[80%] rounded-full bg-launow-light-blue/20 animate-pulse-soft"></div>
            
            {/* Main image - Using a placeholder design */}
            <div className="relative glass-card w-full max-w-md aspect-square rounded-3xl overflow-hidden animate-float shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-launow-blue/20 to-launow-teal/10"></div>
              
              {/* Phone mockup */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[65%] h-[75%] bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
                {/* App UI mockup */}
                <div className="w-full h-full bg-launow-neutral flex flex-col">
                  {/* App header */}
                  <div className="bg-launow-blue p-3 flex items-center justify-between">
                    <div className="text-white font-semibold">Launow</div>
                    <div className="w-6 h-6 rounded-full bg-white/20"></div>
                  </div>
                  
                  {/* App content */}
                  <div className="flex-1 p-2 space-y-2">
                    <div className="h-10 bg-white rounded-lg shadow-sm"></div>
                    <div className="h-24 bg-white rounded-lg shadow-sm"></div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-20 bg-white rounded-lg shadow-sm"></div>
                      <div className="h-20 bg-white rounded-lg shadow-sm"></div>
                    </div>
                  </div>
                  
                  {/* App nav */}
                  <div className="h-12 bg-white border-t border-gray-200 flex justify-around items-center">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-1 rounded-full bg-gray-300"></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-[20%] left-[15%] glass-card p-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-launow-teal flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-xs font-medium">Pickup Scheduled</div>
                </div>
              </div>
              
              <div className="absolute bottom-[20%] right-[15%] glass-card p-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-launow-blue flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-xs font-medium">Tracking Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
