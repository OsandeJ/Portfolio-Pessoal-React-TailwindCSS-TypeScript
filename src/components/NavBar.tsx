import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function NavBar () {
  return (
    <>
    <nav className="mb-0 flex items-center justify-between p-6">
      <div className="flex items-center flex-shrink-0 ">
        <a href="#Home" className="cursor-pointer p-3 ransition-all duration-300 hover:scale-107"><span className="text-5xl font-medium text-neutral-300 ">OJ</span></a>
        </div>
        <div className="m-8 flex gap-4 items-center justify-center text-3xl text-neutral-300">
            
            <a href="https://www.linkedin.com/in/OsandeJ/" target="_blank" rel="noreferrer" className="transition-all duration-300 hover:scale-107 ">
                <FaLinkedin/>
            </a>
            <a href="https://github.com/OsandeJ" target="_blank" rel="noreferrer" className="transition-all duration-300 hover:scale-107" >
                <FaGithub/>
            </a>
            <a href="https://www.facebook.com/osande.rodrigues/" target="_blank" rel="noreferrer" className="transition-all duration-300 hover:scale-107" >
                <FaFacebookSquare/>
            </a>
            <a href="https://www.instagram.com/osande_euu/" target="_blank" rel="noreferrer" className="transition-all duration-300 hover:scale-107" > 
                <FaInstagram/>
            </a>
        </div>
    </nav>
    </>
  );
}
export default NavBar;