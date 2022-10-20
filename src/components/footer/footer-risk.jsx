import './footer.scss'

export default function (){
   return <div className='footer__body__risk' style={{'padding':'16px 14px'}}>
                    <div className='footer__body__risk__title'>
                        <span><b>RISK WARNING</b></span>
                    </div>
                    <span>CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.</span>
                    <b>79% of retail investor accounts lose money when trading CFDs with this provider.</b>
                    <span>You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</span>
                    <div className='cysec_login'>
                    <a className='cysec' style={{'margin': '0px', 'paddingLeft':'15px'}}>
                    <div className='cysec__title'>CySEC</div>
                    <div style={{'fontSize': '10px'}}>
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
}