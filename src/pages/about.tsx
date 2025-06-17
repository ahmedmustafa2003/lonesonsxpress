import { ThemeProvider } from "../contexts/themecontext";
import Navbar from "../components/navbar";
import { Truck, Globe, Shield, Award, Users, Box } from "lucide-react";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import AnimatedCounter from "../components/animatedcounter";
import Our_Beginning from "../assets/images/Our_Beginning.jpg";
import logo from "../assets/images/Logo.jpg";

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

const AboutPage = () => {
  const teamMembers = [
    {
      name: "John Loneson",
      role: "Founder & CEO",
      bio: "With over 20 years in logistics, John founded Lonesons Xpress to revolutionize delivery services.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Operations Director",
      bio: "Sarah oversees all daily operations ensuring seamless service delivery across all locations.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Chen",
      role: "Technology Lead",
      bio: "Michael develops the tracking systems that make our service transparent and reliable.",
      img: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Emma Rodriguez",
      role: "Customer Success",
      bio: "Emma leads our support team to ensure every client receives exceptional service.",
      img: "https://randomuser.me/api/portraits/women/63.jpg",
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
                <span className="text-sm font-medium">We're</span>
                <span className="text-sm font-medium">Lonesons</span>
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                <span className="text-red-600 dark:text-gray-800">
                  Lonesons
                </span>
                <span className="text-gray-500 dark:text-gray-300">
                  {" "}
                  Xpress
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl max-w-3xl mx-auto"
              >
                Delivering excellence since 2012 with passion, precision, and
                personal service
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="lg:flex items-center gap-12"
            >
              <motion.div
                variants={itemVariants}
                className="lg:w-1/2 mb-12 lg:mb-0"
              >
                <div className="bg-gray-200 dark:bg-gray-700 h-96 rounded-xl overflow-hidden transition-colors duration-300">
                  <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <img src={Our_Beginning} alt="img" />
                  </div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="lg:w-1/2">
                <div className="flex flex-row items-center gap-4 py-6">
                  <img
                    src={logo}
                    alt="logo_img"
                    className="h-16 w-auto rounded-lg"
                  />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Our Humble Beginnings
                  </h2>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Founded in 2012 by John Loneson, Lonesons Xpress started as a
                  small local delivery service with just two trucks and a big
                  vision. What began as a neighborhood solution quickly grew
                  into a regional leader through word-of-mouth recommendations.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  By focusing on reliability and customer service when others
                  prioritized scale, we carved out our niche in the competitive
                  logistics market. Our first major contract with a national
                  retailer in 2015 marked our transition from local provider to
                  established regional carrier.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Today, we operate a modern fleet serving clients across North
                  America while maintaining the personal touch that made us
                  successful.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission and Values */}
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
                Our Mission & Values
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                These principles guide every decision we make and every package
                we deliver
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: (
                    <Truck className="h-8 w-8 text-red-600 dark:text-red-400" />
                  ),
                  title: "Reliable Delivery",
                  description:
                    "We treat every package as if it's our own, ensuring it arrives safely and on time, every time.",
                },
                {
                  icon: (
                    <Globe className="h-8 w-8 text-red-600 dark:text-red-400" />
                  ),
                  title: "Sustainable Growth",
                  description:
                    "We expand responsibly, minimizing our environmental impact while maximizing efficiency.",
                },
                {
                  icon: (
                    <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />
                  ),
                  title: "Security First",
                  description:
                    "Your shipments are protected with state-of-the-art tracking and handling protocols.",
                },
                {
                  icon: (
                    <Award className="h-8 w-8 text-red-600 dark:text-red-400" />
                  ),
                  title: "Service Excellence",
                  description:
                    "We go beyond delivery to build lasting relationships through exceptional service.",
                },
                {
                  icon: (
                    <Users className="h-8 w-8 text-red-600 dark:text-red-400" />
                  ),
                  title: "Team Empowerment",
                  description:
                    "Our employees are our greatest asset, and we invest in their growth and wellbeing.",
                },
                {
                  icon: (
                    <Box className="h-8 w-8 text-red-600 dark:text-red-400" />
                  ),
                  title: "Innovation",
                  description:
                    "We continuously improve our processes and technology to serve you better.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  className="bg-yellow-50 dark:bg-gray-600 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4"
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
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

        {/* Team Section */}
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
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                The passionate professionals driving Lonesons Xpress forward
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)",
                  }}
                  className="bg-yellow-50 dark:bg-gray-600 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-300"
                    />
                  </motion.div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-red-600 dark:text-red-500 mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-white">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleUp}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Ready to Experience the{" "}
                <span className="text-red-600">Lonesons</span> Difference?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                Join thousands of satisfied clients who trust us with their
                deliveries.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  Contact Our Team
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/Service"
                  className="bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 border border-gray-300 dark:border-gray-600"
                >
                  View Services
                </motion.a>
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

export default AboutPage;
