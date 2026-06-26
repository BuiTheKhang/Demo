export default function Newsletter() {
  return (
    <section className="py-24 bg-surface-container-low border-b border-outline-variant">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-6 font-semibold">
          Begin Your Journey
        </h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          Join our mailing list for monthly recipes, cultural insights, and early access to our most popular classes.
        </p>
        
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="YOUR EMAIL ADDRESS" 
            className="flex-grow bg-transparent border-0 border-b-2 border-primary py-3 px-2 text-sm font-semibold tracking-widest uppercase focus:ring-0 focus:border-on-surface transition-all outline-none text-center sm:text-left"
            required
          />
          <button 
            type="submit"
            className="bg-on-surface text-white text-sm font-semibold tracking-widest uppercase px-8 py-3 hover:bg-primary transition-colors duration-300 mt-4 sm:mt-0"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
