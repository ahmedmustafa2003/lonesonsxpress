import { ThemeProvider } from "../contexts/themecontext";
import Navbar from "../components/navbar";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
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

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Us",
      description: "Speak directly with our team",
      details: "+1 (555) 123-4567",
      color: "blue",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Us",
      description: "Send us a detailed message",
      details: "info@lonesonsxpress.com",
      color: "green",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Live Chat",
      description: "Get instant support",
      details: "Available 24/7",
      color: "purple",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Support Center",
      description: "Browse our help resources",
      details: "Visit Help Center",
      color: "orange",
    },
  ];

  const offices = [
    {
      city: "New York",
      address: "123 Logistics Street, Suite 456, New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@lonesonsxpress.com",
    },
    {
      city: "Los Angeles",
      address: "789 Freight Avenue, Los Angeles, CA 90210",
      phone: "+1 (555) 765-4321",
      email: "la@lonesonsxpress.com",
    },
    {
      city: "Chicago",
      address: "456 Cargo Boulevard, Chicago, IL 60601",
      phone: "+1 (555) 987-6543",
      email: "chicago@lonesonsxpress.com",
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
                <Users className="h-5 w-5" />
                <span className="text-sm font-medium">We're Here to Help</span>
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                <span className="text-red-600 dark:text-gray-800">
                  Contact{" "}
                </span>
                <span className="text-gray-500 dark:text-gray-300">Us</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl max-w-3xl mx-auto"
              >
                Get in touch with our team for any inquiries or support
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                How Can We Help You?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Choose the best way to reach us
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  className="bg-yellow-50 dark:bg-gray-600 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                      method.color === "blue"
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : method.color === "green"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                          : method.color === "purple"
                            ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                            : "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                    }`}
                  >
                    {method.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {method.description}
                  </p>
                  <p className="text-red-600 dark:text-red-400 font-semibold">
                    {method.details}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              {/* Contact Form */}
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center space-x-2">
                  <Send className="h-6 w-6 text-red-600 dark:text-red-400" />
                  <span>Send us a message</span>
                </h2>
                <form
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const formData = new FormData(form);

                    const dataToSend = {
                      name: formData.get("name"),
                      email: formData.get("email"),
                      phone: formData.get("phone"),
                      company: formData.get("company"),
                      subject: formData.get("subject"),
                      message: formData.get("message"),
                    };

                    try {
                      const res = await fetch(
                        "http://localhost:5000/send-contact-message",
                        {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(dataToSend),
                        }
                      );

                      const result = await res.json();
                      if (result.success) {
                        alert("Message sent successfully!");
                        form.reset(); // optional: clear form
                      } else {
                        alert("Failed to send message.");
                      }
                    } catch (err) {
                      console.error("Error submitting contact message:", err);
                      alert("Something went wrong!");
                    }
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                    >
                      <option>General Inquiry</option>
                      <option>Request Quote</option>
                      <option>Customer Support</option>
                      <option>Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <div className="space-y-8">
                <motion.div
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          Headquarters
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                          123 Logistics Street, Suite 456
                          <br />
                          Freight City, FC 10001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          Phone Numbers
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                          Main: +1 (555) 123-4567
                          <br />
                          Support: +1 (555) 765-4321
                          <br />
                          Emergency: +1 (555) 911-HELP
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          Email Addresses
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                          General: info@lonesonsxpress.com
                          <br />
                          Support: support@lonesonsxpress.com
                          <br />
                          Sales: sales@lonesonsxpress.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                        <Clock className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          Business Hours
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                          Monday - Friday: 8:00 AM - 6:00 PM
                          <br />
                          Saturday: 9:00 AM - 2:00 PM
                          <br />
                          Sunday: Closed
                          <br />
                          <span className="text-red-600 dark:text-red-400 font-medium">
                            24/7 Emergency Support
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* Map Placeholder */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.480708845099!2d74.50527647510937!3d32.48657869877318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eea1bd17dade5%3A0xbf4fecdf3fc66376!2sLONESONS%20LOGISTICS!5e0!3m2!1sen!2s!4v1749798534761!5m2!1sen!2s"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Office Locations
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Visit us at any of our convenient locations
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  className="bg-yellow-50 dark:bg-gray-600 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {office.city} Office
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {office.address}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-red-600 dark:text-red-400" />
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {office.phone}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-red-600 dark:text-red-400" />
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {office.email}
                      </p>
                    </div>
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

export default ContactPage;
