import { HERO_CONTENT } from "../constants/index";
import ProfilePic from "../assets/OsandeJ.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Constante para a animação vindo da esquerda
const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay },
  }),
};

function Topo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px" });

  return (
    <div ref={ref} className="border-b-2 border-neutral-600 lg:mb-7 mt-5 px-4 sm:px-8 pb-24">
      <div className="flex flex-wrap max-lg:flex-col-reverse items-center gap-10 md:gap-20 lg:gap-40 justify-center lg:justify-between">
        
        {/* Texto */}
        <div className="w-full md:w-3/4 lg:w-1/2 text-center lg:text-left">
          
          {/* Nome */}
          <motion.h1
            variants={fadeInFromLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.2} 
            className="pb-6 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-thin tracking-tight"
          >
            Osande de Jesus
          </motion.h1>

          {/* Profissão */}
          <motion.span
            variants={fadeInFromLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.5} 
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-300 bg-clip-text text-xl sm:text-3xl md:text-3xl tracking-tight text-transparent inline-block"
          >
            Desenvolvedor Frontend
          </motion.span>

          {/* Descrição */}
          <motion.p
            variants={fadeInFromLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.8} 
            className="my-2 max-w-xl text-lg text-justify text-neutral-300 font-light leading-relaxed max-md:text-justify max-md:text-[16px]"
          >
            {HERO_CONTENT} <br />
          </motion.p>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-auto flex justify-center lg:justify-end">
          <img
            src={ProfilePic}
            alt="Osande de Jesus"
            className="rounded-4xl w-32 h-32 sm:w-40 sm:h-40 md:w-50 md:h-50 lg:w-105 lg:h-105"
          />
        </div>
      </div>
    </div>
  );
}

export default Topo;
