import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
  const [show, handleshow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true)
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll")
    }
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKyqXC1I7aCN-fZmgW2sLJnt4HuJGDhwb2WQ&usqp=CAU"
        alt="Watch Now Logo"
      />
     
    </div>
  )
}

export default Nav
