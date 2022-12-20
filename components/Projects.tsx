import { MotionConfig } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const projects = [1, 2, 3, 4, 5];

function Projects({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll over-y-hidden snap-x z-20 snap-mandatorymen  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src="data:image/png;base64,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"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case study {i + 1} of {projects.length}:
                </span>
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                non fugiat eius quaerat deserunt autem eum, adipisci
                necessitatibus aut accusamus ipsa iste facilis cum distinctio.
                Neque expedita aspernatur ad deleniti!
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
