import React from "react";
import Banner from "../../components/banner/banner";
import Footer from "../../components/footer/footer";
import FooterRisk from "../../components/footer/footer-risk";
import Header from "../../components/header/header";
import countries from '../../common_resources/countries.json'
import google from '../../assets/google.svg'
import whitefacebook from '../../assets/facebook_white.svg'

import './register.scss'
import Blockcard from "../../components/withrawals-cards/block-card";



export default function Register(props){
    

    return <>
        <Header link = {props.teg}/>
        <div className="container_register">
                <h3>Sign Up</h3>
            <div style={{'maxWidth':'425px'}}>
            <form className="form_register">
                <div>
                    <select placeholder="Select your country" className="form_register__select" required>
                        {countries.data.rows.map(i => <option value={i.code}>{i.name}</option>)}
                    </select>
                </div>
                <span className="annotation">
                Please make sure this is your country of permanent residence
                </span>
                <div className="form_register__fields">
                <input className="form_register__input" placeholder="Email" type="Email" required/>
                </div>
                <div className="form_register__fields">
                <input className="form_register__input" type='password' placeholder="Password" required/>
                </div>
                <div class="form-check form_register__fields">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" required/>
                    <label className="annotation">
                        I confirm that I am 18 years old or older and accept the <a className="link">Terms & Condition</a>, <a className="link">Privacy Policy</a> and <a className="link">Order Execution Policy</a>
                    </label>
                </div>
                <div className='form_register form_register__fields'>
                        <button type='submit' className='btn_big btn_big--green'>
                        Open an Account for Free
                        </button>
                    </div>
            </form>
            <div className='social_account' style={{'margin': '0'}}>
                    <div className='social_account__title'>
                        <span>or use a social account</span>
                    </div>
            </div>
            <div className="btn_group">
                <button className="btn_md btn_md--blue">
                    <img src={whitefacebook} alt="" />
                </button>
                <button className="btn_md btn_md--white">
                    <img src={google} alt="" />
                </button>
            </div>
            <div className='back_text' style={{'paddingBottom':'30px'}}>
                    <span>Already have account?</span><a href='/register' className='back_text__link'> Log In</a> now
                </div>
            <FooterRisk/>
            </div>
        </div>
        <div className="space">
        <div className='footer__line'></div>
            <div style={{'padding':'30px 0'}}>
                <Blockcard />
            </div>
        <div className='footer__line'></div>
        </div>
        <Banner link = {props.teg}/>
        <Footer />
        </>
}