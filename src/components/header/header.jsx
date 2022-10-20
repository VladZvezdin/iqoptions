import React from "react";
import { useEffect,useState } from "react";
import '../../assets/css/bootstrap.min.css'
import './header.scss'

export default function Header(props){
  let [link, setLink] = useState('')
  const[axis,setAxis] = useState('');
  const[navbar, setNavbar] = useState(false);
  useEffect(()=>{
    if (props.link === '/') {setAxis(30)}
    if (props.link === 'login') {setLink('login'); setAxis(0)}
    if (props.link === 'register'){setLink('register'); setAxis(0);setNavbar(true)}
    console.log(link);
  },[])
  const changeNavbar = () =>{
    if(window.scrollY >= axis){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }


  window.addEventListener('scroll', changeNavbar)
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => {setOpen(true); setOpen2(false);setOpen3(false);setOpen4(false)};
  const handleClose = () =>{setOpen(false)};
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => {setOpen2(true); setOpen(false); setOpen3(false);setOpen4(false)};
  const handleClose2 = () =>{setOpen2(false)};
  const [open3, setOpen3] = useState(false);
  const handleOpen3 = () => {setOpen3(true); setOpen2(false); setOpen(false);setOpen4(false)};
  const handleClose3 = () =>{setOpen3(false)};
  const [open4, setOpen4] = useState(false);
  const handleOpen4 = () => {setOpen4(true); setOpen3(false); setOpen2(false);setOpen(false)};
  const handleClose4 = () =>{setOpen4(false)};
  const handleClose5 = () => {setOpen4(false); setOpen3(false); setOpen2(false);setOpen(false)};





    return <div className={`header ${!navbar ? '' : 'active'} sticky-top`}>
        <div onMouseLeave={handleClose5}>
            <a ><img src="" alt="iqoption"/></a>
            {link !== 'login' && <a className="brdr"  onMouseEnter={handleOpen}>Trade</a>}
                  {open ? (
              <div className={`menu ${open ? 'menu--open': ''} menu--first`} onMouseLeave={handleClose}>
                <li className="menu-item">
                  <a>Stocks</a>
                </li>
                <li className="menu-item">
                  <a>Forex</a>
                </li>
                <li className="menu-item">
                  <a>Cryptocurrencies</a>
                </li>
              </div>
            ) : null}
            {link !== 'login' && <a className="brdr" onMouseEnter={handleOpen2}>For Traders</a>}
            {open2 ? (
              <ul className={`menu ${open2 ? 'menu--open': ''}`} onMouseLeave={handleClose2}>
                <div className="row menu--second">
                  <div className="col-md-3">
                  <li className="menu-item">
                  <a>News Feed</a>
                </li>
                <li className="menu-item">
                  <a>Assets</a>
                </li>
                <li className="menu-item">
                  <a>Stock Collection</a>
                </li>
                <li className="menu-item">
                  <a>Industries</a>
                </li>
                  </div>
                  <div className="col-md-3">
                  <li className="menu-item">
                  <a>Calendars</a>
                </li>
                <li className="menu-item">
                  <a>Video Tutoials</a>
                </li>
                <li className="menu-item">
                  <a>Our Blog</a>
                </li>
                <li className="menu-item">
                  <a>Help</a>
                </li>
                  </div>
                  <div className="col-md-3">
                  <li className="menu-item">
                  <a>Download App</a>
                </li>
                <li className="menu-item">
                  <a>Trading Specifications</a>
                </li>
                <li className="menu-item">
                  <a>The Basics of Margin Trading</a>
                </li>
                <li className="menu-item">
                  <a>Client Categories</a>
                </li>
                  </div>
                  <div className="col-md-3">
                  <li className="menu-item">
                  <a>Deposits & Withdrawals</a>
                </li>
                  </div>
                </div>
              </ul>
            ) : null}
            {link !== 'login' && <a className="brdr" onMouseEnter={handleOpen3}>About Us</a>}
            {open3 ? (
              <ul className={`menu ${open3 ? 'menu--open': ''}`} onMouseLeave={handleClose3}>
                <div className="row menu--thirt">
                  <div className="col-md-3">
                  <li className="menu-item">
                  <a>IQ Option in Numbers</a>
                </li>
                <li className="menu-item">
                  <a>IQ Option in Press</a>
                </li>
                <li className="menu-item">
                  <a>Awards</a>
                </li>
                <li className="menu-item">
                  <a>Careers</a>
                </li>
                  </div>
                  <div className="col-md-3">
                  <li className="menu-item">
                  <a>Contuct Us</a>
                </li>
                <li className="menu-item">
                  <a>Charitable Foundation</a>
                </li>
                  </div>
                </div>
              </ul>
            ) : null}
            {link !== 'login' && <a className="brdr" onMouseEnter={handleOpen4}>Regulation </a>}
            {open4 ? (
              <ul className={`menu ${open4 ? 'menu--open': ''}`} onMouseLeave={handleClose4}>
                <div className="row menu--thirt">
                  <div className="col-md-4">
                  <li className="menu-item">
                  <a>Regulation</a>
                </li>
                <li className="menu-item">
                  <a>Protect Your Assets</a>
                </li>
                <li className="menu-item">
                  <a>Terms & Condition</a>
                </li>
                  </div>
                </div>
              </ul>
            ) : null}
            <div className="dropdown">
      
    </div>
            
        </div>
        <div>
            <a><img src=" " alt=""/> lang</a>
            {link !== 'login' && <a className={`loginbtn ${!navbar ? '' : 'active'}`} href="/login">Log in</a>}
            {link !== 'register' && <a className="signupbtn" href="/register">Sign Up</a>}
        </div>

    </div>
}