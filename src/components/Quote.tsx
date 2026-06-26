export default function Quote() {
  return (
    <section className="py-16 bg-background overflow-hidden border-b border-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="chopstick-divider"></div>
          <p className="font-display text-2xl text-on-surface italic font-medium">
            "The soul of Vietnam lives in its kitchen."
          </p>
        </div>
        
        <div className="hidden md:flex gap-2">
          <div className="w-3 h-3 bg-primary-container rounded-full"></div>
          <div className="w-3 h-3 border border-primary rounded-full"></div>
          <div className="w-3 h-3 border border-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
