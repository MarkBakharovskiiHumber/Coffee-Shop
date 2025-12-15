import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    let isValid = true;

    // Name validation
    if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
      isValid = false;
    }

    // Email validation
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Message validation
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, simulate submission
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center mb-4">Get In Touch</h1>
        <p className="text-center mb-16 opacity-80 max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you. Fill out the form below or visit
          us in person.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="mb-6">Send Us a Message</h2>

            {submitted && (
              <div
                className="mb-6 p-4 rounded-lg"
                style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)' }}
                role="alert"
              >
                Thank you! Your message has been received. We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2">
                  Name <span style={{ color: 'var(--accent)' }}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  style={{ focusRing: 'var(--primary)' }}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2">
                  Email <span style={{ color: 'var(--accent)' }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2">
                  Message <span style={{ color: 'var(--accent)' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg text-white transition-all hover:scale-105 shadow-md"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Contact Information */}
          <section>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: 'var(--secondary)' }}
                  >
                    <MapPin className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                  </div>
                  <div>
                    <h4 className="mb-1">Address</h4>
                    <p className="opacity-80">123 Coffee Street</p>
                    <p className="opacity-80">Seattle, WA 98101</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: 'var(--secondary)' }}
                  >
                    <Phone className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                  </div>
                  <div>
                    <h4 className="mb-1">Phone</h4>
                    <p className="opacity-80">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: 'var(--secondary)' }}
                  >
                    <Mail className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                  </div>
                  <div>
                    <h4 className="mb-1">Email</h4>
                    <p className="opacity-80">hello@brewhaven.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: 'var(--secondary)' }}
                  >
                    <Clock className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                  </div>
                  <div>
                    <h4 className="mb-1">Hours</h4>
                    <p className="opacity-80">Monday - Friday: 7am - 7pm</p>
                    <p className="opacity-80">Saturday - Sunday: 8am - 8pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="mb-4">Visit Us</h3>
              <p className="opacity-80 mb-4">
                Stop by our café to experience our warm atmosphere, meet our friendly baristas,
                and enjoy freshly brewed coffee. We look forward to serving you!
              </p>
              <div
                className="w-full h-64 rounded-lg bg-gray-200 flex items-center justify-center"
                style={{ backgroundColor: 'var(--secondary)' }}
              >
                <p style={{ color: 'var(--primary)' }}>Map Placeholder</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
