import React from "react";
import logo from "../assets/raviKumarLogo.webp"
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Navbar: React.FC = () => {
// Add scroll logic to show/hide navbar
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const handleScroll = () => {
//     if (window.scrollY < lastScrollY) {
//       setShowNavbar(true); // Scrolling up
//     } else {
//       setShowNavbar(false); // Scrolling down
//     }
//     setLastScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);

  return(
  //<nav className={`fixed flex items-center justify-between top-0 left-0 right-0 z-50 bg-opacity-80 backdrop-blur-sm transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}> 
  <nav className="flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <a href="/" aria-label="Home">
        <img src={logo} className="mx-2 w-12 h-12" alt="Logo" />
      </a>
      {/* <div className="flex gap-6 text-sm ml-4">
          <a href="#Technologies" className="hover:text-cyan-400">Technologies</a>
          <a href="#Experience" className="hover:text-cyan-400">Experience</a>
          <a href="#Projects" className="hover:text-cyan-400">Projects</a>
          <a href="#Contact" className="hover:text-cyan-400">Contact Me</a>
        </div> */}
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/rendell-padu/" 
         target = "_blank" 
         rel="noopener noreferrer"
         aria-label="LinkedIn">
           <FaLinkedin />
      </a>
      <a href="https://github.com/rendell-padu02" 
         target = "_blank" 
         rel="noopener noreferrer"
         aria-label="GitHub">
           <FaGithub />
      </a>
      <a href="https://www.instagram.com/rendellrocks?igsh=Nzl1bXR5bmoyN2Vv&utm_source=qr" 
         target = "_blank" 
         rel="noopener noreferrer"
         aria-label="Instagram">
           <FaInstagram />
      </a>
    </div>
  </nav>
)
};

export default Navbar;
