import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Star, Plus, CheckCircle, Search } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  type: string;
  prescription_required: boolean;
}

// Expanded MEDICINES array with pain sprays, creams, and lotions
const MEDICINES = [
  // Pain Relief Medications
  { id: 1, name: "Paracetamol", description: "Pain reliever and fever reducer", price: 50, category: "Pain Relief", type: "OTC", prescription_required: false },
  { id: 2, name: "Ibuprofen", description: "NSAID for pain and inflammation", price: 75, category: "Pain Relief", type: "OTC", prescription_required: false },
  { id: 3, name: "Aceclofenac", description: "NSAID for pain relief", price: 80, category: "Pain Relief", type: "Prescription", prescription_required: true },
  { id: 4, name: "Naproxen", description: "NSAID for pain and inflammation", price: 130, category: "Pain Relief", type: "Prescription", prescription_required: true },

  // Pain Sprays and Creams
  { id: 5, name: "Volini Spray", description: "Fast relief spray for muscle pain", price: 150, category: "Pain Relief Sprays", type: "OTC", prescription_required: false },
  { id: 6, name: "Moov Spray", description: "Pain relief spray for back pain", price: 140, category: "Pain Relief Sprays", type: "OTC", prescription_required: false },
  { id: 7, name: "Relispray", description: "Herbal pain relief spray", price: 160, category: "Pain Relief Sprays", type: "OTC", prescription_required: false },
  { id: 8, name: "Icy Hot Pain Relieving Cream", description: "Cream for sore muscles and back pain", price: 200, category: "Pain Relief Creams", type: "OTC", prescription_required: false },
  { id: 9, name: "Bengay Cream", description: "Pain relieving cream for muscle and joint pain", price: 190, category: "Pain Relief Creams", type: "OTC", prescription_required: false },

  // Lotions
  { id: 10, name: "Calamine Lotion", description: "Skin-soothing lotion for itch relief", price: 70, category: "Lotions", type: "OTC", prescription_required: false },
  { id: 11, name: "Aloe Vera Gel", description: "Cooling gel for skin hydration", price: 60, category: "Lotions", type: "OTC", prescription_required: false },
  { id: 12, name: "Cetaphil Moisturizing Lotion", description: "Moisturizing lotion for sensitive skin", price: 250, category: "Lotions", type: "OTC", prescription_required: false },
  { id: 13, name: "Hydrocortisone Cream", description: "Anti-itch cream for skin inflammation", price: 90, category: "Lotions", type: "OTC", prescription_required: false },

  // Antibiotics
  { id: 37, name: "Amoxicillin", description: "Broad-spectrum antibiotic", price: 120, category: "Antibiotics", type: "Prescription", prescription_required: true },
  { id: 38, name: "Azithromycin", description: "Antibiotic for bacterial infections", price: 180, category: "Antibiotics", type: "Prescription", prescription_required: true },
  { id: 14, name: "Erythromycin", description: "Antibiotic for bacterial infections", price: 160, category: "Antibiotics", type: "Prescription", prescription_required: true },
  { id: 15, name: "Levofloxacin", description: "Antibiotic for bacterial infections", price: 180, category: "Antibiotics", type: "Prescription", prescription_required: true },
  { id: 16, name: "Linagliptin", description: "Diabetes medication", price: 220, category: "Diabetes", type: "Prescription", prescription_required: true },
  { id: 17, name: "Sitagliptin", description: "Diabetes medication", price: 240, category: "Diabetes", type: "Prescription", prescription_required: true },
  { id: 18, name: "Lisinopril", description: "ACE inhibitor for hypertension", price: 80, category: "Hypertension", type: "Prescription", prescription_required: true },
  { id: 19, name: "Candesartan", description: "Angiotensin II receptor blocker for hypertension", price: 180, category: "Hypertension", type: "Prescription", prescription_required: true },
  { id: 20, name: "Metoclopramide", description: "For nausea and vomiting", price: 90, category: "Gastrointestinal", type: "Prescription", prescription_required: true },
  { id: 21, name: "Loperamide", description: "For relief of diarrhea", price: 60, category: "Gastrointestinal", type: "OTC", prescription_required: false },
  { id: 22, name: "Fluticasone", description: "Inhaled corticosteroid for asthma", price: 250, category: "Respiratory", type: "Prescription", prescription_required: true },
  { id: 23, name: "Salbutamol", description: "Bronchodilator for asthma", price: 120, category: "Respiratory", type: "Prescription", prescription_required: true },
  { id: 24, name: "Salmeterol", description: "Bronchodilator for asthma", price: 200, category: "Respiratory", type: "Prescription", prescription_required: true },
  { id: 25, name: "Insulin Glargine", description: "Long-acting insulin for diabetes", price: 500, category: "Diabetes", type: "Prescription", prescription_required: true },
  { id: 26, name: "Domperidone", description: "For relief of nausea and vomiting", price: 70, category: "Gastrointestinal", type: "OTC", prescription_required: false },
  { id: 27, name: "Azathioprine", description: "Immunosuppressant for autoimmune conditions", price: 340, category: "Immunosuppressants", type: "Prescription", prescription_required: true },
  { id: 28, name: "Methotrexate", description: "Immunosuppressant for rheumatoid arthritis", price: 300, category: "Immunosuppressants", type: "Prescription", prescription_required: true },
  { id: 29, name: "Tenofovir", description: "Antiviral for HIV and hepatitis B", price: 800, category: "Antivirals", type: "Prescription", prescription_required: true },
  { id: 30, name: "Lamivudine", description: "Antiviral for HIV", price: 400, category: "Antivirals", type: "Prescription", prescription_required: true },
  { id: 31, name: "Abacavir", description: "Antiviral for HIV", price: 700, category: "Antivirals", type: "Prescription", prescription_required: true },
  { id: 32, name: "Lopinavir/Ritonavir", description: "Antiviral combination for HIV", price: 1000, category: "Antivirals", type: "Prescription", prescription_required: true },
  { id: 33, name: "Dolutegravir", description: "Antiviral for HIV", price: 750, category: "Antivirals", type: "Prescription", prescription_required: true },
  { id: 34, name: "Fesoterodine", description: "For overactive bladder", price: 300, category: "Urinary", type: "Prescription", prescription_required: true },
  { id: 35, name: "Finasteride", description: "For benign prostatic hyperplasia", price: 250, category: "Prostate Health", type: "Prescription", prescription_required: true },
  { id: 36, name: "Mesalamine", description: "Anti-inflammatory for bowel disease", price: 500, category: "Gastrointestinal", type: "Prescription", prescription_required: true },

  // Diabetes Medications
  { id: 39, name: "Metformin", description: "Diabetes medication", price: 150, category: "Diabetes", type: "Prescription", prescription_required: true },
  { id: 40, name: "Insulin Glargine", description: "Long-acting insulin for diabetes", price: 500, category: "Diabetes", type: "Prescription", prescription_required: true },

  // Respiratory Medications
  { id: 41, name: "Fluticasone", description: "Inhaled corticosteroid for asthma", price: 250, category: "Respiratory", type: "Prescription", prescription_required: true },
  { id: 42, name: "Salbutamol", description: "Bronchodilator for asthma", price: 120, category: "Respiratory", type: "Prescription", prescription_required: true },

  // Add additional medicines as needed in a similar structure
];

