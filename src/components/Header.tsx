import { useState } from 'react';
import { Coffee, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Menu', id: 'menu' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Go to home page"
          >
            <Coffee className="w-8 h-8" style={{ color: 'var(--primary)' }} />
            <span className="text-2xl" style={{ color: 'var(--primary)' }}>
              Brew Haven
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" aria-label="Primary navigation">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 rounded-md transition-all ${
                      currentPage === item.id
                        ? 'bg-opacity-10'
                        : 'hover:bg-opacity-5'
                    }`}
                    style={{
                      backgroundColor:
                        currentPage === item.id ? 'var(--primary)' : 'transparent',
                      color: currentPage === item.id ? 'var(--primary)' : 'var(--text-dark)',
                    }}
                    aria-current={currentPage === item.id ? 'page' : undefined}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: 'var(--primary)' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: 'var(--primary)' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-md transition-all ${
                      currentPage === item.id
                        ? 'bg-opacity-10'
                        : 'hover:bg-opacity-5'
                    }`}
                    style={{
                      backgroundColor:
                        currentPage === item.id ? 'var(--primary)' : 'transparent',
                      color: currentPage === item.id ? 'var(--primary)' : 'var(--text-dark)',
                    }}
                    aria-current={currentPage === item.id ? 'page' : undefined}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
