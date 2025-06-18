import { useState } from "react";
import { ThemeProvider } from "../contexts/themecontext";
import Navbar from "../components/navbar";
import {
  Truck,
  Ship,
  Plane,
  Package,
  ArrowRight,
  Calculator,
} from "lucide-react";
import Footer from "../components/footer";
import { motion, AnimatePresence } from "framer-motion";
import Quoteinfo from "../components/quoteinfo";

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

const formTransition = {
  initial: { x: 300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 0 },
  transition: { duration: 0.5 },
};

const QuotePage = () => {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

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

  const handleUserInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleUserInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

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

        {/* Form Section */}
        <section className="py-12 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="user-info-form"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={formTransition}
                  className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden p-8 md:p-12"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Let's Get Started
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Please provide your basic information to continue
                    </p>
                  </div>

                  <form onSubmit={handleUserInfoSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={userInfo.name}
                        onChange={handleUserInfoChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={userInfo.phone}
                        onChange={handleUserInfoChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleUserInfoChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="pt-4">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                      >
                        <span>Continue</span>
                        <ArrowRight className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="quote-info"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={formTransition}
                >
                  <Quoteinfo services={services} userInfo={userInfo} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default QuotePage;
