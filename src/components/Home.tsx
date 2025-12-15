import { Coffee, Heart, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const featuredDrinks = [
    {
      name: 'Signature Latte',
      description: 'Smooth espresso with perfectly steamed milk and latte art',
      image: 'https://images.unsplash.com/photo-1669162364316-a74b2d661d1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZXxlbnwxfHx8fDE3NjU3Mzk1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Cappuccino',
      description: 'Rich espresso topped with velvety foam',
      image: 'https://images.unsplash.com/photo-1638202448050-bddae16dd9be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwY3VwfGVufDF8fHx8MTc2NTcyMjEzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Fresh Pastries',
      description: 'Baked daily with premium ingredients',
      image: 'https://images.unsplash.com/photo-1712723246766-3eaea22e52ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBjcm9pc3NhbnR8ZW58MXx8fHwxNzY1NzI2MTkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const highlights = [
    {
      icon: Coffee,
      title: 'Premium Beans',
      description: 'Sourced from the finest coffee farms around the world',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every cup is crafted with care by our expert baristas',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in coffee and service',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(47, 33, 24, 0.7), rgba(47, 33, 24, 0.7)), url(https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1Njk4MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080)',
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-white mb-6">Welcome to Brew Haven</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Experience the perfect blend of flavor, atmosphere, and community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('menu')}
              className="px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)' }}
            >
              View Our Menu
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-lg transition-all hover:scale-105 bg-white shadow-lg"
              style={{ color: 'var(--primary)' }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Featured Drinks */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-center mb-12">Featured Favorites</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDrinks.map((drink, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
            >
              <ImageWithFallback
                src={drink.image}
                alt={drink.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3>{drink.name}</h3>
                <p className="mt-2 opacity-80">{drink.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Brand Highlights */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12">Why Choose Brew Haven</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105"
                >
                  <div
                    className="inline-flex p-4 rounded-full mb-4"
                    style={{ backgroundColor: 'var(--secondary)' }}
                  >
                    <Icon className="w-8 h-8" style={{ color: 'var(--primary)' }} />
                  </div>
                  <h3>{highlight.title}</h3>
                  <p className="mt-2 opacity-80">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
