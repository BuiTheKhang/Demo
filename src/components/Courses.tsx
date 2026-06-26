import { COURSES } from '../data';

export default function Courses() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl text-on-surface mb-4 font-semibold">Our Signature Courses</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            From the street-side favorites to royal court delicacies, our courses cover the full spectrum of the Vietnamese flavor profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div key={course.id} className="group relative bg-background border border-outline-variant hover:border-primary transition-all duration-500 gold-border-double shadow-sm hover:shadow-md">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img 
                  src={course.imageUrl} 
                  alt={course.altText} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 pt-0 space-y-4">
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                  {course.category}
                </span>
                <h3 className="font-display text-2xl text-on-surface font-semibold">
                  {course.title}
                </h3>
                <p className="text-sm text-on-surface-variant line-clamp-2">
                  {course.description}
                </p>
                <button className="w-full mt-4 bg-transparent border border-on-surface text-on-surface text-sm font-semibold tracking-widest uppercase py-3 hover:bg-on-surface hover:text-white transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
