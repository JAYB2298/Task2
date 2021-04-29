import React from "react";


let Navbar = () => {
  return (
    <React.Fragment>
   
      <nav className=" navbar navbar-expand-lg bg-primary text-white">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav " >
            <li  className="nav-nav-item  ">
              <h1>XYZ NAME</h1>
            </li>
            </ul >
          <ul className=" navbar-nav ml-auto ">
            <li className="nav-item">
              <h1>LOGO</h1>
            </li>
          </ul>
              
          
        </div>
      </nav>
    
    </React.Fragment>
  );
};
export default Navbar;