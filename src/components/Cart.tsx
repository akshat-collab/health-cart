import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

interface CartProps {
  onClose: () => void;
}

export default function Cart({ onClose }: CartProps) {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = async () => {
    setIsProcessing(true);
    setPaymentError(null);
    
    try {
      // For demo purposes, simulate a successful payment
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In production, you would integrate with a real payment gateway here
      alert("This is a demo - in production, this would process a real payment");
      onClose();
    } catch (error) {
      console.error("Payment failed:", error);
      setPaymentError("Payment processing failed. Please try again or contact support.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              Your cart is empty
            </p>
          ) : (
            <>
              <div className="space-y-4 mb-6 max-h-[60vh] overflow-y-auto">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">₹{item.price}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-500 hover:text-gray-700"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-bold">₹{total.toFixed(2)}</span>
                </div>
                {paymentError && (
                  <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                    {paymentError}
                  </div>
                )}
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className={`w-full ${
                    isProcessing
                      ? 'bg-gray-400'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white py-3 rounded-lg font-semibold transition-colors`}
                >
                  {isProcessing ? 'Processing...' : 'Checkout'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}