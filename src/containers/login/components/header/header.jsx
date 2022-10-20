import React from "react";
import { useState } from "react";
import '../../../../assets/css/bootstrap.min.css'
import './header.scss'
import { useEffect } from "react";

export default function Header(){

  const[navbar, setNavbar] = useState(false);
  const changeNavbar = () =>{
    if(window.scrollY >= 30){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNavbar)
  
    return <div className={`header ${!navbar ? '' : 'active'} sticky-top`}>
        <div>
            <a ><img src="" alt="iqoption"/></a>
        </div>
          <div>
            <a><img src=" " alt=""/> lang</a>
            <a className="signupbtn" href="/registration">Sign Up</a>
          </div>

    </div>
}