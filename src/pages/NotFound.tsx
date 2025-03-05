
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-soft p-4">
      <div className="glass-card p-8 md:p-12 max-w-md w-full text-center animate-fade-in-up">
        <div className="w-20 h-20 bg-launow-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-launow-blue">404</span>
        </div>
        <h1 className="text-3xl font-bold text-launow-dark mb-4">Page Not Found</h1>
        <p className="text-launow-dark/70 mb-8">
          We couldn't find the page you were looking for. It might have been moved or doesn't exist.
        </p>
        <a href="/" className="btn-primary inline-flex items-center justify-center gap-2">
          <Home size={18} />
          <span>Return to Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
