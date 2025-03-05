const Footer = () => {
    return (
      <footer className=" py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between items-start max-md:flex-col max-md:items-center max-md:text-center max-md:gap-4">
            
            {/* Logo e descrição */}
            <div className="flex-1 min-w-[200px] space-y-3">
              <h1 className="text-neutral-700 text-2xl font-bold">Osande de Jesus</h1>
              <p className="text-neutral-400">
                <i className="fa-solid fa-bracket-curly"></i> Desenvolvedor Web Junior{" "}
                <i className="fa-solid fa-bracket-curly-right"></i>
              </p>
              <p className="text-neutral-500">&copy; 2025 - Todos os direitos reservados.</p>
            </div>
  
            {/* Links de contato */}
            <div className="flex-2 flex flex-wrap justify-around w-full md:w-auto mt-6 md:mt-0 max-md:flex-col max-md:items-center max-md:gap-8">
              
              <div className="min-w-[150px]">
                <h4 className="text-neutral-700 text-lg font-semibold mb-3">Contacte-me</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://contate.me/osandej" className="text-neutral-400 hover:text-[#f8efb6] transition">
                      WhatsApp
                    </a>
                  </li>
                  <li className="text-neutral-400">
                    Telemóvel (+244):<br />
                    922728954 / 958844760
                  </li>
                  <li className="text-neutral-400">
                    Email:{" "}
                    <a href="mailto:osande.lc17@gmail.com" className="hover:text-[#f8efb6] transition duration-300">
                      osande.lc17@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
  
              {/* Redes sociais */}
              <div className="min-w-[150px]">
                <h4 className="text-neutral-700 text-lg font-semibold mb-3">Redes Sociais</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.instagram.com/osande_euu/" className="text-neutral-400 hover:text-[#f8efb6] transition">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/OsandeJ/" className="text-neutral-400 hover:text-[#f8efb6] transition">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/osande.rodrigues/" className="text-neutral-400 hover:text-[#f8efb6] transition">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
  
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  