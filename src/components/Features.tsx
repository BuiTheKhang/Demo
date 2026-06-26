import React from 'react';
import { ChefHat, BookOpen, Leaf } from 'lucide-react';
import { FEATURES } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  'chef-hat': <ChefHat size={28} className="text-primary-container" />,
  'book-open': <BookOpen size={28} className="text-primary-container" />,
  'leaf': <Leaf size={28} className="text-primary-container" />,
};

export default function Features() {
  return (
    <section className="bg-on-surface text-background py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-12 order-2 md:order-1">
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight font-semibold">
            Authenticity in <br/>
            <span className="text-primary-container italic font-normal">Every Motion.</span>
          </h2>
          
          <div className="space-y-8">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="flex gap-6">
                <div className="shrink-0 mt-1">
                  {iconMap[feature.iconName]}
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-widest uppercase mb-2 text-white">
                    {feature.title}
                  </h4>
                  <p className="text-on-surface-variant text-[#d1c4bc] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-1 md:order-2 px-8 md:px-0">
          <div className="aspect-square border border-outline-variant p-4">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr6zmTvkZZOPpGcGHLhE81v66RL4WYe9q6dym1RVgi7wv2Gin2NcdXJBGcpwpOJNbW2Hyvvq6F_0_4QWua77IcPQcKk164kB9uIPd91dxncyiOKINXDqPG0mGcXRY3NXWFytwpNCTqZze6qfVW4XPj8GjES7Ew6ySvjYgHukdzneAGl_N2R_VA3hpRuIIHx0P-aqfoV3uctrXf2iI5qlALPIY3NOr9EsuJl9yKy18Aorhuj1nKzb3BV1lQc1Ae0rbrq6NCes_FcPY" 
              alt="Close up of Vietnamese chef preparation" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-primary-container p-8 hidden md:block shadow-xl">
            <p className="font-display text-5xl text-on-primary-container font-bold mb-1">12+</p>
            <p className="text-xs font-semibold tracking-widest uppercase text-on-primary-container">
              Years Experience
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
