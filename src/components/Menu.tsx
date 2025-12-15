import { useState, useEffect } from 'react';
import { Coffee, Milk, Croissant } from 'lucide-react';

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('Coffee');

  const menuItems = [
    { name: 'Espresso', price: '$3.50', category: 'Coffee', description: 'Bold and intense' },
    { name: 'Latte', price: '$4.50', category: 'Coffee', description: 'Smooth and creamy' },
    { name: 'Cappuccino', price: '$4.00', category: 'Coffee', description: 'Perfect balance' },
    { name: 'Americano', price: '$3.75', category: 'Coffee', description: 'Classic and strong' },
    { name: 'Mocha', price: '$5.00', category: 'Coffee', description: 'Chocolate delight' },
    { name: 'Flat White', price: '$4.25', category: 'Coffee', description: 'Velvety smooth' },
    { name: 'Green Tea', price: '$3.50', category: 'Tea', description: 'Fresh and light' },
    { name: 'Earl Grey', price: '$3.50', category: 'Tea', description: 'Classic bergamot' },
    { name: 'Chamomile', price: '$3.75', category: 'Tea', description: 'Calming blend' },
    { name: 'Chai Latte', price: '$4.50', category: 'Tea', description: 'Spiced perfection' },
    { name: 'Croissant', price: '$3.00', category: 'Pastries', description: 'Buttery and flaky' },
    { name: 'Muffin', price: '$3.50', category: 'Pastries', description: 'Fresh baked daily' },
    { name: 'Scone', price: '$3.25', category: 'Pastries', description: 'Traditional recipe' },
    {
      name: 'Chocolate Cake',
      price: '$4.50',
      category: 'Pastries',
      description: 'Rich and decadent',
    },
  ];

  const categories = [
    { name: 'Coffee', icon: Coffee },
    { name: 'Tea', icon: Milk },
    { name: 'Pastries', icon: Croissant },
  ];

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  // Save last viewed category to localStorage
  useEffect(() => {
    const savedCategory = localStorage.getItem('lastMenuCategory');
    if (savedCategory) {
      setActiveCategory(savedCategory);
    }
  }, []);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    localStorage.setItem('lastMenuCategory', category);
  };

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center mb-4">Our Menu</h1>
        <p className="text-center mb-12 opacity-80 max-w-2xl mx-auto">
          Discover our carefully curated selection of premium coffee, tea, and freshly baked
          pastries
        </p>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          role="tablist"
          aria-label="Menu categories"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => handleCategoryChange(category.name)}
                role="tab"
                aria-selected={activeCategory === category.name}
                aria-controls={`${category.name.toLowerCase()}-panel`}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeCategory === category.name
                    ? 'shadow-lg scale-105'
                    : 'shadow-md hover:scale-105'
                }`}
                style={{
                  backgroundColor:
                    activeCategory === category.name ? 'var(--primary)' : 'white',
                  color: activeCategory === category.name ? 'white' : 'var(--text-dark)',
                }}
              >
                <Icon className="w-5 h-5" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div
          role="tabpanel"
          id={`${activeCategory.toLowerCase()}-panel`}
          aria-labelledby={`${activeCategory.toLowerCase()}-tab`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-lg p-6 shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-2">
                <h3>{item.name}</h3>
                <span className="text-xl" style={{ color: 'var(--accent)' }}>
                  {item.price}
                </span>
              </div>
              <p className="opacity-70">{item.description}</p>
            </article>
          ))}
        </div>

        {/* Additional Info Section */}
        <section className="mt-16 p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-center mb-6">Sustainability Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="mb-3">Ethically Sourced</h4>
              <p className="opacity-80">
                We partner directly with coffee farmers to ensure fair wages and sustainable
                farming practices. Our beans are 100% organic and shade-grown.
              </p>
            </div>
            <div>
              <h4 className="mb-3">Eco-Friendly</h4>
              <p className="opacity-80">
                All our cups and packaging are compostable or recyclable. We offer discounts for
                customers who bring their own reusable cups.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
