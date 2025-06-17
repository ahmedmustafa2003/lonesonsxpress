import { ThemeProvider } from "../contexts/themecontext";
import Navbar from "../components/navbar";
import {
  Truck,
  Ship,
  Plane,
  Package,
  Clock,
  Shield,
  Globe,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";
import Footer from "../components/footer";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const ServicesPage = () => {
  const services = [
    {
      title: "Express Delivery",
      description:
        "Fast and reliable shipping to your doorstep within 24 hours with real-time tracking.",
      icon: <Zap className="h-8 w-8" />,
      features: [
        "Same-day delivery",
        "Real-time tracking",
        "Signature confirmation",
        "Insurance included",
      ],
      color: "red",
    },
    {
      title: "Air Freight",
      description:
        "Global air cargo services for time-sensitive shipments with competitive rates.",
      icon: <Plane className="h-8 w-8" />,
      features: [
        "Worldwide coverage",
        "Express options",
        "Customs clearance",
        "Door-to-door service",
      ],
      color: "blue",
    },
    {
      title: "Ocean Shipping",
      description:
        "Cost-effective sea freight solutions for large volume international shipments.",
      icon: <Ship className="h-8 w-8" />,
      features: [
        "FCL & LCL options",
        "Port-to-port service",
        "Competitive pricing",
        "Global network",
      ],
      color: "green",
    },
    {
      title: "Ground Transport",
      description:
        "Reliable overland transportation with flexible scheduling and route optimization.",
      icon: <Truck className="h-8 w-8" />,
      features: [
        "Temperature control",
        "Flexible scheduling",
        "Route optimization",
        "Live tracking",
      ],
      color: "purple",
    },
    {
      title: "Secure Logistics",
      description:
        "Trackable and insured shipments for complete peace of mind and security.",
      icon: <Shield className="h-8 w-8" />,
      features: [
        "Full insurance",
        "Secure handling",
        "Chain of custody",
        "Risk management",
      ],
      color: "orange",
    },
    {
      title: "Warehousing",
      description:
        "State-of-the-art storage solutions for businesses of all sizes.",
      icon: <Package className="h-8 w-8" />,
      features: [
        "Climate controlled",
        "Inventory management",
        "Pick & pack",
        "Distribution",
      ],
      color: "indigo",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service and emergency support",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Network",
      description: "Worldwide coverage with local expertise in every market",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description:
        "Experienced logistics professionals dedicated to your success",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Quality Assured",
      description: "ISO certified processes and quality management systems",
    },
  ];

  const testimonials = [
    {
      quote:
        "Lonesons Xpress transformed our supply chain efficiency. Their reliability is unmatched.",
      author: "Sarah Chen, Supply Chain Director",
      company: "TechCorp Industries",
      rating: 5,
    },
    {
      quote:
        "Outstanding service and competitive pricing. They've been our logistics partner for 3 years.",
      author: "Michael Rodriguez, Operations Manager",
      company: "Global Manufacturing",
      rating: 5,
    },
    {
      quote:
        "Their air freight service saved us during a critical product launch. Highly recommended!",
      author: "Emily Johnson, Logistics Coordinator",
      company: "Fashion Forward Inc.",
      rating: 5,
    },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />

        {/* Hero Section */}
        <div className="pt-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"></div>
        <section className="bg-gradient-to-r from-gray-600 to-gray-950 text-gray-300 dark:from-red-600 dark:to-red-950 dark:text-white pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6"
              >
                <Package className="h-10 w-10" />
                <span className="text-sm font-medium">
                  Comprehensive Logistics Solutions
                </span>
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                <span className="text-red-600 dark:text-gray-800">Our </span>
                <span className="text-gray-500 dark:text-gray-300">
                  Services
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl max-w-3xl mx-auto"
              >
                Delivering excellence with speed, security, and reliability
                across all logistics needs
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Comprehensive logistics solutions tailored to meet your unique
                business requirements
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)",
                  }}
                  className="bg-yellow-50 dark:bg-gray-600 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${
                      service.color === "red"
                        ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                        : service.color === "blue"
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : service.color === "green"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                        : service.color === "purple"
                        ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                        : service.color === "orange"
                        ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                        : "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                    }`}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Why Choose Lonesons Xpress?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                We combine industry expertise with cutting-edge technology to
                deliver exceptional results
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mx-auto mb-4"
                  >
                    <div className="text-red-600 dark:text-red-400">
                      {item.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Don't just take our word for it - hear from our satisfied
                customers
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)",
                  }}
                  className="bg-yellow-50 dark:bg-gray-600 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ServicesPage;
