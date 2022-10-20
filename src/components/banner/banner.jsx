import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './banner.css'


export default function Banner (props){
  const[axis,setAxis] = useState(4350)
  useEffect(()=>{
    if (props.link === 'login') {setAxis(310)}
    console.log(axis);
  },[])
    const[banner, setBanner] = useState(false);
  const hideBanner = () =>{
    if(window.scrollY <= axis){
        setBanner(true)
    }else{
        setBanner(false)
    }
  }

  window.addEventListener('scroll', hideBanner)

  return <div className={`banner ${banner ? '':'inactive'} sticky-bottom` }>
    <span>
    CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
    <b>79% of retail investor accounts lose money when trading CFDs with this provider.</b>
    You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
    </span>
  </div>
}