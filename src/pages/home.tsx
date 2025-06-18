import React from "react";
import { ThemeProvider } from "../contexts/themecontext";
import Navbar from "../components/navbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import planeImage from "../assets/images/plane_image.jpg";
import shipImage from "../assets/images/ship_image.jpg";
import shipImage2 from "../assets/images/ship_image2.jpg";
import truckImage from "../assets/images/truck_image.jpg";
import { Clock, Shield, Truck, Ship, Plane, Package, Star } from "lucide-react";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import AnimatedCounter from "../components/animatedcounter";
import { useNavigate } from "react-router-dom";

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

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

function App() {
  const navigate = useNavigate();
  const [selectedRating, setSelectedRating] = React.useState(0);
  const [hoveredRating, setHoveredRating] = React.useState(0);

  const services = [
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Road Freight",
      description: "Reliable overland transportation with real-time tracking",
    },
    {
      icon: <Ship className="h-10 w-10" />,
      title: "Ocean Shipping",
      description: "Cost-effective solutions for international sea freight",
    },
    {
      icon: <Plane className="h-10 w-10" />,
      title: "Air Cargo",
      description: "Express worldwide air freight services",
    },
    {
      icon: <Package className="h-10 w-10" />,
      title: "Warehousing",
      description: "Secure storage solutions with inventory management",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Customs Clearance",
      description: "Expert handling of import/export documentation",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service",
    },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />

        {/* Hero Slider */}
        <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            className="rounded-xl overflow-hidden shadow-lg w-full h-[350px] sm:h-[400px] md:h-[450px] relative"
          >
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={planeImage}
                  alt="Plane"
                  className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="text-white max-w-2xl"
                  >
                    <motion.h2
                      variants={itemVariants}
                      className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                    >
                      <span className="text-red-600">Air Freight </span>
                      Solutions
                    </motion.h2>
                    <motion.p
                      variants={itemVariants}
                      className="text-lg sm:text-xl md:text-2xl"
                    >
                      Fast and reliable worldwide air cargo services with
                      real-time tracking
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={shipImage}
                  alt="Ship 1"
                  className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="text-white max-w-2xl"
                  >
                    <motion.h2
                      variants={itemVariants}
                      className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                    >
                      <span className="text-red-600">Ocean </span> Shipping
                    </motion.h2>
                    <motion.p
                      variants={itemVariants}
                      className="text-lg sm:text-xl md:text-2xl"
                    >
                      Cost-effective sea freight for large volume shipments
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={shipImage2}
                  alt="Ship 2"
                  className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="text-white max-w-2xl"
                  >
                    <motion.h2
                      variants={itemVariants}
                      className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                    >
                      <span className="text-red-600">Port </span> Logistics
                    </motion.h2>
                    <motion.p
                      variants={itemVariants}
                      className="text-lg sm:text-xl md:text-2xl"
                    >
                      Comprehensive port-to-port and door-to-door services
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={truckImage}
                  alt="Truck"
                  className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="text-white max-w-2xl"
                  >
                    <motion.h2
                      variants={itemVariants}
                      className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                    >
                      <span className="text-red-600">Land </span>Transport
                    </motion.h2>
                    <motion.p
                      variants={itemVariants}
                      className="text-lg sm:text-xl md:text-2xl"
                    >
                      Efficient road transportation with temperature-controlled
                      options
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Main Content */}
        <main>
          {/* Company Intro */}
          <section className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="text-center"
              >
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                >
                  <span className="text-red-600">Lonesons </span> Xpress
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
                >
                  Your trusted logistics partner since 2012, delivering
                  excellence across global supply chains with innovative
                  solutions and personalized service.
                </motion.p>
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors mx-4"
                  onClick={() => navigate("/QuotePage")}
                >
                  Get a Free Quote
                </motion.button>
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors mx-4"
                  onClick={() => navigate("/Track")}
                >
                  Track Package
                </motion.button>
              </motion.div>

              {/* Expanded Services Grid */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    className="p-8 bg-yellow-50 dark:bg-gray-600 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Stats Section */}
          <section className=" mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 bg-gradient-to-r from-gray-600 to-gray-950 text-gray-300 dark:from-red-600 dark:to-red-950 dark:text-white px-4 py-16">
            <AnimatedCounter value={12} label="Years of Experience" />
            <AnimatedCounter value={500} label="Happy Clients" />
            <AnimatedCounter value={200} label="Qualified Staff" />
            <AnimatedCounter value={1000} label="Deliveries Completed" />
          </section>

          {/* Testimonials */}
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
              >
                What Our Clients Say
              </motion.h2>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 "
              >
                {[
                  {
                    quote:
                      "Lonesons Xpress handled our urgent shipment with incredible efficiency. Their real-time tracking gave us complete peace of mind.",
                    author: "Sarah Johnson, TechCorp",
                    rating: 5,
                  },
                  {
                    quote:
                      "We've been partners for 5 years and their reliability never falters. Truly a world-class logistics provider.",
                    author: "Michael Chen, Global Imports",
                    rating: 4,
                  },
                  {
                    quote:
                      "Their customs clearance team saved us weeks of delays. Professional service at every touchpoint.",
                    author: "Emma Rodriguez, Fashion Forward",
                    rating: 5,
                  },
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    className="p-8 rounded-xl shadow-md bg-yellow-50 dark:bg-gray-600 hover:bg-gray-100 transition-shadow duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300 dark:text-gray-500"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 mb-6">
                      "{testimonial.quote}"
                    </div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Add Your Comment Section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleUp}
                className="bg-yellow-50 dark:bg-gray-600 rounded-xl p-8 rounded-xl shadow-md max-w-3xl mx-auto"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Share Your Experience
                </h3>
                <form
                  className="space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const formData = new FormData(form);

                    const dataToSend = {
                      name: formData.get("name"),
                      email: formData.get("email"),
                      rating: selectedRating,
                      comment: formData.get("comment"),
                    };

                    try {
                      const res = await fetch(
                        "http://localhost:5000/send-comment",
                        {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(dataToSend),
                        }
                      );

                      const result = await res.json();
                      if (result.success) {
                        navigate("/successpage");
                      } else {
                        alert("Failed to send email.");
                      }
                    } catch (error) {
                      console.error("Submission Error:", error);
                      alert("Something went wrong.");
                    }
                  }}
                >
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Rating Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Rating
                    </label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <React.Fragment key={star}>
                          <input
                            type="radio"
                            id={`star-${star}`}
                            name="rating"
                            value={star}
                            className="sr-only"
                            checked={selectedRating === star}
                            onChange={() => setSelectedRating(star)}
                          />
                          <label
                            htmlFor={`star-${star}`}
                            className={`cursor-pointer transition-colors ${
                              star <= (hoveredRating || selectedRating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300 dark:text-gray-500"
                            }`}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                          >
                            <Star className="h-6 w-6" />
                          </label>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Comment Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Comment
                    </label>
                    <textarea
                      name="comment"
                      rows={4}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Share your experience with us..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg transition-colors"
                  >
                    Submit Review
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Comprehensive Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
