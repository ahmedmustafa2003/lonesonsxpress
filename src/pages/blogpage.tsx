import { ThemeProvider } from "../contexts/themecontext";
import Navbar from "../components/navbar";
import {
  CalendarDays,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Search,
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

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Air Freight: Trends to Watch in 2024",
      excerpt:
        "How emerging technologies are revolutionizing air cargo logistics and what it means for global trade.",
      date: "May 15, 2024",
      readTime: "5 min read",
      author: "John Loneson",
      category: "Air Freight",
      featured: true,
    },
    {
      id: 2,
      title: "Sustainable Shipping: Reducing Carbon Footprint in Logistics",
      excerpt:
        "Best practices for eco-friendly freight transportation and how companies are going green.",
      date: "April 28, 2024",
      readTime: "7 min read",
      author: "Sarah Johnson",
      category: "Sustainability",
      featured: false,
    },
    {
      id: 3,
      title: "Navigating Customs Regulations for International Shipments",
      excerpt:
        "A comprehensive guide to avoiding delays and compliance issues in global trade.",
      date: "April 10, 2024",
      readTime: "6 min read",
      author: "Michael Chen",
      category: "Global Trade",
      featured: false,
    },
    {
      id: 4,
      title: "The Rise of AI in Supply Chain Management",
      excerpt:
        "How artificial intelligence is optimizing logistics operations and improving efficiency.",
      date: "March 22, 2024",
      readTime: "8 min read",
      author: "Emma Rodriguez",
      category: "Technology",
      featured: false,
    },
    {
      id: 5,
      title: "E-commerce Logistics: Meeting Growing Demand",
      excerpt:
        "Strategies for handling the surge in online shopping and last-mile delivery challenges.",
      date: "March 8, 2024",
      readTime: "6 min read",
      author: "John Loneson",
      category: "E-commerce",
      featured: false,
    },
    {
      id: 6,
      title: "Cold Chain Logistics: Keeping Products Fresh",
      excerpt:
        "Essential considerations for temperature-sensitive shipments and pharmaceutical logistics.",
      date: "February 20, 2024",
      readTime: "5 min read",
      author: "Sarah Johnson",
      category: "Cold Chain",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Air Freight",
    "Sustainability",
    "Global Trade",
    "Technology",
    "E-commerce",
    "Cold Chain",
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
                <BookOpen className="h-5 w-5" />
                <span className="text-sm font-medium">
                  Industry Insights & News
                </span>
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                <span className="text-red-600 dark:text-gray-800">
                  Lonesons{" "}
                </span>
                <span className="text-gray-500 dark:text-gray-300">
                  Xpress News
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl max-w-3xl mx-auto"
              >
                Insights, trends, and news in logistics and freight
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            >
              <motion.div
                variants={itemVariants}
                className="relative flex-1 max-w-md"
              >
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-2"
              >
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      index === 0
                        ? "bg-red-600 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-600 dark:hover:text-red-400"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Featured Article
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Our latest insights on industry trends
              </p>
            </motion.div>

            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <motion.div
                  key={post.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleUp}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
                  }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="h-64 md:h-full bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 flex items-center justify-center">
                        <div className="text-center p-8">
                          <TrendingUp className="h-16 w-16 text-red-600 dark:text-red-400 mx-auto mb-4" />
                          <span className="text-gray-600 dark:text-gray-400 text-lg">
                            Featured Article
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-semibold rounded-full">
                          {post.category}
                        </span>
                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <CalendarDays className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {post.author}
                          </span>
                        </div>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href="#"
                          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
                        >
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
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
                Latest Articles
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Stay updated with industry insights
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogPosts
                .filter((post) => !post.featured)
                .map((post) => (
                  <motion.div
                    key={post.id}
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)",
                    }}
                    className="bg-yellow-50 dark:bg-gray-600 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-center"
                      >
                        <BookOpen className="h-12 w-12 text-gray-500 dark:text-gray-400 mx-auto mb-2" />
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          Article Image
                        </span>
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-2">
                          <CalendarDays className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {post.author}
                          </span>
                        </div>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href="#"
                          className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-500 flex items-center text-sm font-medium transition-colors duration-200"
                        >
                          Read More <ArrowRight className="h-4 w-4 ml-1" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className=" dark:from-red-600 dark:to-red-950 py-16 text-gray-950 dark:text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleUp}
            >
              <h2 className="text-3xl font-bold mb-4">
                Stay Updated with Our Logistics Insights
              </h2>
              <p className="text-xl mb-8 text-gray-950 dark:text-white">
                Subscribe to our newsletter for the latest industry trends and
                company news.
              </p>
              <motion.form
                variants={containerVariants}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <motion.input
                  variants={itemVariants}
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-8 py-2 rounded-lg bg-yellow-100 backdrop-blur-sm text-gray-950 placeholder-gray-950 focus:ring-2 focus:ring-white focus:outline-none transition-shadow"
                />
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors duration-200"
                >
                  Subscribe
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default BlogPage;
