import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

interface Step5SubmitProps {
  unitsCount: number;
  userInfo: {
    name: string;
    phone: string;
    email: string;
  };
  units: {
    id: number;
    type: string;
    quantity: string;
    dimensions: string;
    weight: string;
  }[];
  pickupLocation: any;
  deliveryLocation: any;
  customsData: any;
  navigate: () => void;
}

const Step5_SubmitSection = ({
  unitsCount,
  userInfo,
  units,
  pickupLocation,
  deliveryLocation,
  customsData,
  navigate,
}: Step5SubmitProps) => {
  const handleGetQuote = async () => {
    try {
      const response = await fetch("http://localhost:5000/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userInfo,
          units,
          pickupLocation,
          deliveryLocation,
          customsData,
        }),
      });

      if (!response.ok) throw new Error("Quote submission failed");

      console.log("Quote submitted successfully");
      navigate(); // go to success page
    } catch (error) {
      alert("Failed to send quote. Please try again.");
      console.error(error);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
      }}
      className="bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 rounded-2xl p-8 text-white"
    >
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <div className="text-lg font-semibold mb-2">Shipment Summary</div>
          <div className="text-red-100 dark:text-red-200">
            Total:{" "}
            <span className="font-bold text-white">
              {unitsCount} Unit(s), 0 CBM, 0 KG
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
  );
};

export default Step5_SubmitSection;
