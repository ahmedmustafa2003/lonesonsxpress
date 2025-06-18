import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export interface DeliveryLocationData {
  destinationType: string;
  country: string;
  cityCode: string;
  includeCharges: boolean;
}

interface Step3DeliveryLocationProps {
  deliveryLocation: DeliveryLocationData;
  setDeliveryLocation: Dispatch<SetStateAction<DeliveryLocationData>>;
}

const Step3_DeliveryLocation = ({
  deliveryLocation,
  setDeliveryLocation,
}: Step3DeliveryLocationProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            when: "beforeChildren",
          },
        },
      }}
      className="space-y-6"
    >
      {/* Header */}
      <motion.div
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
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

      {/* Form Card */}
      <motion.div
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200/50 dark:border-green-700/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Destination Type */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Destination Type
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
              <select
                value={deliveryLocation.destinationType}
                onChange={(e) =>
                  setDeliveryLocation((prev) => ({
                    ...prev,
                    destinationType: e.target.value,
                  }))
                }
                className="w-full pl-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white"
              >
                <option>Port / Airport</option>
                <option>Warehouse</option>
                <option>Residential</option>
                <option>Commercial</option>
              </select>
            </div>
          </div>

          {/* Country */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Destination Country
            </label>
            <select
              value={deliveryLocation.country}
              onChange={(e) =>
                setDeliveryLocation((prev) => ({
                  ...prev,
                  country: e.target.value,
                }))
              }
              className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white"
            >
              <option>Japan</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Germany</option>
              <option>Australia</option>
            </select>
          </div>

          {/* City Code */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              City / Port Code
            </label>
            <input
              type="text"
              value={deliveryLocation.cityCode}
              onChange={(e) =>
                setDeliveryLocation((prev) => ({
                  ...prev,
                  cityCode: e.target.value,
                }))
              }
              placeholder="Enter city or port code"
              className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* Include Charges Checkbox */}
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={deliveryLocation.includeCharges}
            onChange={(e) =>
              setDeliveryLocation((prev) => ({
                ...prev,
                includeCharges: e.target.checked,
              }))
            }
            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600"
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Include destination charges (Recommended)
          </span>
        </label>
      </motion.div>
    </motion.div>
  );
};

export default Step3_DeliveryLocation;
