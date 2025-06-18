import { motion } from "framer-motion";
import { Check, AlertTriangle, Package, Shield } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export interface CustomsData {
  exportClearance: boolean;
  importClearance: boolean;
  importCommodities: string;
  isHazardousConfirmed: boolean;
  isPersonal: boolean;
  isKnownShipper: boolean;
  addInsurance: boolean;
  insuranceValue: string;
}

interface Step4Props {
  customsData: CustomsData;
  setCustomsData: Dispatch<SetStateAction<CustomsData>>;
}

const Step4_CustomsServices = ({ customsData, setCustomsData }: Step4Props) => {
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
        <div className="flex items-center justify-center w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full">
          <span className="text-purple-600 dark:text-purple-400 font-bold">
            4
          </span>
        </div>
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
          Customs & Additional Services
        </h4>
      </motion.div>

      {/* Card */}
      <motion.div
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-purple-200/50 dark:border-purple-700/50"
      >
        <p className="text-gray-700 dark:text-gray-300 mb-6 flex items-center space-x-2">
          <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
          <span>All international shipments require customs clearance</span>
        </p>

        <div className="space-y-8">
          {/* Customs Clearance */}
          <div>
            <h5 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white flex items-center space-x-2">
              <Package className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span>Customs Clearance</span>
            </h5>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                <input
                  type="checkbox"
                  checked={customsData.exportClearance}
                  onChange={(e) =>
                    setCustomsData((prev) => ({
                      ...prev,
                      exportClearance: e.target.checked,
                    }))
                  }
                  className="w-4 h-4 text-purple-600"
                />
                <span className="text-gray-700 dark:text-gray-300">
                  Export customs clearance required
                </span>
              </label>
              <label className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                <input
                  type="checkbox"
                  checked={customsData.importClearance}
                  onChange={(e) =>
                    setCustomsData((prev) => ({
                      ...prev,
                      importClearance: e.target.checked,
                    }))
                  }
                  className="w-4 h-4 text-purple-600"
                />
                <span className="text-gray-700 dark:text-gray-300">
                  Import customs clearance required for
                </span>
                <input
                  type="text"
                  value={customsData.importCommodities}
                  onChange={(e) =>
                    setCustomsData((prev) => ({
                      ...prev,
                      importCommodities: e.target.value,
                    }))
                  }
                  placeholder="commodities"
                  className="ml-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-3 py-1 text-sm text-gray-900 dark:text-white"
                />
              </label>
            </div>
          </div>

          {/* Notice */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-l-4 border-yellow-400 dark:border-yellow-600 p-6 rounded-r-lg">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              <div>
                <p className="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">
                  Important Notice
                </p>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-2">
                  Duties and taxes will not be included in the quote. These are
                  imposed by the government and we will contact you to collect
                  payment.
                </p>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  Personal goods and certain hazardous materials cannot be
                  shipped.
                  <button className="text-red-600 underline ml-1 hover:text-red-700">
                    View full restrictions
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div>
            <h5 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
              Additional Details
            </h5>
            <div className="space-y-3">
              <label className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                <input
                  type="checkbox"
                  checked={customsData.isHazardousConfirmed}
                  onChange={(e) =>
                    setCustomsData((prev) => ({
                      ...prev,
                      isHazardousConfirmed: e.target.checked,
                    }))
                  }
                  className="w-4 h-4 mt-0.5 text-purple-600"
                />
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  I declare that my shipment does not contain any hazardous
                  materials or dangerous goods.*
                </span>
              </label>
              <label className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                <input
                  type="checkbox"
                  checked={customsData.isPersonal}
                  onChange={(e) =>
                    setCustomsData((prev) => ({
                      ...prev,
                      isPersonal: e.target.checked,
                    }))
                  }
                  className="w-4 h-4 text-purple-600"
                />
                <span className="text-gray-700 dark:text-gray-300">
                  This is a personal shipment
                </span>
              </label>
              <label className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                <input
                  type="checkbox"
                  checked={customsData.isKnownShipper}
                  onChange={(e) =>
                    setCustomsData((prev) => ({
                      ...prev,
                      isKnownShipper: e.target.checked,
                    }))
                  }
                  className="w-4 h-4 text-purple-600"
                />
                <span className="text-gray-700 dark:text-gray-300">
                  I am a known shipper
                </span>
              </label>
            </div>
          </div>

          {/* Insurance Coverage */}
          <div>
            <h5 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white flex items-center space-x-2">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>Insurance Coverage</span>
            </h5>
            <div className="space-y-4">
              <label className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <input
                  type="checkbox"
                  checked={customsData.addInsurance}
                  onChange={(e) =>
                    setCustomsData((prev) => ({
                      ...prev,
                      addInsurance: e.target.checked,
                    }))
                  }
                  className="w-4 h-4 text-blue-600"
                />
                <div className="flex-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Add insurance coverage
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Protects your goods value during transit
                  </p>
                </div>
              </label>

              <div className="ml-7 flex items-center space-x-3">
                <label className="text-sm text-gray-700 dark:text-gray-300">
                  Goods value (USD):
                </label>
                <input
                  type="number"
                  value={customsData.insuranceValue}
                  onChange={(e) =>
                    setCustomsData((prev) => ({
                      ...prev,
                      insuranceValue: e.target.value,
                    }))
                  }
                  placeholder="0.00"
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 w-32 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
              <p className="text-sm text-blue-800 dark:text-blue-200 font-medium mb-2">
                Insurance Restrictions
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300">
                Insurance coverage is not available for shipments to: Australia,
                Cambodia, Germany, India, Indonesia, Pakistan, Taiwan, Thailand,
                Turkey, UAE, UK, Vietnam.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Step4_CustomsServices;
