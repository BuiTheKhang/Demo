import { FOOTER_LINKS } from '../data';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-display text-2xl text-on-surface mb-6 font-semibold">Saigon Chopstick</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Elevating Vietnamese culinary arts through professional education and cultural storytelling since 2018.
          </p>
        </div>

        {FOOTER_LINKS.map((group) => (
          <div key={group.title}>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-primary mb-6">
              {group.title}
            </h4>
            <ul className="space-y-4 text-sm">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-on-surface-variant hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-primary mb-6">Contact</h4>
          <address className="not-italic space-y-4 text-sm text-on-surface-variant">
            <p>88 Nguyen Hue Street, District 1<br/>Ho Chi Minh City, Vietnam</p>
            <p>+84 (0) 28 3823 4567</p>
            <p>hello@saigonchopstick.edu</p>
          </address>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-on-surface-variant text-sm">
          © {new Date().getFullYear()} Saigon Chopstick Cooking Academy. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
