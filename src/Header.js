import React, { useState } from 'react';
import './Header.css'; // Assuming you save the CSS in a file named Header.css
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <div className='head'>
      <button className='menuButton' onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`headerList ${isMenuOpen ? 'open' : ''}`}>
      <li><Link to="/" className='links' onClick={handleMenuItemClick}>Home</Link></li>
      <li><Link to="/education" className='links' onClick={handleMenuItemClick}>Education</Link></li>
      <li><Link to="/achievements" className='links' onClick={handleMenuItemClick}>Achievements</Link></li>
      <li><Link to="/research" className='links' onClick={handleMenuItemClick}>Research</Link></li>
      <li><Link to="/others" className='links' onClick={handleMenuItemClick}>Others</Link></li>

        <li>
        <a href="tel:+91944648832"  className='logo'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16" className="bi bi-telephone-fill">
                  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
                </svg>
              </a>
              </li>
            <li ><a href="https://www.linkedin.com/in/dr-yuvaraj-t-a2122159/" className='logo'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16" className="bi bi-linkedin">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>
                </svg>
              </a></li>
           
          
        <li>
        <a href="mailto:yuvaraj4252@gmail.com" className='logo'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16" className="bi bi-envelope-fill">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"></path>
                </svg>
              </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
