import React, { useState } from "react";
import { ThemeProvider } from "../contexts/themecontext";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import {
  Package,
  Search,
  Truck,
  Ship,
  Plane,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  AlertCircle,
  Phone,
  Mail,
  User,
  Weight,
  Ruler,
} from "lucide-react";

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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

// Mock tracking data - in real app, this would come from API
const mockTrackingData = {
  LX123456789: {
    status: "In Transit",
    estimatedDelivery: "2024-01-15",
    currentLocation: "Distribution Center - New York",
    service: "Express Air",
    sender: "John Doe",
    recipient: "Jane Smith",
    weight: "2.5 kg",
    dimensions: "30x20x15 cm",
    timeline: [
      {
        status: "Package Picked Up",
        location: "Los Angeles, CA",
        date: "2024-01-10",
        time: "09:30 AM",
        completed: true,
      },
      {
        status: "In Transit to Sorting Facility",
        location: "Phoenix, AZ",
        date: "2024-01-10",
        time: "06:45 PM",
        completed: true,
      },
      {
        status: "Arrived at Distribution Center",
        location: "New York, NY",
        date: "2024-01-12",
        time: "02:15 PM",
        completed: true,
      },
      {
        status: "Out for Delivery",
        location: "Brooklyn, NY",
        date: "2024-01-15",
        time: "Estimated",
        completed: false,
      },
      {
        status: "Delivered",
        location: "Final Destination",
        date: "2024-01-15",
        time: "Estimated",
        completed: false,
      },
    ],
  },
  LX987654321: {
    status: "Delivered",
    estimatedDelivery: "2024-01-08",
    currentLocation: "Delivered to Front Door",
    service: "Ocean Freight",
    sender: "ABC Corp",
    recipient: "XYZ Industries",
    weight: "150 kg",
    dimensions: "100x80x60 cm",
    timeline: [
      {
        status: "Package Picked Up",
        location: "Shanghai, China",
        date: "2023-12-15",
        time: "10:00 AM",
        completed: true,
      },
      {
        status: "Departed Origin Port",
        location: "Shanghai Port",
        date: "2023-12-18",
        time: "03:00 PM",
        completed: true,
      },
      {
        status: "In Transit - Ocean",
        location: "Pacific Ocean",
        date: "2023-12-25",
        time: "12:00 PM",
        completed: true,
      },
      {
        status: "Arrived at Destination Port",
        location: "Los Angeles Port",
        date: "2024-01-05",
        time: "08:30 AM",
        completed: true,
      },
      {
        status: "Delivered",
        location: "Los Angeles, CA",
        date: "2024-01-08",
        time: "11:45 AM",
        completed: true,
      },
    ],
  },
};

