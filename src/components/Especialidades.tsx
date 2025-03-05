import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.8 } },
  exit: { opacity: 0, transition: { staggerChildren: 0.2, staggerDirection: -1 } },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.6, ease: "easeIn" } },
};

const especialidades = [
  { icon: "fa-laptop-code", title: "Website", description: "Crio websites modernos, responsivos e otimizados, garantindo uma navegação fluida e intuitiva. Transformo ideias em páginas funcionais, dando vida ao teu projeto na web!" },
  { icon: "fa-blog", title: "Blog", description: "Desenvolvo blogs dinâmicos, fáceis de gerir e otimizados para SEO. Perfeitos para partilhar conhecimento, fortalecer a tua marca e alcançar mais leitores." },
  { icon: "fa-cart-shopping", title: "Loja Online", description: "Construo lojas online seguras, intuitivas e focadas em vendas. Proporciono uma experiência de compra fluída para transformar visitantes em clientes fiéis." },
];

const Especialidades = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(isInView);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="border-b-2 border-neutral-600 lg:mb-7 mt-5 px-4 sm:px-8 pb-24"
      variants={containerVariants}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "exit"}
    >
      <h2 className="my-20 text-center text-3xl lg:text-4xl font-extralight">
        Minhas <span className="text-neutral-500 font-normal">especialidades</span>
      </h2>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
        {especialidades.map((esp, index) => (
          <motion.div
            key={index}
            className="cursor-pointer p-6 rounded-2xl text-center transition-all duration-500 hover:shadow-[0_0_35px_1px_#ffffff54] hover:scale-102 transform min-h-[250px] w-[90%] mx-auto"
            variants={itemVariants}
          >
            <i className={`fa-solid ${esp.icon} text-5xl text-[#ffffffbf] font-light`}></i>
            <h3 className="text-xl text-[#ffffffbf] font-normal mt-4">{esp.title}</h3>
            <p className="text-[#c5c5c5] mt-2 text-justify max-md:text-[16px]">{esp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Especialidades;