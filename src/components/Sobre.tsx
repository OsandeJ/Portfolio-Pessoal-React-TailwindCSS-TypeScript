import { useState } from "react";
import SobreIMG from "../assets/laptop-with-glowing-screen-table-dark-top-view-copy-space.jpg";

function Sobre() {
  const [glowPosition, setGlowPosition] = useState({ x: "50%", y: "50%" });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setGlowPosition({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <div className="border-b-2 border-neutral-600 lg:mb-7 mt-5 px-4 sm:px-8 pb-24">
      <h2 className="my-20 text-center text-3xl lg:text-4xl font-extralight">
        Sobre <span className="text-neutral-500 font-normal">mim</span>
      </h2>
      <div className="flex flex-wrap justify-center lg:justify-between items-center">
        {/* Imagem com efeito de glow */}
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center relative">
          <div
            className="relative rounded-2xl overflow-hidden group"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={SobreIMG}
              alt="sobre"
              className="w-full h-auto max-w-md rounded-2xl transition duration-300 brightness-90"
            />
            {/* Glow Overlay */}
            {isHovered && (
              <div
                className="absolute inset-0 pointer-events-none transition duration-300"
                style={{
                  background: `radial-gradient(circle 100px at ${glowPosition.x} ${glowPosition.y}, rgba(255,255,255,0.3), rgba(255,255,255,0) 80%)`
                }}
              />
            )}
          </div>
        </div>

        {/* Texto de apresentação */}
        <div className="w-full lg:w-1/2 lg:p-5">
          <p className="my-2 max-w-xl text-lg text-justify text-neutral-300 font-light leading-relaxed max-md:text-justify max-md:text-[16px]">
            Muito prazer!{" "}
            <span className="text-[#f8efb6] font-bold text-xl max-md:text-[18px]">
              Sou Osande de Jesus.
            </span>{" "}
            Nascido em 10/03/2006, sou estudante de Informática e desenvolvedor web júnior, com conhecimentos em
            HTML, CSS, JavaScript, Bootstrap, ReactJS, NodeJS, Git, GitHub, entre outras tecnologias. Sou apaixonado por
            tecnologia e programação, e estou sempre aprendendo novas tecnologias para melhorar minhas habilidades.
          </p>
          <br />
          <p className="my-2 max-w-xl text-lg text-neutral-300 font-light text-justify max-md:text-[16px]">
            Estou disponível para trabalhos freelancers e para colaborar em projetos. Se precisar de um desenvolvedor web,
            entre em contato comigo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
