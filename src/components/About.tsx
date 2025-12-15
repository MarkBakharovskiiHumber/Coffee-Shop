import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center mb-4">About Brew Haven</h1>
        <p className="text-center mb-16 opacity-80 max-w-2xl mx-auto">
          More than just a coffee shop—we're a community gathering place where great coffee meets
          warm hospitality
        </p>

        {/* Our Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="mb-6">Our Story</h2>
            <p className="mb-4 opacity-80">
              Founded in 2020, Brew Haven began as a dream to create a space where coffee lovers
              could find exceptional quality and genuine connection. What started as a small
              neighborhood café has grown into a beloved community hub.
            </p>
            <p className="mb-4 opacity-80">
              We believe that great coffee starts with great relationships. That's why we work
              directly with coffee farmers around the world, ensuring fair prices and sustainable
              practices. Every cup you enjoy supports these farming communities.
            </p>
            <p className="opacity-80">
              Our baristas are passionate artisans who take pride in their craft. From the perfect
              espresso pull to intricate latte art, every detail matters. We're not just serving
              coffee—we're creating experiences.
            </p>
          </div>
          <div className="order-first lg:order-last">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1672570050756-4f1953bde478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNjU4MDg2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Fresh roasted coffee beans"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </section>

        {/* Our Values */}
        <section
          className="py-16 px-8 rounded-lg mb-16"
          style={{ backgroundColor: 'var(--bg-light)' }}
        >
          <h2 className="text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="inline-block p-6 rounded-full mb-4"
                style={{ backgroundColor: 'var(--secondary)' }}
              >
                <span className="text-4xl">🌱</span>
              </div>
              <h3 className="mb-3">Sustainability</h3>
              <p className="opacity-80">
                Environmental responsibility guides everything we do, from sourcing to packaging
              </p>
            </div>
            <div className="text-center">
              <div
                className="inline-block p-6 rounded-full mb-4"
                style={{ backgroundColor: 'var(--secondary)' }}
              >
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="mb-3">Community</h3>
              <p className="opacity-80">
                Building connections and supporting local initiatives is at our heart
              </p>
            </div>
            <div className="text-center">
              <div
                className="inline-block p-6 rounded-full mb-4"
                style={{ backgroundColor: 'var(--secondary)' }}
              >
                <span className="text-4xl">✨</span>
              </div>
              <h3 className="mb-3">Excellence</h3>
              <p className="opacity-80">
                We're committed to the highest quality in every cup and every interaction
              </p>
            </div>
          </div>
        </section>

        {/* Team/Craft Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1607618421926-b72c6a99c342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMG1hY2hpbmUlMjBiYXJpc3RhfGVufDF8fHx8MTc2NTgxMDA3OHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Barista crafting espresso"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="mb-6">Our Craft</h2>
            <p className="mb-4 opacity-80">
              Coffee is an art form, and our team consists of certified baristas who have spent
              years perfecting their skills. From understanding bean origins to mastering brewing
              techniques, our expertise ensures every cup meets our high standards.
            </p>
            <p className="mb-4 opacity-80">
              We roast our beans in small batches to maintain freshness and bring out unique
              flavor profiles. Whether you prefer a bold dark roast or a bright, fruity light
              roast, we have something special for every palate.
            </p>
            <p className="opacity-80">
              Visit us to experience the difference that passion and expertise make. We'd love to
              share our knowledge and help you discover your perfect cup.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
