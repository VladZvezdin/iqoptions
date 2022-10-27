import './main.scss'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/banner'
import Swiper_bar from './components/swiper/swiper'





import banktransfer from './assets/bank-transfer.svg'
import neteller from './assets/neteller.svg'
import paypal from './assets/paypal.svg'
import skrill from './assets/skrill.svg'
import verkkopankki from './assets/verkkopankki.svg'
import visamastercard from './assets/visa-mastercard.svg'
import mac from './assets/mac-dark.svg'
import iq from './assets/iq-orange.svg'
import enjoy from './assets/840@2x.webp'
import analysis from './assets/840@1x.webp'
import risk from './assets/480@2x.webp'
import trade from './assets/480@1x.webp'
import notebook from './assets/intro_notebook.webp'
import advanced from './assets/advanced.svg'
import practice from './assets/freepractice.svg'
import support from './assets/support.svg'
import register from './assets/register.svg'
import deposits from './assets/deposits.svg'
import { useEffect, useState } from 'react'
import { getCurrencies } from '../../action/intro'
import Currency from './components/currency/currency'




export default function Main(props) {
    const [choice, setChoice] =useState(1)
    const [forex, setForex] = useState(true);
    const [stocks, setStocks] = useState(false);
    const [crypto, setCrypto] = useState(false);
    const [commodities, setCommodities] = useState(false);
    const clickOpen1 = () => {setForex(true); setStocks(false);setCrypto(false);setCommodities(false); setChoice(1)}
    const clickOpen2 = () => {setForex(false); setStocks(true);setCrypto(false);setCommodities(false); setChoice(2)}
    const clickOpen3 = () => {setForex(false); setStocks(false);setCrypto(true);setCommodities(false); setChoice(3)}
    const clickOpen4 = () => {setForex(false); setStocks(false);setCrypto(false);setCommodities(true); setChoice(4)}
    return <div className='intro_banner'>
        <Header link = {props.teg}/>
        <div className="container intimg">
            <div>
                <div className='intro'>
                    <h1>
                        <span className='intro__text'>
                            Trade Stocks, Forex, and Crypto
                        </span>
                    </h1>
                    <span className='intro__text__side'>
                        Regulated <a className='intro__text__bold'>CySEC</a> License 247/14
                    </span>
                    <div className='intro__btngr'>
                        <a className='btnfree'>
                            Trade now
                        </a>
                        <a className='btntry'> Free Practice Account</a>
                    </div>
                </div>
                <div className='intro__im2g'>
                    {/* <img src={notebook} style={{width: '70%'}}/> */}
                </div>
        </div>
        <div className='btnbinares'>
            <a className={`${forex ? 'test': ""}`} onClick={()=>{clickOpen1()}}>Forex</a>
            <a className={`${stocks ? 'test': ""}`} onClick={()=>{clickOpen2()}}>Stocks</a>
            <a className={`${crypto ? 'test': ""}`} onClick={()=>{clickOpen3()}}>Crypto</a>
            <a className={`${commodities ? 'test': ""}`} onClick={()=>{clickOpen4()}}>Commodities</a>
        </div>
        <div className='panel'>
            <Currency choice = {choice}/>
        </div>
        <div className='panel__text'>
            <span>
                *Information regarding past performance is not a reliable indicator of future performance. Leverage restrictions may apply depending on client's circumstances and/or jurisdiction.<br/>
                Potential return is the amount that will be credited to the account in case of a successful trade.
            </span>
            <div style={{'font-size': '13px', 'padding-top': '10px'}}>
                <span>CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.</span>
                <span className='panel__text panel__text--bold'>79% of retail investor accounts lose money when trading CFDs with this provider.</span>
                <span> You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</span>
            </div>  
        </div>
        </div>
        <div className='withdrawal'>
            <div className='title'>
                <span>Deposits & Withdrawals</span>
            </div>
            <div className='withdrawal__text'>
                <span>Choose between multiple payment systems to withdraw and deposit your funds quickly and securely.</span>
            </div>
            <div className='blanklink'>
            <a className='link' href='#'>Learn more</a>
            </div>
            <div className='withdrawal__blockcard'>
                <div className='withdrawal__blockcard__card'><img className='withdrawal__blockcard__card--img' src={banktransfer}/></div>
                <div className='withdrawal__blockcard__card'><img className='withdrawal__blockcard__card--img' src={neteller}/></div>
                <div className='withdrawal__blockcard__card'><img className='withdrawal__blockcard__card--img' src={paypal}/></div>
                <div className='withdrawal__blockcard__card'><img className='withdrawal__blockcard__card--img' src={skrill}/></div>
                <div className='withdrawal__blockcard__card'><img className='withdrawal__blockcard__card--img' src={verkkopankki}/></div>
                <div className='withdrawal__blockcard__card'><img className='withdrawal__blockcard__card--img' src={visamastercard}/></div>
            </div>
            <a className='btnfree btnfree--withdrawal'>Open account</a>
        </div>
        <div className='cardview'>
            <div className='cardview__card'>
                <img src={advanced} alt='advanced platform' className='cardsvg'/>
                <h4>Advanced Platform</h4>
                <span>Desktop Windows / MacOs / Web / Mobile</span>
                <div className='blanklink'>
                    <a href='#' className='link'>Download App</a>
                </div>
            </div>
            <div className='cardview__card'>
            <img src={practice} alt='free practice' className='cardsvg'/>
                <h4>Free Practice</h4>
                <span>Refillable free Practice Account of €10,000</span>
                <div className='blanklink'>
                    <a href='#' className='link'>Try Practice Account</a>
                </div>
            </div>
            <div className='cardview__card'>
                <img src={support} alt='24/7 support' className='cardsvg'/>
                <h4>24/7 Support</h4>
                <span>Prompt multilingual support</span>
                <div className='blanklink'>

                </div>
            </div>
        </div>
        <div className='container' style={{'display': 'flex',}}>
            <div className='enjoybody' style={{ 'padding': '20px'}}>
                <div className='title'>
                    <span>Enjoy the ultimate platform</span>
                </div> 
                <div className='enjoybody__text'>
                <span>
                A multichart layout, technical analysis, historical quotes and beyond. 
                Everything you're looking for in a platform — on the device of your choice.
                </span>
                </div>
                <div style={{'display': 'flex', 'width': '450px'}}>
                    <a className='btnapp'>
                        <img src={mac} alt='applogo' style={{width: 25, height: 30}}/>
                        <span>
                            <span>
                                Download app
                            </span><br/>
                            <span className='btnapp--smtxt'>
                                .dmg
                            </span>
                        </span>
                    </a>
                    <a className='btnapp'>
                        <img src={iq} alt='iqlogo' style={{width: 32, height: 32}}/>
                        <span>
                            <span>
                                Open in Browser
                            </span><br/>
                            <span className='btnapp--smtxt'>
                                Web platform
                            </span>
                        </span>
                    </a>
                </div>  
            </div>
            <div>
                <img src={enjoy} alt='' style={{'max-width': '100%',}}/>
            </div>
        </div>
        <div className='main-features'>
            <div className='title' style={{'textAlign':'center',paddingBottom: '32px'}}>
                <span>Features</span>
            </div>
            <div className='main-features__card'>
                <div style={{'max-width':'515px'}}>
                    <div className='title title--sub'>
                        <span>Analysis & Alerts</span>
                    </div>
                    <div className='main-features__text'>
                        <span>
                        Get the most out of fundamental and technical analysis with our News Feed and Economic Calendars.
                        More than 100 most widely-used technical indicators and widgets. Always stay up-to-date on what is
                        happening in financial markets with our customizable price alerts.
                        </span>
                    </div>
                </div>
                <div>
                    <img src={analysis} alt='' className='main-features__analysis'/>
                </div>
            </div>
            <div className='main-features__card'>
                <div style={{'max-width':'500px',}}>
                    <img src={risk} alt='' className='main-features__risk'/>
                </div>
                <div style={{'max-width':'500px','paddingLeft':'30px'}}>
                    <div className='title title--sub'>
                        <span>Risk Management</span>
                    </div>
                    <div className='main-features__text'>
                        <span>
                        With features like Stop Loss/Take Profit, Negative balance protection and Trailing Stop you can 
                        manage your losses and profits at the levels predetermined by you.
                        </span>
                    </div>
                </div>
            </div>
            <div className='main-features__card'>
                <div style={{'max-width':'470px'}}>
                    <div className='title title--sub'>
                        <span>Trading community</span>
                    </div>
                    <div className='main-features__text'>
                        <span>
                        Join the massive IQ Option community, discuss trading ideas and opportunities, or simply follow 
                        other traders with features like Traders' Sentiment and Community Live Trades.
                        </span>
                    </div>
                </div>
                <div>
                    <img src={trade} alt='' className='main-features__analysis'/>
                </div>
            </div>
        </div>
        <div className='withdrawal withdrawal--training'>
            <div className='title' style={{'padding-top': '50px'}}>
                <span>
                    Start Trading in 3 Steps
                </span>
            </div>
            <div className='cardview'>
                <div className='cardview__card cardview__card--training'>
                    <img src={register} alt='register' className='cardsvg'/>
                    <h4><span>1.</span>Register</h4>
                    <span>Open an account for free in just a few minutes</span>
                </div>
                <div className='cardview__card cardview__card--training'>
                    <img src={practice} alt='practice' className='cardsvg'/>
                    <h4><span>2. </span>Practice</h4>
                    <span>Master your skills with a practice account and educational content</span>
                </div>
                <div className='cardview__card cardview__card--training'>
                    <img src={deposits} alt='trade' className='cardsvg'/>
                    <h4><span>3. </span>Deposit & Trade</h4>
                    <span>More than 250 instruments for your ultimate trading</span>
                </div>
            </div>
        </div>
        <Swiper_bar />
        <Banner link = {props.teg}/>
        <Footer />
    </div>
}