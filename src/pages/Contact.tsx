export default function Contact() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <h1 className="font-display text-4xl md:text-5xl text-on-surface font-light tracking-tight text-center mb-12">Contact Us</h1>
      <div className="max-w-xl mx-auto bg-surface p-8 border border-outline-variant">
        <form className="flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold tracking-widest uppercase text-on-surface-variant mb-2">Name</label>
            <input type="text" id="name" className="w-full bg-background border border-outline-variant px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold tracking-widest uppercase text-on-surface-variant mb-2">Email</label>
            <input type="email" id="email" className="w-full bg-background border border-outline-variant px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="Your Email" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold tracking-widest uppercase text-on-surface-variant mb-2">Message</label>
            <textarea id="message" rows={5} className="w-full bg-background border border-outline-variant px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can we help you?"></textarea>
          </div>
          <button type="button" className="bg-on-surface text-background text-sm font-semibold tracking-widest uppercase px-8 py-4 transition-all hover:bg-transparent hover:text-on-surface border border-transparent hover:border-on-surface mt-4">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
