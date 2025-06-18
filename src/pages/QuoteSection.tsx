import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Step1_ShippingDetails from "../components/QuoteSteps/Step1_ShippingDetails";
import Step2_PickupLocation from "../components/QuoteSteps/Step2_PickupLocation";
import Step3_DeliveryLocation from "../components/QuoteSteps/Step3_DeliveryLocation";
import Step4_CustomsAndInsurance from "../components/QuoteSteps/Step4_CustomsServices";
import SubmitQuoteSection from "../components/QuoteSteps/Step5_SubmitSection";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ThemeProvider } from "../contexts/themecontext";

// Interfaces
export interface ShippingUnit {
  id: number;
  type: string;
  quantity: string;
  dimensions: string;
  weight: string;
}

export interface PickupLocationData {
  locationType: string;
  country: string;
  cityCode: string;
  goodsReadyDate: string;
  includeCharges: boolean;
}

export interface DeliveryLocationData {
  destinationType: string;
  country: string;
  cityCode: string;
  includeCharges: boolean;
}

export interface CustomsInfo {
  isPersonal: boolean;
  isKnownShipper: boolean;
  insurance: boolean;
  value: string;
}

// Animations
const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const QuoteSection = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [submittedUserInfo, setSubmittedUserInfo] = useState(false);

  const [units, setUnits] = useState<ShippingUnit[]>([
    { id: 1, type: "boxes", quantity: "", dimensions: "", weight: "" },
  ]);

  const [activeTab, setActiveTab] = useState("boxes");

  const [pickupLocation, setPickupLocation] = useState<PickupLocationData>({
    locationType: "",
    country: "",
    cityCode: "",
    goodsReadyDate: "",
    includeCharges: false,
  });

  const [deliveryLocation, setDeliveryLocation] =
    useState<DeliveryLocationData>({
      destinationType: "",
      country: "",
      cityCode: "",
      includeCharges: false,
    });

  const [customsData, setCustomsData] = useState({
    exportClearance: false,
    importClearance: false,
    importCommodities: "",
    isHazardousConfirmed: false,
    isPersonal: false,
    isKnownShipper: false,
    addInsurance: false,
    insuranceValue: "",
  });

  const addUnit = () => {
    setUnits([
      ...units,
      {
        id: units.length + 1,
        type: "boxes",
        quantity: "",
        dimensions: "",
        weight: "",
      },
    ]);
  };

  const handleUserInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInfo.name && userInfo.phone && userInfo.email) {
      setSubmittedUserInfo(true);
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />

        <section className="py-12 relative">
          <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto px-4">
              {!submittedUserInfo ? (
                <motion.form
                  initial="hidden"
                  animate="visible"
                  variants={scaleUp}
                  onSubmit={handleUserInfoSubmit}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Start Your Quote
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={userInfo.name}
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, name: e.target.value })
                      }
                      className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={userInfo.phone}
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, phone: e.target.value })
                      }
                      className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      value={userInfo.email}
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, email: e.target.value })
                      }
                      className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
                  >
                    Continue to Quote
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleUp}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <div className="p-8 md:p-12 space-y-12">
                    <Step1_ShippingDetails
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                      units={units}
                      setUnits={setUnits}
                      addUnit={addUnit}
                    />
                    <Step2_PickupLocation
                      pickupLocation={pickupLocation}
                      setPickupLocation={setPickupLocation}
                    />
                    <Step3_DeliveryLocation
                      deliveryLocation={deliveryLocation}
                      setDeliveryLocation={setDeliveryLocation}
                    />
                    <Step4_CustomsAndInsurance
                      customsData={customsData}
                      setCustomsData={setCustomsData}
                    />

                    <SubmitQuoteSection
                      unitsCount={units.length}
                      userInfo={userInfo}
                      units={units}
                      pickupLocation={pickupLocation}
                      deliveryLocation={deliveryLocation}
                      customsData={customsData}
                      navigate={() => navigate("/successquote")}
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default QuoteSection;
