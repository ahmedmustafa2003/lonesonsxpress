import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export interface PickupLocationData {
  locationType: string;
  country: string;
  cityCode: string;
  goodsReadyDate: string;
  includeCharges: boolean;
}

interface Step2PickupLocationProps {
  pickupLocation: PickupLocationData;
  setPickupLocation: Dispatch<SetStateAction<PickupLocationData>>;
}

const Step2_PickupLocation = ({
  pickupLocation,
  setPickupLocation,
}: Step2PickupLocationProps) => {
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
        <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full">
          <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
        </div>
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
          Pickup goods from
        </h4>
      </motion.div>

      {/* Form Card */}
      <motion.div
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200/50 dark:border-blue-700/50"
      >
        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Location Type */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Origin Location Type
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
              <select
                value={pickupLocation.locationType}
                onChange={(e) =>
                  setPickupLocation((prev) => ({
                    ...prev,
                    locationType: e.target.value,
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
              Origin Country
            </label>
            <select
              value={pickupLocation.country}
              onChange={(e) =>
                setPickupLocation((prev) => ({
                  ...prev,
                  country: e.target.value,
                }))
              }
              className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white"
            >
              <option>Hong Kong, China</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Germany</option>
              <option>Japan</option>
            </select>
          </div>

          {/* City Code */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              City / Port Code
            </label>
            <input
              type="text"
              value={pickupLocation.cityCode}
              onChange={(e) =>
                setPickupLocation((prev) => ({
                  ...prev,
                  cityCode: e.target.value,
                }))
              }
              placeholder="Enter city or port code"
              className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white"
            />
          </div>

          {/* Goods Ready Date */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Goods Ready Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
              <input
                type="date"
                value={pickupLocation.goodsReadyDate}
                onChange={(e) =>
                  setPickupLocation((prev) => ({
                    ...prev,
                    goodsReadyDate: e.target.value,
                  }))
                }
                className="w-full pl-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={pickupLocation.includeCharges}
              onChange={(e) =>
                setPickupLocation((prev) => ({
                  ...prev,
                  includeCharges: e.target.checked,
                }))
              }
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Include origin charges (Recommended)
            </span>
          </label>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            Don't know the date yet?
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Step2_PickupLocation;
