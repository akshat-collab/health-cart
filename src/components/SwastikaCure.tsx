import { useState } from 'react';
import { X, Brain, Activity, Heart } from 'lucide-react';

interface SwastikaCure {
  onClose: () => void;
}

export default function SwastikaCure({ onClose }: SwastikaCure) {
  const [symptoms, setSymptoms] = useState('');
  const [vitalSigns, setVitalSigns] = useState({
    temperature: '',
    bloodPressure: '',
    heartRate: '',
    oxygenLevel: ''
  });
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis(
        `Based on the provided information:\n\n` +
        `1. Primary Assessment:\n` +
        `   - Symptoms indicate possible ${symptoms.includes('head') ? 'tension headache' : 'minor condition'}\n` +
        `   - Vital signs are within ${parseFloat(vitalSigns.temperature) > 37.5 ? 'elevated' : 'normal'} range\n\n` +
        `2. Recommendations:\n` +
        `   - Rest and hydration\n` +
        `   - Over-the-counter pain relief\n` +
        `   - Monitor symptoms for 24-48 hours\n\n` +
        `3. Suggested Products:\n` +
        `   - Pain relief medication\n` +
        `   - Vitamin C supplements\n` +
        `   - Immune support complex\n\n` +
        `Please consult a healthcare professional for a proper medical diagnosis.`
      );
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl max-w-3xl w-full mx-4 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Brain className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              SwastikaCure
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Describe your symptoms
              </label>
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Example: I have a headache and feel tired..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Temperature (°C)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={vitalSigns.temperature}
                  onChange={(e) => setVitalSigns({...vitalSigns, temperature: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="37.0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blood Pressure (mmHg)
                </label>
                <input
                  type="text"
                  value={vitalSigns.bloodPressure}
                  onChange={(e) => setVitalSigns({...vitalSigns, bloodPressure: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="120/80"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Heart Rate (bpm)
                </label>
                <input
                  type="number"
                  value={vitalSigns.heartRate}
                  onChange={(e) => setVitalSigns({...vitalSigns, heartRate: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="75"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Oxygen Level (%)
                </label>
                <input
                  type="number"
                  value={vitalSigns.oxygenLevel}
                  onChange={(e) => setVitalSigns({...vitalSigns, oxygenLevel: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="98"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white py-3 rounded-lg font-semibold transition-colors`}
            >
              {loading ? 'Analyzing...' : 'Analyze Health Data'}
            </button>
          </form>

          {analysis && (
            <div className="mt-6 p-6 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Activity className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-blue-900">Analysis Result:</h3>
              </div>
              <pre className="text-blue-800 whitespace-pre-wrap font-sans">{analysis}</pre>
            </div>
          )}

          <div className="mt-6 p-4 bg-red-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-red-500" />
              <p className="text-red-800 text-sm font-medium">
                Important: This is not a substitute for professional medical advice. 
                If you're experiencing severe symptoms, please seek immediate medical attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