const TrackingPage: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number");
      return;
    }

    setIsSearching(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      const data =
        mockTrackingData[trackingNumber as keyof typeof mockTrackingData];
      if (data) {
        setTrackingData(data);
        setError("");
      } else {
        setTrackingData(null);
        setError(
          "Tracking number not found. Please check your tracking number and try again."
        );
      }
      setIsSearching(false);
    }, 1000);
  };

  const getServiceIcon = (service: string) => {
    if (service.includes("Air")) return <Plane className="h-5 w-5" />;
    if (service.includes("Ocean")) return <Ship className="h-5 w-5" />;
    return <Truck className="h-5 w-5" />;
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "text-green-600";
      case "in transit":
        return "text-blue-600";
      case "out for delivery":
        return "text-orange-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />

        {/* Hero Section */}
        <div className="pt-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"></div>
        <div className="pt-24 pb-12 bg-gradient-to-r from-gray-600 to-gray-950 text-gray-300 dark:from-red-600 dark:to-red-950 dark:text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center text-white"
            >
              <motion.div
                variants={itemVariants}
                className="flex justify-center mb-6"
              >
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <Package className="h-10 w-10" />
                </div>
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                <span className="text-red-600 dark:text-gray-800">
                  Track Your{" "}
                </span>
                <span className="text-gray-500 dark:text-gray-300">
                  Package
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-200 max-w-2xl mx-auto"
              >
                Enter your tracking number below to get real-time updates on
                your shipment
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Search Section */}
        <div className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.form
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              onSubmit={handleSearch}
              className="bg-yellow-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="tracking"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Tracking Number
                  </label>
                  <input
                    type="text"
                    id="tracking"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white text-lg"
                    placeholder="Enter tracking number (e.g., LX123456789)"
                  />
                </div>
                <div className="flex items-end">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSearching}
                    className="bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2 text-lg"
                  >
                    {isSearching ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Searching...
                      </>
                    ) : (
                      <>
                        <Search className="h-5 w-5" />
                        Track
                      </>
                    )}
                  </motion.button>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <p>
                  Try these sample tracking numbers:{" "}
                  <span className="font-mono bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                    LX123456789
                  </span>{" "}
                  or{" "}
                  <span className="font-mono bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                    LX987654321
                  </span>
                </p>
              </div>
            </motion.form>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-600 rounded-lg flex items-center gap-3"
              >
                <AlertCircle className="h-5 w-5 text-red-600" />
                <p className="text-red-700 dark:text-red-300">{error}</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Tracking Results */}
        {trackingData && (
          <div className="py-12 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {/* Package Summary */}
                <motion.div variants={itemVariants} className="lg:col-span-1">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <Package className="h-6 w-6 text-red-600" />
                      Package Summary
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          Status
                        </span>
                        <span
                          className={`font-bold ${getStatusColor(
                            trackingData.status
                          )}`}
                        >
                          {trackingData.status}
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          Service
                        </span>
                        <div className="flex items-center gap-2">
                          {getServiceIcon(trackingData.service)}
                          <span className="font-medium text-gray-900 dark:text-white">
                            {trackingData.service}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          Est. Delivery
                        </span>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="font-medium text-gray-900 dark:text-white">
                            {trackingData.estimatedDelivery}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          Current Location
                        </span>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="font-medium text-gray-900 dark:text-white text-right">
                            {trackingData.currentLocation}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Package Details */}
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        Package Details
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <User className="h-4 w-4 text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              From: {trackingData.sender}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              To: {trackingData.recipient}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Weight className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Weight: {trackingData.weight}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Ruler className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Dimensions: {trackingData.dimensions}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Tracking Timeline */}
                <motion.div variants={itemVariants} className="lg:col-span-2">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <Clock className="h-6 w-6 text-red-600" />
                      Tracking Timeline
                    </h3>

                    <div className="space-y-4">
                      {trackingData.timeline.map(
                        (event: any, index: number) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex gap-4"
                          >
                            <div className="flex flex-col items-center">
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                  event.completed
                                    ? "bg-green-100 dark:bg-green-900/30"
                                    : "bg-gray-100 dark:bg-gray-700"
                                }`}
                              >
                                {event.completed ? (
                                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                                ) : (
                                  <Clock className="h-5 w-5 text-gray-400" />
                                )}
                              </div>
                              {index < trackingData.timeline.length - 1 && (
                                <div
                                  className={`w-0.5 h-12 mt-2 ${
                                    event.completed
                                      ? "bg-green-300"
                                      : "bg-gray-300 dark:bg-gray-600"
                                  }`}
                                />
                              )}
                            </div>

                            <div className="flex-1 pb-8">
                              <div className="bg-yellow-50 dark:bg-gray-700 rounded-lg p-4">
                                <h4
                                  className={`font-semibold ${
                                    event.completed
                                      ? "text-gray-900 dark:text-white"
                                      : "text-gray-500 dark:text-gray-400"
                                  }`}
                                >
                                  {event.status}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 flex items-center gap-2">
                                  <MapPin className="h-4 w-4" />
                                  {event.location}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                                  {event.date} at {event.time}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center"
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
              >
                Need Help with Your{" "}
                <span className="text-red-600">Shipment?</span>
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              >
                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  className="bg-yellow-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Phone className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Call Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Speak with our customer service team
                  </p>
                  <p className="text-red-600 font-bold text-lg">
                    1-800-LONESONS
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  className="bg-yellow-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Mail className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Email Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Send us your tracking questions
                  </p>
                  <p className="text-red-600 font-bold text-lg">
                    support@lonesonsxpress.com
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default TrackingPage;
