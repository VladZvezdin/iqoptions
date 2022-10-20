import React from "react";
import Banner from "../../components/banner/banner";
import Footer from "../../components/footer/footer";
import FooterRisk from "../../components/footer/footer-risk";
import Header from "../../components/header/header";
import countries from '../../common_resources/countries.json'

import './register.scss'



export default function Register(props){
    

    return <>
        <Header link = {props.teg}/>
        <div className="container_register">
                <h3>Sign Up</h3>
            <div style={{'maxWidth':'425px'}}>
            <form className="form_register">
                <div>
                    <select placeholder="Select your country" className="form_register__select">
                        {countries.data.rows.map(i => <option value={i.code}>{i.name}</option>)}
                    </select>
                </div>
                <span className="annotation">
                Please make sure this is your country of permanent residence
                </span>
                <div className="form_register__fields">
                <input className="form_register__input" placeholder="Email" />
                </div>
                <div className="form_register__fields">
                <input className="form_register__input" type='password' placeholder="Password"/>
                </div>
                <div class="form-check form_register__fields">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
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
            


            <FooterRisk/>
            </div>
        </div>
    


        <Banner link = {props.teg}/>
        <Footer />
        </>
}