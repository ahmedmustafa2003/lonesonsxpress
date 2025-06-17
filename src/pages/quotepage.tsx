import { useState } from "react";
import { ThemeProvider } from "../contexts/themecontext";
import Navbar from "../components/navbar";
import {
  Truck,
  Ship,
  Plane,
  Package,
  MapPin,
  Calendar,
  Check,
  Plus,
  AlertTriangle,
  Shield,
  Calculator,
  DollarSign,
} from "lucide-react";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const QuotePage = () => {
  const [activeTab, setActiveTab] = useState("boxes");
  const [units, setUnits] = useState([
    { id: 1, type: "boxes", quantity: "", dimensions: "", weight: "" },
  ]);
  const navigate = useNavigate();
  const addUnit = () => {
    setUnits([
      ...units,
      {
        id: units.length + 1,
        type: "boxes",
        quantity: "",
        dimensions: "",
        weight: "",
      },
    ]);
  };

  const handleGetQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    // Here you would typically submit the form data to your backend
    // Then navigate to the success page
    navigate("/successquote");
  };

  const services = [
    {
      icon: <Truck className="h-6 w-6" />,
      name: "Ground Shipping",
      color: "blue",
    },
    {
      icon: <Ship className="h-6 w-6" />,
      name: "Ocean Freight",
      color: "green",
    },
    { icon: <Plane className="h-6 w-6" />, name: "Air Cargo", color: "purple" },
    {
      icon: <Package className="h-6 w-6" />,
      name: "Express Delivery",
      color: "red",
    },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Navbar />

        {/* Hero Section */}
        <div className="pt-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"></div>
        <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-r from-gray-600 to-gray-950 text-gray-300 dark:from-red-600 dark:to-red-950 dark:text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-950 dark:from-red-600 dark:to-red-950 text-gray-300 "></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6"
              >
                <Calculator className="h-5 w-5 text-red-600 dark:text-red-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Professional Logistics Solutions
                </span>
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-600 to-gray-950 text-red-600 dark:from-red-600 dark:to-red-950 dark:text-white bg-clip-text"
              >
                <span className="text-red-600 dark:text-gray-800">Get</span>
                <span className="text-gray-500 dark:text-gray-300">
                  {" "}
                  Quote{" "}
                </span>
              </motion.h1>
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-3xl font-semibold mb-6"
              >
                Express Logistics | Global Focus
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl max-w-2xl mx-auto"
              >
                Taking you further, faster with precision and reliability
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center ${
                    service.color === "blue"
                      ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700"
                      : service.color === "green"
                        ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700"
                        : service.color === "purple"
                          ? "bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700"
                          : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700"
                  }`}
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${
                      service.color === "blue"
                        ? "bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400"
                        : service.color === "green"
                          ? "bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-400"
                          : service.color === "purple"
                            ? "bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-400"
                            : "bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-400"
                    }`}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {service.name}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-12 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleUp}
              className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
            >
              {/* Form Header */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 p-8 text-white">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center space-x-3 mb-4"
                  >
                    <DollarSign className="h-8 w-8" />
                    <h3 className="text-2xl font-bold">
                      Get Your Instant Quote
                    </h3>
                  </motion.div>
                  <motion.p
                    variants={itemVariants}
                    className="text-red-100 dark:text-red-200"
                  >
                    Fill out the details below for accurate pricing
                  </motion.p>
                </motion.div>
              </div>

              <div className="p-8 md:p-12 space-y-12">
                {/* Section 1: What are you shipping? */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                  className="space-y-6"
                >
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center space-x-3 mb-6"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full">
                      <span className="text-red-600 dark:text-red-400 font-bold">
                        1
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                      What are you shipping?
                    </h4>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="bg-yellow-50 dark:bg-gray-600 rounded-xl p-6 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                        <Package className="h-5 w-5 text-red-600 dark:text-red-400" />
                        <span>PALLETS / BOXES / CRATES</span>
                        <span className="text-blue-600 dark:text-blue-400 font-normal">
                          CONTAINERS
                        </span>
                      </h5>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-8">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveTab("boxes")}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                          activeTab === "boxes"
                            ? "bg-red-600 text-white shadow-lg transform scale-105"
                            : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 shadow-md"
                        }`}
                      >
                        Calculate by boxes/pallets
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveTab("total")}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                          activeTab === "total"
                            ? "bg-red-600 text-white shadow-lg transform scale-105"
                            : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 shadow-md"
                        }`}
                      >
                        Calculate by total shipment
                      </motion.button>
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-100 dark:bg-gray-800">
                            <tr>
                              <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">
                                Package Type
                              </th>
                              <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">
                                # of Units
                              </th>
                              <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">
                                Dimensions (L×W×H)
                              </th>
                              <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">
                                Weight per Unit
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {units.map((unit, index) => (
                              <motion.tr
                                key={unit.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                              >
                                <td className="py-4 px-6">
                                  <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 dark:text-white">
                                    <option>Boxes/Crates</option>
                                    <option>Pallets</option>
                                    <option>Drums</option>
                                    <option>Bags</option>
                                  </select>
                                </td>
                                <td className="py-4 px-6">
                                  <input
                                    type="number"
                                    placeholder="0"
                                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                                  />
                                </td>
                                <td className="py-4 px-6">
                                  <input
                                    type="text"
                                    placeholder="100 × 50 × 30 cm"
                                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                                  />
                                </td>
                                <td className="py-4 px-6">
                                  <div className="flex items-center space-x-2">
                                    <input
                                      type="number"
                                      placeholder="0"
                                      className="flex-1 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                                    />
                                    <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                      KG
                                    </span>
                                  </div>
                                </td>
                              </motion.tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={addUnit}
                        className="flex items-center space-x-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                        <span>Add another unit</span>
                      </motion.button>
                      <div className="bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-lg">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          Shipment total:{" "}
                          <span className="text-red-600 dark:text-red-400">
                            {units.length} Unit(s), 0 CBM, 0 KG
                          </span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Section 2: Pickup Location */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                  className="space-y-6"
                >
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center space-x-3 mb-6"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">
                        2
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Pickup goods from
                    </h4>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200/50 dark:border-blue-700/50 transition-colors duration-300"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Origin Location Type
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                          <select className="w-full pl-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white">
                            <option>Port / Airport</option>
                            <option>Warehouse</option>
                            <option>Residential</option>
                            <option>Commercial</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Origin Country
                        </label>
                        <select className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white">
                          <option>Hong Kong, China</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Germany</option>
                          <option>Japan</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                          City / Port Code
                        </label>
                        <input
                          type="text"
                          placeholder="Enter city or port code"
                          className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Goods Ready Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                          <input
                            type="date"
                            className="w-full pl-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Include origin charges (Recommended)
                        </span>
                      </label>
                      <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                        Don't know the date yet?
                      </button>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Section 3: Delivery Location */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                  className="space-y-6"
                >
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center space-x-3 mb-6"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <span className="text-green-600 dark:text-green-400 font-bold">
                        3
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Deliver goods to
                    </h4>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200/50 dark:border-green-700/50 transition-colors duration-300"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Destination Type
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                          <select className="w-full pl-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-900 dark:text-white">
                            <option>Port / Airport</option>
                            <option>Warehouse</option>
                            <option>Residential</option>
                            <option>Commercial</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Destination Country
                        </label>
                        <select className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-900 dark:text-white">
                          <option>Japan</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Germany</option>
                          <option>Australia</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                          City / Port Code
                        </label>
                        <input
                          type="text"
                          placeholder="Enter city or port code"
                          className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Include destination charges (Recommended)
                      </span>
                    </label>
                  </motion.div>
                </motion.div>

                {/* Section 4: Customs & Services */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                  className="space-y-6"
                >
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center space-x-3 mb-6"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                      <span className="text-purple-600 dark:text-purple-400 font-bold">
                        4
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Customs & Additional Services
                    </h4>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-purple-200/50 dark:border-purple-700/50 transition-colors duration-300"
                  >
                    <p className="text-gray-700 dark:text-gray-300 mb-6 flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <span>
                        All international shipments require customs clearance
                      </span>
                    </p>

                    <div className="space-y-8">
                      {/* Customs Clearance */}
                      <div>
                        <h5 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white flex items-center space-x-2">
                          <Package className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                          <span>Customs Clearance</span>
                        </h5>
                        <div className="space-y-3">
                          <label className="flex items-center space-x-3 cursor-pointer p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                            />
                            <span className="text-gray-700 dark:text-gray-300">
                              Export customs clearance required
                            </span>
                          </label>
                          <label className="flex items-center space-x-3 cursor-pointer p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                            />
                            <span className="text-gray-700 dark:text-gray-300">
                              Import customs clearance required for
                            </span>
                            <input
                              type="text"
                              placeholder="commodities"
                              className="ml-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-3 py-1 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white"
                            />
                          </label>
                        </div>
                      </div>

                      {/* Important Notice */}
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-l-4 border-yellow-400 dark:border-yellow-600 p-6 rounded-r-lg">
                        <div className="flex items-start space-x-3">
                          <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">
                              Important Notice
                            </p>
                            <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-2">
                              Duties and taxes will not be included in the
                              quote. These are imposed by the government and we
                              will contact you to collect payment.
                            </p>
                            <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                              Personal goods and certain hazardous materials
                              cannot be shipped.
                              <button className="text-red-600 dark:text-red-400 underline ml-1 hover:text-red-700 dark:hover:text-red-300">
                                View full restrictions
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Additional Details */}
                      <div>
                        <h5 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
                          Additional Details
                        </h5>
                        <div className="space-y-3">
                          <label className="flex items-start space-x-3 cursor-pointer p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 mt-0.5"
                            />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                              I declare that my shipment does not contain any
                              hazardous materials or dangerous goods.*
                            </span>
                          </label>
                          <label className="flex items-center space-x-3 cursor-pointer p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                            />
                            <span className="text-gray-700 dark:text-gray-300">
                              This is a personal shipment
                            </span>
                          </label>
                          <label className="flex items-center space-x-3 cursor-pointer p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                            />
                            <span className="text-gray-700 dark:text-gray-300">
                              I am a known shipper
                            </span>
                          </label>
                        </div>
                      </div>

                      {/* Insurance */}
                      <div>
                        <h5 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white flex items-center space-x-2">
                          <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          <span>Insurance Coverage</span>
                        </h5>
                        <div className="space-y-4">
                          <label className="flex items-center space-x-3 cursor-pointer p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <div className="flex-1">
                              <span className="text-gray-700 dark:text-gray-300 font-medium">
                                Add insurance coverage
                              </span>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                Protects your goods value during transit
                              </p>
                            </div>
                          </label>
                          <div className="ml-7 flex items-center space-x-3">
                            <label className="text-sm text-gray-700 dark:text-gray-300">
                              Goods value (USD):
                            </label>
                            <input
                              type="number"
                              placeholder="0.00"
                              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 w-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                            />
                          </div>
                        </div>

                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                          <p className="text-sm text-blue-800 dark:text-blue-200 font-medium mb-2">
                            Insurance Restrictions
                          </p>
                          <p className="text-xs text-blue-700 dark:text-blue-300">
                            Insurance coverage is not available for shipments
                            to: Australia, Cambodia, Germany, India, Indonesia,
                            Pakistan, Taiwan, Thailand, Turkey, UAE, UK,
                            Vietnam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Submit Section */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleUp}
                  className="bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 rounded-2xl p-8 text-white"
                >
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-center md:text-left">
                      <div className="text-lg font-semibold mb-2">
                        Shipment Summary
                      </div>
                      <div className="text-red-100 dark:text-red-200">
                        Total:{" "}
                        <span className="font-bold text-white">
                          {units.length} Unit(s), 0 CBM, 0 KG
                        </span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleGetQuote}
                      className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-12 rounded-xl transition-all duration-200 transform hover:shadow-xl flex items-center space-x-2"
                    >
                      <Calculator className="h-5 w-5" />
                      <span>GET INSTANT QUOTE</span>
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default QuotePage;
