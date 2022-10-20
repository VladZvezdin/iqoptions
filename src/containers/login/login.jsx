import React from 'react'
import Header from '../../components/header/header'
import Banner from '../../components/banner/banner'
import Footer_login from './components/footer/footer'
import './login.scss'
import '../../assets/css/buttons.scss'
import whitefacebook from '../../assets/facebook_white.svg'
import google from '../../assets/google.svg'
import FooterRisk from '../../components/footer/footer-risk'


export default function Login(props) {
    return <>
        <Header link = {props.teg}/>
        <div className='container_login'>
            <h3 className='title_login'>Log In</h3>
            <div style={{'maxWidth':'350px'}}>
                <form>
                    <div className='form_login'>
                        <input className='' placeholder='Phone number or Email'>
                        </input>
                    </div>
                    <div className='form_login'>
                        <input className='' type='password' placeholder='Password'>
                        </input>
                    </div>
                    <div className='form_login'>
                        <button type='submit' className='btn_big btn_big--green'>
                            Log In
                        </button>
                    </div>
                </form>
                <div className='social_account'>
                    <div className='social_account__title'>
                        <span>or use a social account</span>
                    </div>
                </div>
                <button className='btn_big btn_big--with_logo btn_big--blue'>
                    <div className='btn_big__logo_and_text'>
                        <div>
                            <img src={whitefacebook} alt="" />
                        </div>
                        <div className='btn_text'>
                            Log in with Facebook
                        </div>
                    </div>
                </button>
                <button className='btn_big btn_big--with_logo btn_big--white'>
                <div className='btn_big__logo_and_text'>
                        <div>
                            <img src={google} alt="" />
                        </div>
                        <div className='btn_text'>
                            Log in with Google
                        </div>
                    </div>
                </button>
                <div className='back_text'>
                    <a href='' className='back_text__link'>Forgot password?</a>
                </div>
                <div className='back_text' style={{'paddingBottom':'30px'}}>
                    <span>Don't have an Account?</span><a href='/register' className='back_text__link'>Sign up</a>
                </div>
                <FooterRisk/>
            </div>
        </div>
            <Banner link={props.teg}/>
            <Footer_login />
        </>
}