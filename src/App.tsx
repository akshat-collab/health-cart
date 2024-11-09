import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import AISymptomChecker from './components/AISymptomChecker';
import SwastikaCure from './components/SwastikaCure'; // Import SwastikaCure
import DoctorConsultation from './components/DoctorConsultation';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import AuthModal from './components/AuthModal';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSymptomCheckerOpen, setIsSymptomCheckerOpen] = useState(false);
  const [isSwastikaCureOpen, setSwastikaCureOpen] = useState(false); // State for SwastikaCure
  const [isDoctorConsultationOpen, setIsDoctorConsultationOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false); // State for AuthModal

  const handleAuthSuccess = () => {
    console.log("User successfully authenticated");
    // Optionally, you could handle any state updates or user-specific data here
  };

  const handleSymptomCheckerClick = () => {
    setIsSymptomCheckerOpen(true);
  };

  const handleSwastikaCureClick = () => {
    setSwastikaCureOpen(true); // Open SwastikaCure when this button is clicked
  };

  const handleDoctorConsultationClick = () => {
    setIsDoctorConsultationOpen(true);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar onCartClick={() => setIsCartOpen(true)} onLoginClick={() => setIsAuthModalOpen(true)} />
        <Hero 
          onSymptomCheck={handleSymptomCheckerClick}
          onSwastikaCure={handleSwastikaCureClick} // Pass handleSwastikaCureClick to Hero
          onDoctorConsult={handleDoctorConsultationClick}
        />

        <ProductGrid />

        {isSymptomCheckerOpen && (
          <AISymptomChecker onClose={() => setIsSymptomCheckerOpen(false)} />
        )}

        {isSwastikaCureOpen && (
          <SwastikaCure onClose={() => setSwastikaCureOpen(false)} />
        )}

        {isDoctorConsultationOpen && (
          <DoctorConsultation onClose={() => setIsDoctorConsultationOpen(false)} />
        )}

        {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}

        {isAuthModalOpen && (
          <AuthModal onClose={() => setIsAuthModalOpen(false)} onSuccess={handleAuthSuccess} />
        )}

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
