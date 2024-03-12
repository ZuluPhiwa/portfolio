import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { TypeAnimation } from "react-type-animation";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
const Home = () => {
  return (
    <div id="/">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-8 font-bryson font-extrabold bg-clip-text text-center text-6xl tracking-wide uppercase text-transparent md:text-7xl"
        >
          Hi, Im <br />
          Phiwa Zulu
        </motion.h1>
        <h1 className="uppercase text-center text-[#cf976a]  font-extrabold text-4xl md:text-8xl ">
          <p className=" text-[11px] md:text-lg text-center">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially

                4000,
                "I am a Mobile App Developer",
                4000,
                "I am a Front-End Web Dev",
                4000,
                "I am a Sotfware Engineer",
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
        </h1>
      </LampContainer>
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
