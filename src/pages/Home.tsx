// import "./Home.scss"
import { motion, AnimateSharedLayout, AnimatePresence, LayoutGroup } from "framer-motion";
import { useEffect, useState } from "react";

// Components
import Header from "../components/Header";
import Banner from "../components/Banner";
import Loader from "../components/Loader";

import { Services } from "../components/Services"
import { Awards } from "../components/Awards"
import { Team } from "../components/Team"
import { Pricing } from "../components/Pricing"

export const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bodyElement: HTMLBodyElement = document.querySelector(
      "body"
    )!;
    console.log(bodyElement)
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
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                  src='../../public/images/image-2.jpg'
                  layoutId="main-image-1"
                />
              </div>
            )}
            <Services />
            <Awards />
            <Team />
            <Pricing />
          </>
        )}
      </AnimatePresence>
      </LayoutGroup>
  );
};

// import { useEffect, useState } from "react";
// import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

// // Components
// import Header from "./components/Header";
// import Banner from "./components/Banner";
// import Loader from "./components/Loader";

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loading
//       ? document.querySelector("body").classList.add("loading")
//       : document.querySelector("body").classList.remove("loading");
//   }, [loading]);

//   return (
//     <AnimateSharedLayout type='crossfade'>
//       <AnimatePresence>
//         {loading ? (
//           <motion.div key='loader'>
//             <Loader setLoading={setLoading} />
//           </motion.div>
//         ) : (
//           <>
//             <Header />
//             <Banner />
//             {!loading && (
//               <div className='transition-image final'>
//                 <motion.img
//                   transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
//                   src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
//                   layoutId='main-image-1'
//                 />
//               </div>
//             )}
//           </>
//         )}
//       </AnimatePresence>
//     </AnimateSharedLayout>
//   );
// }

// export default App;
