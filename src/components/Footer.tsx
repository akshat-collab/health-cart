import { Facebook, Instagram, Twitter, Mail, Phone, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        
        {/* Footer Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 tracking-wide text-blue-200">HealthCart</h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in health and wellness, delivering top-notch supplements and health solutions to meet your everyday needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-300">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="transition-colors duration-300 text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="transition-colors duration-300 text-gray-300 hover:text-white">Products</a></li>
              <li><a href="#" className="transition-colors duration-300 text-gray-300 hover:text-white">AI Services</a></li>
              <li><a href="#" className="transition-colors duration-300 text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-300">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="transition-colors duration-300 text-gray-300 hover:text-white">Shipping Info</a></li>
              <li><a href="#" className="transition-colors duration-300 text-gray-300 hover:text-white">Returns</a></li>
              <li><a href="#" className="transition-colors duration-300 text-gray-300 hover:text-white">FAQ</a></li>
              <li><a href="#" className="transition-colors duration-300 text-gray-300 hover:text-white">Support</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-300">Contact Us</h4>
            <div className="space-y-3">
              <a href="mailto:akshatthakur823@gmail.com" className="flex items-center text-gray-400 hover:text-white">
                <Mail className="h-5 w-5 mr-2" />
                akshatthakur823@gmail.com
              </a>
              <a href="tel:+919569226193" className="flex items-center text-gray-400 hover:text-white">
                <Phone className="h-5 w-5 mr-2" />
                +91 9569226193
              </a>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                  mr_akshat_somvanshi_
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-12">
          <h4 className="text-2xl font-semibold text-center text-blue-300 mb-6">Meet Our Team</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center text-gray-300">
              <h5 className="font-bold text-xl text-blue-200">Akshat Singh</h5>
              <p className="text-lg font-semibold text-gray-400">Founder</p>
              <p className="mt-2">A visionary entrepreneur with a passion for improving lives through health solutions. Akshat founded HealthCart to bring wellness to every household.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://www.linkedin.com" target="_blank" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com" target="_blank" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="text-center text-gray-300">
              <h5 className="font-bold text-xl text-blue-200">Amey Rathore</h5>
              <p className="text-lg font-semibold text-gray-400">Managing Director</p>
              <p className="mt-2">Anmol brings over a decade of experience in the healthcare industry, leading HealthCart with innovation and a focus on customer health needs.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://www.linkedin.com" target="_blank" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com" target="_blank" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="text-center text-gray-300">
              <h5 className="font-bold text-xl text-blue-200">Adarsh Kumar</h5>
              <p className="text-lg font-semibold text-gray-400">Co-Founder</p>
              <p className="mt-2">With a strong background in business strategy, Adash co-founded HealthCart to empower individuals to lead healthier lives through quality wellness products.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://www.linkedin.com" target="_blank" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com" target="_blank" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 HealthCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
