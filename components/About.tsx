import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        src="/myImage.jpeg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[450px] xl:mt-24 xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-semibold ">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-base text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          quos cupiditate sit culpa architecto ullam dolore itaque quas quo,
          dolorem, repellat officiis voluptate odio neque natus. Explicabo
          reiciendis deserunt nostrum consectetur, molestiae ea maiores
          laudantium officia tenetur officiis aut aperiam deleniti, hic animi
          beatae harum voluptas facilis.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
