import { useState } from "react";
import { Sparkles, Search, ArrowRight, ChevronDown } from "lucide-react";

const productCategories = {
  traditional: {
    name: "Traditional Indian",
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    accentColor: "bg-orange-500",
    products: [
      { name: "Achar Masala Seasoning", desc: "Tangy pickle spice blend" },
      { name: "Aloo Bhujiya Seasoning", desc: "Classic savory snack" },
      { name: "Chatpata Seasoning", desc: "Zesty street food flavor" },
      { name: "Hing Jeera Seasoning", desc: "Aromatic cumin blend" },
      { name: "Pani Puri Seasoning", desc: "Authentic chaat flavor" },
      { name: "Pudina Seasoning", desc: "Fresh mint fusion" },
    ]
  },
  cheese: {
    name: "Cheese Varieties",
    color: "from-yellow-500/20 to-amber-500/20",
    borderColor: "border-yellow-500/30",
    accentColor: "bg-yellow-500",
    products: [
      { name: "Cheese Seasoning", desc: "Rich creamy flavor" },
      { name: "Cheese Hubs Seasoning", desc: "Gourmet cheese blend" },
      { name: "Cheese Jalapeno Seasoning", desc: "Spicy cheese kick" },
      { name: "Cream & Onion Seasoning", desc: "Smooth & savory" },
    ]
  },
  spicy: {
    name: "Spicy & Tangy",
    color: "from-red-500/20 to-pink-500/20",
    borderColor: "border-red-500/30",
    accentColor: "bg-red-500",
    products: [
      { name: "Peri Peri Seasoning", desc: "Fiery African spice" },
      { name: "Green Chilli Seasoning", desc: "Fresh heat" },
      { name: "Lime Chilli Seasoning", desc: "Zesty & spicy" },
      { name: "Jalapeno Seasoning", desc: "Mexican heat" },
      { name: "Lime Pudina Seasoning", desc: "Refreshing tang" },
      { name: "Lime White Pepper Seasoning", desc: "Citrus kick" },
    ]
  },
  international: {
    name: "International Flavors",
    color: "from-blue-500/20 to-purple-500/20",
    borderColor: "border-blue-500/30",
    accentColor: "bg-blue-500",
    products: [
      { name: "Barbeque Seasoning", desc: "Smoky American style" },
      { name: "Mexican Seasoning", desc: "Bold Latin flavor" },
      { name: "Nacho Seasoning", desc: "Tex-Mex favorite" },
      { name: "Pizza Seasoning", desc: "Italian herbs" },
      { name: "Kimchi Seasoning", desc: "Korean fermented tang" },
    ]
  },
  asian: {
    name: "Asian Fusion",
    color: "from-green-500/20 to-teal-500/20",
    borderColor: "border-green-500/30",
    accentColor: "bg-green-500",
    products: [
      { name: "Manchurian Seasoning", desc: "Indo-Chinese fusion" },
      { name: "Schezwan Seasoning", desc: "Bold & spicy" },
      { name: "Schezwan Chutney Seasoning", desc: "Sauce-inspired blend" },
      { name: "Sony Manchurian Seasoning", desc: "Premium variant" },
      { name: "Soya Seasoning", desc: "Umami rich" },
      { name: "Maggi Seasoning", desc: "Instant noodle flavor" },
    ]
  },
  tomato: {
    name: "Tomato Based",
    color: "from-rose-500/20 to-red-500/20",
    borderColor: "border-rose-500/30",
    accentColor: "bg-rose-500",
    products: [
      { name: "Tomato Seasoning", desc: "Classic tomato" },
      { name: "Tangy Tomato Seasoning", desc: "Zesty twist" },
      { name: "Chilli Tomato Seasoning", desc: "Spicy tomato" },
      { name: "Sony Tomato Seasoning", desc: "Premium blend" },
      { name: "Tomato Ketchup", desc: "Condiment style" },
      { name: "Tomato Spanish", desc: "Mediterranean touch" },
    ]
  },
  specialty: {
    name: "Specialty Blends",
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/30",
    accentColor: "bg-violet-500",
    products: [
      { name: "Butter Salt Seasoning", desc: "Rich & buttery" },
      { name: "Caramel Premix Seasoning", desc: "Sweet & savory" },
      { name: "Kurkure Seasoning", desc: "Crunchy snack flavor" },
    ]
  },
  jain: {
    name: "Jain Varieties",
    color: "from-emerald-500/20 to-green-500/20",
    borderColor: "border-emerald-500/30",
    accentColor: "bg-emerald-500",
    products: [
      { name: "Jain Peri Peri", desc: "No onion/garlic" },
      { name: "Jain Barbeque", desc: "Pure vegetarian" },
      { name: "Jain Lime Chilli", desc: "Strict Jain recipe" },
      { name: "Jain Maggi", desc: "Jain-friendly blend" },
    ]
  }
};

export default function Products2() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = Object.entries(productCategories).filter(([key, category]) => {
    if (selectedCategory && key !== selectedCategory) return false;
    if (!searchTerm) return true;
    return category.products.some(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const totalProducts = Object.values(productCategories).reduce(
    (sum, cat) => sum + cat.products.length, 0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>{totalProducts} Premium Seasonings</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
              Our Product Range
            </h1>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Premium seasonings crafted for food manufacturers, processors, and brands.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search seasonings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 bg-white focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all text-slate-900 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === null
                  ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Categories
            </button>
            {Object.entries(productCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === key
                    ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category.name} <span className="opacity-70">({category.products.length})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {filteredCategories.map(([key, category]) => (
              <div key={key} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`h-1.5 w-16 rounded-full ${category.accentColor}`} />
                  <h2 className="text-3xl font-bold text-slate-900">
                    {category.name}
                  </h2>
                  <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {category.products.length} items
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {category.products
                    .filter(p => 
                      !searchTerm || p.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((product, index) => (
                      <div
                        key={product.name}
                        className={`group relative bg-gradient-to-br ${category.color} border-2 ${category.borderColor} rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${category.accentColor} opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all`} />
                        <div className="relative z-10">
                          <h3 className="font-bold text-slate-900 mb-2 pr-6 text-lg">
                            {product.name}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {product.desc}
                          </p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Blends CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Custom Blends?
            </h2>
            <p className="text-orange-50 text-lg mb-8 leading-relaxed">
              We create custom seasoning formulations tailored to your brand's unique requirements.
            </p>
            <button className="group inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 hover:shadow-xl transition-all text-lg">
              Get in Touch 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}