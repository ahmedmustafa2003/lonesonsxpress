import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

interface ShippingUnit {
  id: number;
  type: string;
  quantity: string;
  dimensions: string;
  weight: string;
}

interface Step1Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  units: ShippingUnit[];
  addUnit: () => void;
  setUnits: Dispatch<SetStateAction<ShippingUnit[]>>;
}

const Step1_ShippingDetails = ({
  activeTab,
  setActiveTab,
  units,
  addUnit,
  setUnits,
}: Step1Props) => {
  const handleChange = (
    index: number,
    field: keyof ShippingUnit,
    value: string
  ) => {
    const updatedUnits = [...units];
    updatedUnits[index] = { ...updatedUnits[index], [field]: value };
    setUnits(updatedUnits);
  };

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
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
          },
        }}
        className="flex items-center space-x-3 mb-6"
      >
        <div className="flex items-center justify-center w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full">
          <span className="text-red-600 dark:text-red-400 font-bold">1</span>
        </div>
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
          What are you shipping?
        </h4>
      </motion.div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {["boxes", "total"].map((tab) => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === tab
                ? "bg-red-600 text-white shadow-lg transform scale-105"
                : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 shadow-md"
            }`}
          >
            {tab === "boxes"
              ? "Calculate by boxes/pallets"
              : "Calculate by total shipment"}
          </motion.button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="text-left py-4 px-6">Package Type</th>
                <th className="text-left py-4 px-6"># of Units</th>
                <th className="text-left py-4 px-6">Dimensions (L×W×H)</th>
                <th className="text-left py-4 px-6">Weight per Unit</th>
              </tr>
            </thead>
            <tbody>
              {units.map((unit, index) => (
                <motion.tr
                  key={unit.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-t border-gray-200 dark:border-gray-700"
                >
                  <td className="py-4 px-6">
                    <select
                      value={unit.type}
                      onChange={(e) =>
                        handleChange(index, "type", e.target.value)
                      }
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white"
                    >
                      <option>Boxes/Crates</option>
                      <option>Pallets</option>
                      <option>Drums</option>
                      <option>Bags</option>
                    </select>
                  </td>
                  <td className="py-4 px-6">
                    <input
                      type="number"
                      value={unit.quantity}
                      onChange={(e) =>
                        handleChange(index, "quantity", e.target.value)
                      }
                      placeholder="0"
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <input
                      type="text"
                      value={unit.dimensions}
                      onChange={(e) =>
                        handleChange(index, "dimensions", e.target.value)
                      }
                      placeholder="100 × 50 × 30 cm"
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        value={unit.weight}
                        onChange={(e) =>
                          handleChange(index, "weight", e.target.value)
                        }
                        placeholder="0"
                        className="flex-1 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white"
                      />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        KG
                      </span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add unit & summary */}
      <div className="flex justify-between items-center mt-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={addUnit}
          className="flex items-center space-x-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
        >
          <Plus className="h-4 w-4" />
          <span>Add another unit</span>
        </motion.button>
        <div className="bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-lg">
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            Shipment total:{" "}
            <span className="text-red-600 dark:text-red-400">
              {units.length} Unit(s), 0 CBM, 0 KG
            </span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Step1_ShippingDetails;
