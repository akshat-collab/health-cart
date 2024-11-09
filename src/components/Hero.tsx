import { Bot, UserPlus } from 'lucide-react';

interface HeroProps {
  onSymptomCheck: () => void;
  onDoctorConsult: () => void;
}

export default function Hero({ onSymptomCheck, onDoctorConsult }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Health, Our Priority
            </h1>
            <p className="text-xl mb-8">
              Get personalized health recommendations and connect with healthcare professionals
            </p>
            <div className="space-x-4">
              <button
                onClick={onSymptomCheck}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                <Bot className="h-5 w-5 mr-2" />
                SwastikaCure
              </button>
              <button
                onClick={onDoctorConsult}
                className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
              >
                <UserPlus className="h-5 w-5 mr-2" />
                Consult Doctor
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800"
              alt="Healthcare professionals"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}