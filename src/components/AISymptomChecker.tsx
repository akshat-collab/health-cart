import { useState } from 'react';
import { X } from 'lucide-react';

interface AISymptomCheckerProps {
  onClose: () => void;
}

interface Symptom {
  name: string;
  severity: number; // severity rating from 1 to 5
}

export default function AISymptomChecker({ onClose }: AISymptomCheckerProps) {
  const [symptoms, setSymptoms] = useState<Symptom[]>([
    { name: 'Headache', severity: 0 },
    { name: 'Fever', severity: 0 },
    { name: 'Cough', severity: 0 },
    { name: 'Fatigue', severity: 0 },
    { name: 'Nausea', severity: 0 },
  ]);
  const [result, setResult] = useState<string | null>(null);

  const handleSeverityChange = (index: number, value: number) => {
    const updatedSymptoms = [...symptoms];
    updatedSymptoms[index].severity = value;
    setSymptoms(updatedSymptoms);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate AI analysis
    setTimeout(() => {
      const severitySum = symptoms.reduce((acc, symptom) => acc + symptom.severity, 0);
      const averageSeverity = severitySum / symptoms.length;

      let diagnosis = '';
      if (averageSeverity <= 2) {
        diagnosis = 'Mild condition, possibly allergies or a common cold.';
      } else if (averageSeverity <= 4) {
        diagnosis = 'Moderate condition, could be the flu or another viral infection.';
      } else {
        diagnosis = 'Severe condition, may require immediate medical attention. Please consult a healthcare provider.';
      }

      const recommendations = [
        'Rest and hydrate well.',
        'Use over-the-counter pain relievers like Ibuprofen or Paracetamol.',
        'If symptoms worsen or persist for more than a few days, consult a healthcare professional.',
      ];

      setResult(
        `${diagnosis} Recommended actions: ${recommendations.join(' ')}`
      );
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            AI Symptom Checker
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {symptoms.map((symptom, index) => (
                <div key={symptom.name} className="flex items-center justify-between">
                  <label
                    htmlFor={symptom.name}
                    className="text-sm font-medium text-gray-700"
                  >
                    {symptom.name}
                  </label>
                  <select
                    id={symptom.name}
                    value={symptom.severity}
                    onChange={(e) => handleSeverityChange(index, parseInt(e.target.value))}
                    className="w-24 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={0}>None</option>
                    <option value={1}>Mild</option>
                    <option value={2}>Moderate</option>
                    <option value={3}>Severe</option>
                    <option value={4}>Very Severe</option>
                  </select>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-6"
            >
              Analyze Symptoms
            </button>
          </form>

          {result && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Analysis Result:</h3>
              <p className="text-blue-800">{result}</p>
            </div>
          )}

          <p className="mt-6 text-sm text-gray-500 text-center">
            Note: This tool provides symptom analysis and is not a substitute for professional medical advice.
            If you're experiencing severe symptoms or have concerns, please seek immediate medical attention.
          </p>
        </div>
      </div>
    </div>
  );
}
