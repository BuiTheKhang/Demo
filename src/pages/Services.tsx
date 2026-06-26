import Courses from '../components/Courses';
import Features from '../components/Features';

export default function Services() {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl text-on-surface font-light tracking-tight mb-6">Our Services</h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Explore our cooking classes and culinary experiences.
        </p>
      </div>
      <Courses />
      <Features />
    </div>
  );
}
