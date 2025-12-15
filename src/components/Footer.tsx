import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--primary)' }} className="text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8" />
              <span className="text-2xl">Brew Haven</span>
            </div>
            <p className="opacity-90">
              Crafting exceptional coffee experiences since 2020. Your neighborhood coffee shop.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white mb-4">Connect With Us</h4>
            <div className="space-y-2 mb-4">
              <p className="opacity-90">123 Coffee Street</p>
              <p className="opacity-90">Seattle, WA 98101</p>
              <p className="opacity-90">Phone: (555) 123-4567</p>
            </div>
            <div className="flex gap-4" role="list" aria-label="Social media links">
              <a
                href="#"
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center opacity-90">
          <p>&copy; 2024 Brew Haven. All rights reserved. | Designed by Mark Baharovskii</p>
        </div>
      </div>
    </footer>
  );
}
