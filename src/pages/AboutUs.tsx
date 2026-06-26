export default function AboutUs() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl md:text-5xl text-on-surface font-light tracking-tight mb-6">Our Story</h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
          We are passionate about sharing the vibrant flavors and culinary traditions of Vietnam. 
          Our classes are designed to be immersive, hands-on, and accessible for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <img src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&q=80&w=800" alt="Chef cooking" className="w-full h-auto object-cover aspect-square shadow-xl" />
        </div>
        <div>
          <h2 className="font-display text-3xl text-on-surface font-light mb-6">Meet the Chef</h2>
          <p className="text-on-surface-variant mb-6 leading-relaxed">
            Born and raised in Ho Chi Minh City, Chef Linh developed a deep love for Vietnamese cuisine in her grandmother's kitchen. After honing her skills in top restaurants across Southeast Asia, she returned to her roots to share the authentic flavors of Saigon.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Saigon Chopstick was founded on the belief that cooking is about more than just food; it's about community, culture, and creating memories together. Chef Linh's approach blends traditional techniques with modern accessibility, ensuring that everyone can recreate the magic of Vietnamese street food at home.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-display text-3xl text-on-surface font-light mb-6">Farm to Table Philosophy</h2>
          <p className="text-on-surface-variant mb-6 leading-relaxed">
            We believe that the best dishes start with the best ingredients. That's why we source our produce, meats, and seafood from local farmers and markets every single morning.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            During our market tours, you'll learn how to select the freshest herbs, identify seasonal vegetables, and understand the core ingredients that form the backbone of Vietnamese flavor profiles. It's a true seed-to-plate experience.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" alt="Fresh ingredients" className="w-full h-auto object-cover aspect-square shadow-xl" />
        </div>
      </div>
    </div>
  );
}
