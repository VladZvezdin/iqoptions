import './footer.scss'
import instagram from './assets/insta_logo.svg'
import facebook from './assets/facebook_logo.svg'
import twitter  from './assets/twitter_logo.svg'
import googleplay from './assets/googleplay.svg'
import telegram from './assets/telegram_logo.svg'
import youtube from './assets/youtube_logo.svg'

export default function footer_login() {
    return <div className='footer_login'>
        <div className='footer_login__line'></div>
        <div className='footer_login__body '>
            <div style={{'padding-right':'30px', 'paddingTop': '15px'}}>
                <div className='footer_login__body__risk'>
                    <div className='footer_login__body__risk__title'>
                        <span><b>RISK WARNING</b></span>
                    </div>
                    <span>CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.</span>
                    <b>79% of retail investor accounts lose money when trading CFDs with this provider.</b>
                    <span>You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</span>
                </div>
                <div>
                        <span className='footer_login__body--text'>To submit an inquiry, please contact us at <a className='footer_login__body--link'>support@eu.iqoption.com</a>.</span><br/>
                        <span className='footer_login__body--text'>To <b>submit a complaint</b>, please email us at <a className='footer_login__body--link'>complaints@iqoption.com</a>. For more information, please refer to our Complaints Policy.</span>
                </div>
                <div style={{'padding-top':'20px'}}>
                    <span className='footer_login__body--text' style={{'color':'GrayText'}}>
                        You are granted limited non-exclusive non-transferable rights to use the IP provided on this website for
                        personal and non-commercial purposes in relation to the services offered on the Website only.
                    </span>
                </div>
                <div style={{'padding':'20px 0'}}>
                    <span className='footer_login__body--text' style={{'color':'GrayText'}}>
                    <b>eu.iqoption.com</b> is owned and operated by Iqoption Europe Ltd.
                    </span>
                </div>
            </div>
            <div>
            <div className='footer_login__side'>
                <a className='cysec'>
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
                <a className='dowApp'>
                    <div className='applogo'>
                        <img src="https://static.cdnpub.info/v5/static/images/ios.b008768b8297d427cdadd05eae9eb83c.svg" alt="" />
                    </div>
                    <div className='ios'></div>
                </a>
                <a className='dowApp'>
                    <div className='applogo'>
                        <img src={googleplay} alt="" />
                    </div>
                    <div className='google'></div>
                </a>
            </div>
            </div>
        </div>
        <div className='footer_login__line'></div>
        <div className='row footer_login__body__end'>
            <div className='col-md-6 footer_login__body__end footer_login__body__end--contacts'>
                <a href=''><img src={facebook} alt="" /></a>
                <a href=''><img src={telegram} alt="" /></a>
                <a href=''><img src={twitter} alt="" /></a>
                <a href='' style={{'paddingLeft':'5px'}}><img src={instagram} alt="" className='instagram'/></a>
                <a href='' style={{'paddingLeft':'8px'}} ><img src={youtube} alt="" className='youtube' /></a>
            </div>
            <div className='col-md-6 footer_login__body__end footer_login__body__end--IQ'>
            IQ Option, © 2013-2022
            </div>
        </div>
    </div>

}