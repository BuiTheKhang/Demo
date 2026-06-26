import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="w-full top-0 sticky bg-background/95 backdrop-blur-sm border-b border-outline-variant z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center h-20">
        <Link to="/" className="font-display text-2xl text-primary font-semibold tracking-tight">
          Saigon Chopstick
        </Link>
        
        <div className="hidden md:flex items-center gap-12">
          <Link to="/" className={`text-sm font-semibold tracking-widest uppercase transition-all ${location.pathname === '/' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>
            Home
          </Link>
          <Link to="/about" className={`text-sm font-semibold tracking-widest uppercase transition-all ${location.pathname === '/about' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>
            About Us
          </Link>
          <Link to="/services" className={`text-sm font-semibold tracking-widest uppercase transition-all ${location.pathname === '/services' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>
            Services
          </Link>
          <Link to="/contact" className={`text-sm font-semibold tracking-widest uppercase transition-all ${location.pathname === '/contact' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>
            Contact
          </Link>
        </div>

        <div className="hidden md:block">
          <Link to="/book" className="bg-on-surface text-background text-sm font-semibold tracking-widest uppercase px-8 py-3 transition-all hover:bg-transparent hover:text-on-surface border border-transparent hover:border-on-surface inline-block">
            Book a Class
          </Link>
        </div>

        <button className="md:hidden text-on-surface">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
