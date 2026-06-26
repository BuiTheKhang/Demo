import { useState } from 'react';
import { COURSES } from '../data';

export default function BookClass() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-24 max-w-3xl mx-auto px-6 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="font-display text-4xl text-primary font-light mb-6">Booking Confirmed!</h1>
        <p className="text-on-surface-variant text-lg mb-8">
          Thank you for booking a class with Saigon Chopstick. We have sent a confirmation email with all the details you need.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-on-surface text-background text-sm font-semibold tracking-widest uppercase px-8 py-4 transition-all hover:bg-transparent hover:text-on-surface border border-transparent hover:border-on-surface"
        >
          Book Another Class
        </button>
      </div>
    );
  }

  return (
    <div className="py-24 max-w-3xl mx-auto px-6 md:px-12 lg:px-16">
      <h1 className="font-display text-4xl md:text-5xl text-on-surface font-light tracking-tight text-center mb-12">Book a Class</h1>
      
      <div className="bg-surface p-8 border border-outline-variant">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          <div>
            <label htmlFor="course" className="block text-sm font-semibold tracking-widest uppercase text-on-surface-variant mb-2">Select Course</label>
            <select id="course" required className="w-full bg-background border border-outline-variant px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
              <option value="">-- Choose a class --</option>
              {COURSES.map(course => (
                <option key={course.id} value={course.id}>{course.title}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-semibold tracking-widest uppercase text-on-surface-variant mb-2">Date</label>
              <input type="date" id="date" required className="w-full bg-background border border-outline-variant px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label htmlFor="guests" className="block text-sm font-semibold tracking-widest uppercase text-on-surface-variant mb-2">Number of Guests</label>
              <input type="number" id="guests" min="1" max="10" required className="w-full bg-background border border-outline-variant px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" defaultValue="1" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold tracking-widest uppercase text-on-surface-variant mb-2">First Name</label>
              <input type="text" id="firstName" required className="w-full bg-background border border-outline-variant px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="Jane" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold tracking-widest uppercase text-on-surface-variant mb-2">Last Name</label>
              <input type="text" id="lastName" required className="w-full bg-background border border-outline-variant px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold tracking-widest uppercase text-on-surface-variant mb-2">Email Address</label>
            <input type="email" id="email" required className="w-full bg-background border border-outline-variant px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="jane@example.com" />
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-semibold tracking-widest uppercase text-on-surface-variant mb-2">Dietary Requirements / Notes</label>
            <textarea id="notes" rows={3} className="w-full bg-background border border-outline-variant px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Any allergies or special requests?"></textarea>
          </div>

          <button type="submit" className="bg-on-surface text-background text-sm font-semibold tracking-widest uppercase px-8 py-4 transition-all hover:bg-transparent hover:text-on-surface border border-transparent hover:border-on-surface mt-4">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
