import { useParams, Link } from 'react-router-dom';
import { COURSES } from '../data';

export default function CourseDetails() {
  const { id } = useParams<{ id: string }>();
  const course = COURSES.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="py-24 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-display text-on-surface font-light mb-6">Course not found</h1>
        <Link to="/" className="text-primary hover:underline mt-4 inline-block text-lg">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="py-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <div className="mb-12">
        <Link to="/services" className="text-sm font-semibold tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors inline-flex items-center gap-2">
          &larr; Back to Services
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <img 
            src={course.imageUrl} 
            alt={course.altText} 
            className="w-full h-auto object-cover aspect-square shadow-xl" 
          />
        </div>
        <div>
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
            {course.category}
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-on-surface font-light tracking-tight mb-6">
            {course.title}
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            {course.description}
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex justify-between border-b border-outline-variant pb-4">
              <span className="font-semibold uppercase tracking-widest text-sm text-on-surface-variant">Duration</span>
              <span className="text-on-surface">3-4 hours</span>
            </div>
            <div className="flex justify-between border-b border-outline-variant pb-4">
              <span className="font-semibold uppercase tracking-widest text-sm text-on-surface-variant">Level</span>
              <span className="text-on-surface">All Levels</span>
            </div>
            <div className="flex justify-between border-b border-outline-variant pb-4">
              <span className="font-semibold uppercase tracking-widest text-sm text-on-surface-variant">Price</span>
              <span className="text-on-surface">From $85</span>
            </div>
          </div>

          <Link 
            to="/book" 
            className="bg-on-surface text-background text-sm font-semibold tracking-widest uppercase px-10 py-4 transition-all hover:bg-transparent hover:text-on-surface border border-transparent hover:border-on-surface inline-block text-center w-full md:w-auto"
          >
            Book This Course
          </Link>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <h2 className="font-display text-2xl text-on-surface font-light mb-6 border-b border-outline-variant pb-4">
            Key Ingredients
          </h2>
          <ul className="space-y-3">
            {course.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-on-surface-variant">{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="lg:col-span-2">
          <h2 className="font-display text-2xl text-on-surface font-light mb-6 border-b border-outline-variant pb-4">
            How to Cook
          </h2>
          <ol className="space-y-6">
            {course.instructions.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="font-display text-primary text-xl min-w-[2rem]">
                  {String(index + 1).padStart(2, '0')}.
                </span>
                <p className="text-on-surface-variant leading-relaxed">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
