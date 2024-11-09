import { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Heart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import AuthModal from './AuthModal'; // Import AuthModal
import SwastikaCure from './SwastikaCure'; // Import SwastikaCure

interface NavbarProps {
  onCartClick: () => void;
  onLoginClick: () => void; // Prop for login click handler
  onSwastikaCureClick: () => void; // New prop for SwastikaCure modal trigger
}

export default function Navbar({ onCartClick, onLoginClick, onSwastikaCureClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems } = useCart();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Simulating user login status
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Handle search functionality
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const dummyResults = ['Product 1', 'Product 2', 'Product 3'].filter(product =>
        product.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(dummyResults);
    }
  };

  const handleLoginLogout = () => {
    if (!isUserLoggedIn) {
      onLoginClick(); // Open the AuthModal when logging in
    }
    setIsUserLoggedIn(!isUserLoggedIn); // Toggling login state
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-800 to-blue-600 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-white">HealthCart</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <form onSubmit={handleSearch} className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-96 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="absolute right-3 top-2.5">
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </form>

              <button className="text-gray-200 hover:text-white" onClick={onSwastikaCureClick}>
                <Heart className="h-6 w-6" />
                <span>Swastika Cure</span> {/* Add a label for Swastika Cure */}
              </button>

              <button className="text-gray-200 hover:text-white" onClick={handleLoginLogout}>
                <User className="h-6 w-6" />
              </button>

              <button onClick={onCartClick} className="relative text-gray-200 hover:text-white">
                <ShoppingCart className="h-6 w-6" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {searchResults.length > 0 && (
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md w-96 mt-2">
              <ul className="space-y-2 p-4">
                {searchResults.map((result, index) => (
                  <li key={index} className="text-gray-600 hover:text-blue-600 cursor-pointer">
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2">
            <div className="px-4 py-3 space-y-2">
              <form onSubmit={handleSearch} className="relative mb-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="absolute right-3 top-2.5">
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </form>

              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 w-full py-2">
                <Heart className="h-6 w-6" />
                <span>Wishlist</span>
              </button>

              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 w-full py-2" onClick={handleLoginLogout}>
                <User className="h-6 w-6" />
                <span>{isUserLoggedIn ? 'Log Out' : 'Log In'}</span>
              </button>

              <button onClick={onCartClick} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 w-full py-2">
                <ShoppingCart className="h-6 w-6" />
                <span>Cart ({cartItems.length})</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {isAuthModalOpen && <AuthModal onClose={() => setIsAuthModalOpen(false)} onSuccess={() => console.log('Logged in!')} />}
    </>
  );
}
