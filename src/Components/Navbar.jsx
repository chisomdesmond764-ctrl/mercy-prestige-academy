import  React, {useState} from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import "./Navbar.css";


const Navbar = () => {

  const [classesOpen, setClassesOpen] = useState(false);

  const toggleClasses = () => {
    setClassesOpen(!classesOpen);
  };

  return (
    <div className="NavbarContainer">
      <nav className="Navbar">
        <div className="Logo">Mercy Prestige Academy</div>
          <div className="NavLinksContainer">

           <ul className="NavLinks">
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>

              <li className="Navbardropdown"
              onMouseEnter={() => setClassesOpen(true)}    
              onMouseLeave={() => setClassesOpen(false)} 
            >
                <Link to="/classes" onClick={toggleClasses}>Classes{classesOpen ? <FaTimes /> : <FaBars />} </Link>
                <ul className={`Navdropdown-menu ${classesOpen ? "open" : ""}`}>
                  <li><Link to="/classes/nursery">Nursery</Link></li>
                  <li><Link to="/classes/primary">Primary</Link></li>
                </ul>
              </li>
              
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/contacts">Contact</Link></li>
           </ul>
        </div>
             
    <div className="Navbutton">
       <button onClick={() => alert("Enrolled!")}>Enroll your child <FiArrowRight /></button>
    </div>
  </nav>
</div>
  );
};

export default Navbar;

