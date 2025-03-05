import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

function Tecnologias() {
    return (
        <div className="border-b-2 border-neutral-600 lg:mb-7 mt-5 px-4 sm:px-8 pb-24">
            <h2 className="my-20 text-center text-3xl lg:text-4xl font-extralight">Tecnologias</h2>
            
            {/* Container FLEX para alinhar os ícones em linha */}
            <div className="flex flex-wrap justify-center gap-8">
                {[ 
                    { icon: FaHtml5, color: "#E44D26", name: "HTML5" },
                    { icon: FaCss3Alt, color: "#264DE4", name: "CSS3" },
                    { icon: IoLogoJavascript, color: "#F7DF1E", name: "JavaScript" },
                    { icon: FaNodeJs, color: "#8CC84B", name: "NodeJS" },
                    { icon: FaReact, color: "#61DAFB", name: "ReactJS" },
                    { icon: RiTailwindCssFill, color: "#06B6D4", name: "Tailwind CSS" },
                    { icon: SiTypescript, color: "#007ACC", name: "TypeScript" }
                ].map(({ icon: Icon, color, name }, index) => (
                    <motion.div 
                        key={name}
                        className="text-center"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: index * 0.2 }}
                    >
                        <Icon className={`text-9xl`} style={{ color }} />
                        <h3 className="text-2xl font-extralight text-neutral-300">{name}</h3>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Tecnologias;
