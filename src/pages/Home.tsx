import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useEffect, useState } from "react";

// Components
import Banner from "../components/Banner";
import Loader from "../components/Loader";

import { Awards } from "../components/Awards"
import { Team } from "../components/Team"
import { Pricing } from "../components/Pricing"
import { Footer } from "../components/Footer";

export const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bodyElement: HTMLBodyElement = document.querySelector(
      "body"
    )!;
    if (bodyElement) {
      if (loading) {
        bodyElement.classList.add("loading");
      } else {
        bodyElement.classList.remove("loading");
      }
    }
  }, [loading]);

  // type="crossfade"
  return (
    <LayoutGroup>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                  src='images/image-2.jpg'
                  layoutId="main-image-1"
                />
              </div>
            )}
            <Awards />
            <Team />
            <Pricing />
            <Footer />
          </>
        )}
      </AnimatePresence>
      </LayoutGroup>
  );
};

