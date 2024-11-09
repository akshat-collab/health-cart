import { useState, useEffect } from 'react';
import { Bot } from 'lucide-react';

export default function WelcomeAvatar() {
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState('👋 Welcome to HealthCart! How can I help you today?');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // Hide after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-end">
      <div className="bg-white rounded-lg shadow-lg p-4 mb-2 mr-2 max-w-xs animate-fade-in">
        <p className="text-gray-800">{message}</p>
      </div>
      <div className="bg-blue-600 rounded-full p-3 shadow-lg">
        <Bot className="h-6 w-6 text-white" />
      </div>
    </div>
  );
}