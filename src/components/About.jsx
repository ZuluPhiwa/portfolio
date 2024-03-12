import React from "react";
import I from "../assets/I.png";
import { FaReact, FaGoogle, FaHtml5, FaCss3, FaFire } from "react-icons/fa";
import blob from "../assets/blob.svg";
const About = () => {
  return (
    <div className="bg-slate-950" id="about">
      <div className="text-white p-8">
        <p className="font-bold text-3xl py-4">About</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p>
              I am a very motivated, professional, diligent, and committed team
              player with a bachelor's degree in computer science and over 3
              years of coding experience that realizes the value of performing
              my obligations to the highest possible degree. Regardless of the
              circumstance, I am committed to ongoing improvement and will
              constantly look for new methods to learn and grow by consulting
              others. I do approach every work with a positive attitude,
              enthusiasm and possess a keen eye for solving complex issues.
              Finally, I can be counted on to execute all jobs to a very high
              professional standard and within specified timelines while
              remaining flexible and trustworthy.
            </p>
            <h1 className="text-center mx-auto justify-center font-tahoma font-bold text-2xl py-4 px-4 uppercase">
              Tech Stack
            </h1>
            <div className="md:flex px-2 grid grid-cols-2">
              <ul className=" md:flex grid grid-cols-2 gap-5 md:gap-0">
                <li className="flex-col px-11  py-4  md:px-9">
                  <FaGoogle size={51} />
                  <p className=" font-tahoma  pt-3">Flutter</p>
                </li>
                <li className="flex-col px-11  py-4 md:px-9">
                  <FaReact size={51} />{" "}
                  <p className=" font-tahoma  pt-3">ReactJs</p>
                </li>
                <li className="flex-col px-11  py-4 md:px-9">
                  <FaCss3 size={51} />
                  <p className=" font-tahoma  pt-3">Tailwind Css</p>
                </li>
                <li className="flex-col px-11  py-4 md:px-9">
                  <FaHtml5 size={51} />{" "}
                  <p className=" font-tahoma  pt-3">HTML5</p>
                </li>
                <li className="flex-col px-11  py-4 md:px-9">
                  <FaFire size={51} />
                  <p className=" font-tahoma  pt-3">Firebase</p>
                </li>
              </ul>
            </div>
          </div>

          <div className=" hidden md:block relative mix-blend-lighten">
            <img
              src={blob}
              alt="SVG "
              className="absolute object-right bottom-0"
            />
            <img
              src={I}
              alt="Banner"
              className="z-10 absolute object-right pr-8   bottom-56 left-16 object-contain h-[88%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
