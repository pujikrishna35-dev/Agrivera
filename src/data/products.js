export const PRODUCT_CATEGORIES = [
  {
    id: 'seeds',
    name: 'Seeds',
    description: 'High quality seeds for better germination and higher yields.',
    icon: 'Sprout',
    image: '/images/category_seeds.png',
    color: '#10B981'
  },
  {
    id: 'nutrition',
    name: 'Crop Nutrition',
    description: 'Nutrients that enhance plant health and improve productivity.',
    icon: 'Zap',
    image: '/images/category_nutrition.png',
    color: '#0F4C25'
  },
  {
    id: 'protection',
    name: 'Crop Protection',
    description: 'Effective solutions for insects, diseases and weed management.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80',
    color: '#0284C7'
  },
  {
    id: 'bio',
    name: 'Bio Solutions',
    description: 'Eco-friendly bio products for sustainable agriculture.',
    icon: 'Leaf',
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=600&q=80',
    color: '#059669'
  },
  {
    id: 'pgr',
    name: 'Plant Growth Regulators',
    description: 'Improve growth, quality and crop performance naturally.',
    icon: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80',
    color: '#8B5CF6'
  },
  {
    id: 'micronutrients',
    name: 'Micronutrients',
    description: 'Essential micro nutrients for balanced crop nutrition.',
    icon: 'SunMedium',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=600&q=80',
    color: '#D97706'
  }
];

export const PRODUCTS_DATA = [
  {
    id: 'agri-gold-seed-1',
    categoryId: 'seeds',
    name: 'Agrivera Super Hybrid Paddy Seeds',
    tagline: 'High Germination & Strong Pest Tolerance',
    description: 'Premium long-grain hybrid paddy seeds bred for disease resistance and 25% higher yield.',
    price: 850,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Best Seller',
    image: '/images/category_seeds.png',
    composition: 'Hybrid Rice Seeds Grade A1',
    dosage: '5 kg per Acre',
    targetCrops: ['Paddy / Rice'],
    features: ['Uniform panicle grain filling', 'Drought tolerant', 'High milling recovery rate']
  },
  {
    id: 'agri-nutri-plus',
    categoryId: 'nutrition',
    name: 'Agrivera Bio-Nutri Booster NPK',
    tagline: 'Complete Soil Health & Growth Catalyst',
    description: 'Balanced bio-available NPK compound infused with humic acid and seaweed extract.',
    price: 1200,
    rating: 4.8,
    reviewsCount: 98,
    badge: 'Popular',
    image: '/images/category_nutrition.png',
    composition: 'N:P:K (19:19:19) + Micro elements',
    dosage: '2-3 kg per Acre via fertigation / spray',
    targetCrops: ['Cotton', 'Maize', 'Vegetables', 'Groundnut'],
    features: ['Rapid nutrient uptake', 'Strengthens root architecture', 'Reduces fertilizer runoff']
  },
  {
    id: 'agri-shield-protect',
    categoryId: 'protection',
    name: 'Agrivera Shield Insecticide Ultra',
    tagline: 'Systemic Defense Against Stem Borer & Thrips',
    description: 'Advanced broad-spectrum systemic insecticide protecting cash crops from sap-sucking insects.',
    price: 950,
    rating: 4.9,
    reviewsCount: 185,
    badge: 'Eco Safe',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80',
    composition: 'Thiamethoxam 25% WG',
    dosage: '100g per 200L Water per Acre',
    targetCrops: ['Paddy', 'Chilli', 'Cotton', 'Sugarcane'],
    features: ['Quick knockdown effect', 'Long-lasting protection', 'Safe for natural predators']
  },
  {
    id: 'agri-bio-fertilizer',
    categoryId: 'bio',
    name: 'Agrivera GreenBio Rhizobium Granules',
    tagline: '100% Organic Soil Nitrogen Fixer',
    description: 'Natural bio-fertilizer enriched with mycorrhiza and beneficial bacteria for soil rejuvenation.',
    price: 650,
    rating: 4.7,
    reviewsCount: 76,
    badge: 'Organic',
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=600&q=80',
    composition: 'Rhizobium + Azotobacter bio-culture',
    dosage: '4 kg per Acre',
    targetCrops: ['Groundnut', 'Pulses', 'Soybean', 'Vegetables'],
    features: ['Fixes atmospheric nitrogen', 'Enhances soil organic carbon', 'Improves soil aeration']
  },
  {
    id: 'agri-growth-regulator',
    categoryId: 'pgr',
    name: 'Agrivera MaxYield Growth Stimulant',
    tagline: 'Enhances Flowering & Prevents Fruit Drop',
    description: 'Bio-stimulant designed to trigger vigor, maximize flower setting, and improve crop size.',
    price: 1100,
    rating: 4.9,
    reviewsCount: 210,
    badge: 'High Yield',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80',
    composition: 'Alpha Naphthyl Acetic Acid + Amino Acids',
    dosage: '250 ml per 150L Water',
    targetCrops: ['Tomato', 'Chilli', 'Cotton', 'Grapes', 'Vegetables'],
    features: ['Prevents premature flower drop', 'Promotes fruit uniform size', 'Stress recovery']
  },
  {
    id: 'agri-micro-zinc',
    categoryId: 'micronutrients',
    name: 'Agrivera Multi-Micronutrient Chelated Zinc',
    tagline: 'Zinc, Boron & Iron Deficiency Corrector',
    description: 'Water-soluble chelated micronutrient complex that eliminates yellowing and leaf curl.',
    price: 780,
    rating: 4.8,
    reviewsCount: 112,
    badge: 'Essential',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=600&q=80',
    composition: 'Zinc 12% EDTA + Boron + Iron',
    dosage: '1g per Liter of water',
    targetCrops: ['Maize', 'Paddy', 'Sugarcane', 'Citrus'],
    features: ['100% chelated for instant absorption', 'Eliminates chlorosis', 'Boosts chlorophyll index']
  }
];
