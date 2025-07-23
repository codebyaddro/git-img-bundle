import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from 'react-icons/fa';
import { SiAmericanexpress } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-indigo-600 text-white p-2 rounded mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              DigitalMarket
            </h3>
            <p className="text-gray-400 mb-4">
              Your premier destination for high-quality digital products, e-books, and creative assets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns & Refunds</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new products and special offers!
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 text-white"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 pt-6 mb-6">
          <h5 className="text-sm font-medium text-gray-400 mb-3">We accept</h5>
          <div className="flex flex-wrap gap-3">
            <div className="bg-gray-800 p-2 rounded-md">
              <FaCcVisa className="h-6 w-6 text-blue-500" />
            </div>
            <div className="bg-gray-800 p-2 rounded-md">
              <FaCcMastercard className="h-6 w-6 text-red-500" />
            </div>
            <div className="bg-gray-800 p-2 rounded-md">
              <SiAmericanexpress className="h-6 w-6 text-blue-400" />
            </div>
            <div className="bg-gray-800 p-2 rounded-md">
              <FaCcPaypal className="h-6 w-6 text-blue-300" />
            </div>
            <div className="bg-gray-800 p-2 rounded-md">
              <FaCcApplePay className="h-6 w-6 text-gray-200" />
            </div>
            <div className="bg-gray-800 p-2 rounded-md flex items-center justify-center">
              <span className="text-xs font-bold text-gray-200">CRYPTO</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} DigitalMarket. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;