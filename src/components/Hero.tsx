import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <header className="relative w-full overflow-hidden bg-surface-container-low min-h-[85vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkxduyk3pyQWcL0oHAG6JVEZIjDEKCWCx2oiiKnxB4PPfJontCHpENGJ6dzK-_ysKq35VLatZ6YQuMYV5pmGyckHqdz6gqaq3P6FUw21ijvJRsvMvv4SQr-zZw-Jk6kqkxGRy7F2wNRAoclfAp-yJEbECtEuHXdpsQLXrbMW1c4TYFR_XP7duYjpcvGVgOzIQoJ5-aXK7_tRQtynfS6MQ95KSs4MeR9BfdeYoHMHHAGsz4CEp-KiUyPsWFgZbQI_V0WMf9v6WnSvQ" 
          alt="Culinary masters at Saigon Chopstick" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 w-full">
        <div className="max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-4 text-primary">
            <span className="w-12 h-[1px] bg-primary"></span>
            <span className="text-sm font-semibold tracking-widest uppercase">Est. 2018</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl text-on-surface leading-tight font-bold">
            Master the Art of <br/>
            <span className="italic text-primary font-normal">Vietnamese Cuisine.</span>
          </h1>
          
          <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
            Experience the warm, cozy essence of a home kitchen with expert guidance from Saigon's culinary masters. Learn the secrets of balance, aroma, and tradition.
          </p>
          
          <div className="pt-4">
            <Link to="/services" className="inline-block bg-primary text-white text-sm font-semibold tracking-widest uppercase px-10 py-4 border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary">
              Explore Classes
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
