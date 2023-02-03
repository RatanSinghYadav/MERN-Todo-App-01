import React from 'react';
import './style/navbar_style.css';

function Navbar() {
  return (
    <div>
      <div className="container-fluid  bg-dark">
                <div className="navbar">
                    <div className="logo">
                    <h2>logo</h2>
                    </div>
                    <nav>
                        <input placeholder="product name, category name,etc." type="text" />
                        <button>Search</button>
                    </nav>
                    <div className="end flex-wrap">
                        <h5><a href="./login.html">login</a></h5>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Navbar;