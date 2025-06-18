import { MapPin, Phone, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-600 to-gray-950 text-gray-300 dark:from-red-600 dark:to-red-950 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Lonesons Xpress
            </h3>
            <p className="mb-4">
              Your trusted logistics partner delivering excellence since 2012.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-400 mt-1 mr-3" />
                <span>
                  123 Logistics Park, Suite 456
                  <br />
                  Freight City, FC 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-400 mr-3" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-400 mr-3" />
                <span>info@lonesonsxpress.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="/quote" className="hover:text-white transition-colors">
                  Get a Quote
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Google Maps */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Our Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.480708845099!2d74.50527647510937!3d32.48657869877318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eea1bd17dade5%3A0xbf4fecdf3fc66376!2sLONESONS%20LOGISTICS!5e0!3m2!1sen!2s!4v1749798534761!5m2!1sen!2s"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-12 pt-8 text-center">
          <p>
            © {new Date().getFullYear()} Lonesons Xpress. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
