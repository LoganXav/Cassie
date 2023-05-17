import { useState, useEffect, useRef } from "react";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

export const Profile: React.FC = () => {
  interface Member {
    id: number;
    firstName: string;
    lastName: string;
    img: string;
    role: string;
  }
  let members: Member[] = [];

  members = [
    {
      id: 1,
      firstName: "Stacy",
      lastName: "Morgan",
      img: "https://media.istockphoto.com/id/1398994132/photo/happy-businesswoman-using-a-digital-tablet-young-leading-businesswoman-using-a-wireless.jpg?b=1&s=170667a&w=0&k=20&c=z-tvJG0r-SNUrIGwZb7YjLI9f_cOnkN30vcPafskrkQ=",
      role: "Creative Director",
    },
    {
      id: 2,
      firstName: "Hannah",
      lastName: "Hill",
      img: "https://media.istockphoto.com/id/1336160947/photo/happy-african-american-photographer-holding-a-camera-and-smiling.jpg?b=1&s=170667a&w=0&k=20&c=6H6lZh5uDZ7DGX9L5RtlA8PwSi_oYbaVq60YNpBhRbM=",
      role: "Photographer",
    },
    {
      id: 3,
      firstName: "Irene",
      lastName: "Paige",
      img: "https://media.istockphoto.com/id/1450788989/photo/portrait-of-happy-african-businesswoman-holding-digital-tablet-in-the-office.jpg?b=1&s=170667a&w=0&k=20&c=zkLn4o1T0CMCXmTQZlwheJDYuW9fOXXkvTJ9zbl3sCs=",
      role: "Editor",
    },
    {
      id: 4,
      firstName: "John",
      lastName: "Anderson",
      img: "https://media.istockphoto.com/id/482100176/photo/confident-in-his-business-ability.jpg?b=1&s=170667a&w=0&k=20&c=t62jCkHRoFB2LeXDOWBWuXmJzUR3N4taHuuiTZnMcxY=",
      role: "Photographer",
    },
  ];

  const { id } = useParams<{ id: string | undefined }>();
  const [person, setPerson] = useState<Member | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const foundPerson = members.find((member) => member.id.toString() === id);
      setPerson(foundPerson);
    }
  }, [id]);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const transition = { duration: 2, ease: [0.6, 0.01, -0.05, 0.96] };

  return (
    <div ref={divRef}>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
        className="single"
      >
        <div className="container fluid">
          <div className="row center top-row">
            <div className="top">
              <motion.div initial={{ opacity: 1 }} className="details">
                <div className="mua">{person?.role}</div>
              </motion.div>
              <motion.div initial={{ opacity: 1 }} className="model">
                <span className="first">
                  {person?.lastName.split("").map((letter, index) => (
                    <span key={index}>{letter}</span>
                  ))}
                </span>
                <span className="last">
                  {person?.firstName.split("").map((letter, index) => (
                    <span key={index}>{letter}</span>
                  ))}
                </span>
              </motion.div>
            </div>
          </div>
          <div className="row bottom-row">
            <div className="bottom">
              <div className="image-container-single">
                <motion.div
                  initial={{
                    y: "-17%",
                    width: "calc(100% / 4)",
                    aspectRatio: 1 / 1.2,
                  }}
                  animate={{
                    y: "0",
                    width: "100%",
                    height:
                      window.innerWidth > 1440
                        ? 800
                        : window.innerWidth > 1280
                        ? 800
                        : window.innerWidth > 1024
                        ? 600
                        : window.innerWidth > 820
                        ? 450
                        : window.innerWidth > 540
                        ? 500
                        : 300,
                    transition: { delay: 0.3, ...transition },
                  }}
                  className="thumbnail-single"
                >
                  <div className="frame-single">
                    <motion.img
                      animate={{
                        y:
                          window.innerWidth > 1440
                            ? -800
                            : window.innerWidth > 1280
                            ? -600
                            : window.innerWidth > 840
                            ? -150
                            : window.innerWidth > 540
                            ? -70
                            : -60,
                      }}
                      src={person?.img}
                      alt="an image"
                    />
                    {/* <img src={require("../images/yasmeen.webp")} alt='an image' /> */}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="detailed-information">
          <div className="container">
            <div className="row">
              <h2 className="title">
                The insiration behind the artwork & <br /> what it means.
              </h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};
