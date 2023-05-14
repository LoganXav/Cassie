import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

const banner: Variants = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni: Variants = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};



interface Props {
    title: string;
    playMarquee?: boolean;
    disabled?: boolean;
    variants?: object | null | undefined;
}


const Banner: React.FC = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <motion.div className='banner' variants={banner}>
      <BannerRowTop title={"cassie"} />
      <BannerRowCenter title={"photography"} playMarquee={playMarquee} />
      <BannerRowBottom title={"studio"} />
    </motion.div>
  );
};



const AnimatedLetters: React.FC<Props> = ({ title, disabled }) => {
    const variants1: Variants | undefined = disabled ? undefined : banner;
    const variants2: Variants | undefined = disabled ? undefined : letterAni;             


    return (
  <motion.span
    className='row-title'
    variants={variants1}
    initial='initial'
    animate='animate'>
    {[...title].map((letter, index) => (
      <motion.span
        className='row-letter'
        variants={variants2}
        key={index}>

        {letter}
      </motion.span>
    ))}
  </motion.span>
)};


const BannerRowTop: React.FC<Props> = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className='row-col'>
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className='row-col'>
        <span className='row-message'>
          We are specialised in setting up the foundation of your brand and
          setting you up for success.
        </span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom: React.FC<Props> = ({ title }) => {
  return (
    <div className={"banner-row center"}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className='scroll'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}>
          scroll
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}>
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter: React.FC<Props> = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, 0.0, 0.9], duration: 1 }}
        className='marquee__inner'>
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </motion.div>
    </div>
  );
};

export default Banner;