// src/components/SuccessPage.tsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Truck, CheckCircle } from "lucide-react";

const successquote = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 text-center"
      >
        {/* Logo/Icon Animation */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center"
            >
              <CheckCircle className="h-12 w-12 text-red-600 dark:text-red-400" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md"
            >
              <Truck className="h-6 w-6 text-red-600 dark:text-red-400" />
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Thank You!
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-300 mb-8"
        >
          Your Quote has been submitted successfully.We will get back to you in
          2-3 working days. We appreciate your time!
        </motion.p>

        {/* Company Signature */}
        <motion.div
          variants={itemVariants}
          className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-center space-x-2">
            <Truck className="h-5 w-5 text-red-600 dark:text-red-400" />
            <span className="font-semibold text-gray-900 dark:text-white">
              Lonesons Xpress
            </span>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div variants={itemVariants} className="mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Return to Home
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default successquote;