// Use MEDICINES array for product listing
const products = MEDICINES;

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOption, setSortOption] = useState<string>('default');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();
  const [addingItem, setAddingItem] = useState<number | null>(null);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const categories = ['all', ...new Set(products.map(p => p.category))];

  const handleAddToCart = async (product: Product) => {
    if (product.prescription_required) {
      setAlertMessage('This medicine requires a prescription. Please consult a doctor.');
      return;
    }
    
    setAddingItem(product.id);
    await addToCart(product);
    setAddingItem(null);
    setAlertMessage(`Rs${product.name} added to cart!`);
    setTimeout(() => setAlertMessage(null), 2000);
  };

  const filteredProducts = products
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .filter(p => 
      searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'priceAsc') return a.price - b.price;
    if (sortOption === 'priceDesc') return b.price - a.price;
    if (sortOption === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Available Medicines</h2>
        
        {alertMessage && (
          <div className={`mb-4 p-4 rounded ${
            alertMessage.includes('prescription') 
              ? 'bg-yellow-200 text-yellow-800' 
              : 'bg-red-200 text-red-800'
          } flex items-center space-x-2`}>
            <CheckCircle className="w-5 h-5" />
            <span>{alertMessage}</span>
          </div>
        )}

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search medicines..."
              className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
              } shadow-sm transition-colors`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Sorting Options */}
        <div className="flex justify-end mb-4">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-4 py-2 border rounded-lg shadow-sm"
          >
            <option value="default">Sort by</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-gray-800 font-semibold">Price: Rs {product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className={`mt-4 px-4 py-2 rounded-lg ${
                  addingItem === product.id
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
                disabled={addingItem === product.id}
              >
                {addingItem === product.id ? 'Adding...' : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}