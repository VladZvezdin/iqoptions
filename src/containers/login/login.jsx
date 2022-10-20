import Header from './components/header/header'
import Banner from '../intro/components/banner/banner'
import Footer_login from './components/footer/footer'
import './login.scss'
import '../../assets/css/buttons.scss'
import whitefacebook from '../../assets/facebook_white.svg'
import google from '../../assets/google.svg'


export default function Login() {

    return <>
        <Header />
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
                    <span>Don't have an Account?</span><a href='/registration' className='back_text__link'>Sign up</a>
                </div>
                <div className='footer__body__risk' style={{'padding':'16px 14px'}}>
                    <div className='footer__body__risk__title'>
                        <span><b>RISK WARNING</b></span>
                    </div>
                    <span>CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.</span>
                    <b>79% of retail investor accounts lose money when trading CFDs with this provider.</b>
                    <span>You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</span>
                    <div className='cysec_login'>
                    <a className='cysec' style={{'margin': '0px', 'paddingLeft':'15px'}}>
                    <div className='cysec__title'>CySEC</div>
                    <div style={{'font-size': '10px'}}>
                        <div>
                            <span>Regulated</span>
                        </div>
                        <div>
                            <b>LICENCE 247/14</b>
                        </div>
                    </div>
                </a>
                    </div>
                </div>
            </div>
        </div>
        


            {/* <Banner /> */}
            <Footer_login />
        </>
}