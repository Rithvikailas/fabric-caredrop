
import { ArrowDown, ChevronRight } from 'lucide-react';

const AppPromo = () => {
  return (
    <section id="app" className="section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-soft -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* App mockup */}
          <div className="relative order-2 lg:order-1 animate-fade-in-up">
            <div className="relative mx-auto max-w-xs z-10">
              {/* Phone frame */}
              <div className="relative mx-auto w-full aspect-[9/19] bg-launow-dark rounded-[3rem] p-4 shadow-2xl overflow-hidden border-8 border-launow-dark">
                {/* Inner bezel */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-launow-dark rounded-b-xl z-20"></div>
                
                {/* Screen */}
                <div className="w-full h-full bg-launow-neutral rounded-[2rem] overflow-hidden">
                  {/* App UI */}
                  <div className="h-full flex flex-col">
                    {/* App header */}
                    <div className="bg-launow-blue px-4 py-5 flex items-center">
                      <div className="font-bold text-white text-xl">Launow</div>
                    </div>
                    
                    {/* App content */}
                    <div className="flex-1 p-3 space-y-3">
                      {/* Service selection */}
                      <div className="bg-white rounded-xl p-3 shadow-sm">
                        <div className="text-xs font-medium text-launow-dark/70 mb-2">SELECT SERVICE</div>
                        <div className="grid grid-cols-3 gap-2">
                          {['Wash', 'Dry Clean', 'Iron'].map((service, i) => (
                            <div 
                              key={i} 
                              className={`text-center p-2 rounded-lg text-xs ${i === 0 ? 'bg-launow-blue text-white' : 'bg-gray-100'}`}
                            >
                              {service}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Schedule */}
                      <div className="bg-white rounded-xl p-3 shadow-sm">
                        <div className="text-xs font-medium text-launow-dark/70 mb-2">PICKUP DATE</div>
                        <div className="flex justify-between">
                          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                            <div 
                              key={i} 
                              className={`w-8 h-8 flex items-center justify-center rounded-full text-xs ${i === 2 ? 'bg-launow-blue text-white' : ''}`}
                            >
                              {day}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Time slots */}
                      <div className="bg-white rounded-xl p-3 shadow-sm">
                        <div className="text-xs font-medium text-launow-dark/70 mb-2">SELECT TIME</div>
                        <div className="grid grid-cols-2 gap-2">
                          {['9AM - 11AM', '1PM - 3PM'].map((time, i) => (
                            <div 
                              key={i} 
                              className={`text-center p-2 rounded-lg text-xs ${i === 0 ? 'bg-launow-blue text-white' : 'bg-gray-100'}`}
                            >
                              {time}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Tracking map */}
                      <div className="bg-white rounded-xl p-3 shadow-sm">
                        <div className="text-xs font-medium text-launow-dark/70 mb-2">LIVE TRACKING</div>
                        <div className="bg-launow-neutral h-20 rounded-lg relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-5 h-5 rounded-full bg-launow-blue"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* App bottom bar */}
                    <div className="bg-white px-3 py-4 flex justify-around items-center border-t border-gray-100">
                      {[1, 2, 3, 4].map((i) => (
                        <div 
                          key={i} 
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${i === 1 ? 'bg-launow-blue text-white' : 'bg-gray-100'}`}
                        >
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating notification elements */}
              <div className="absolute -top-4 -right-4 glass-card p-3 rounded-xl shadow-lg animate-float z-20">
                <div className="text-xs font-medium">Pickup in 25 mins</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl shadow-lg animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="text-xs font-medium">3 Clean Items Ready</div>
              </div>
            </div>
            
            {/* Background design elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
              <div className="absolute top-0 left-0 w-64 h-64 bg-launow-blue/5 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-launow-light-teal/10 rounded-full filter blur-3xl"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 animate-fade-in-up">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-block bg-launow-blue/10 px-4 py-1.5 rounded-full text-launow-blue font-medium text-sm">
                Mobile Experience
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-launow-dark">
                Manage Laundry Services From Your Smartphone
              </h2>
              
              <p className="text-lg text-launow-dark/70">
                Download the Launow app and experience the convenience of managing all your garment care needs with just a few taps. Enjoy seamless booking, real-time tracking, and personalized recommendations.
              </p>
              
              <div className="space-y-4">
                {[
                  "Schedule pickups and deliveries in seconds",
                  "Track your items in real-time through the entire process",
                  "Receive AI-powered fabric care recommendations",
                  "Manage payments and view service history",
                  "Set up recurring orders with custom preferences"
                ].map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 animate-fade-in-up"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="mt-1 rounded-full p-1 bg-launow-blue/10 text-launow-blue">
                      <ChevronRight size={16} />
                    </div>
                    <p className="text-launow-dark/80">{feature}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <button className="btn-primary flex items-center gap-2">
                  <span>Download Now</span>
                  <ArrowDown size={18} />
                </button>
                <div className="mt-6 flex gap-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-launow-blue flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                        <path fillRule="evenodd" d="M10 4a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                        <path d="M10 12a1 1 0 100 2 1 1 0 000-2z" />
                        <path fillRule="evenodd" d="M10 8a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-launow-dark">Available on</p>
                      <p className="text-sm text-launow-dark/70">iOS & Android</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-launow-blue flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-launow-dark">24/7 Support</p>
                      <p className="text-sm text-launow-dark/70">In-app chat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;
