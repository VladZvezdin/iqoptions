import React from "react";
import banktransfer from '../../assets/bank-transfer.svg'
import neteller from '../../assets/neteller.svg'
import paypal from '../../assets/paypal.svg'
import skrill from '../../assets/skrill.svg'
import verkkopankki from '../../assets/verkkopankki.svg'
import visamastercard from '../../assets/visa-mastercard.svg'
import './block-card.scss'

export default function Blockcard(){
    return<div className='blockcard'>
    <div className='blockcard__card'><img className='blockcard__card--img' src={banktransfer}/></div>
    <div className='blockcard__card'><img className='blockcard__card--img' src={neteller}/></div>
    <div className='blockcard__card'><img className='blockcard__card--img' src={paypal}/></div>
    <div className='blockcard__card'><img className='blockcard__card--img' src={skrill}/></div>
    <div className='blockcard__card'><img className='blockcard__card--img' src={verkkopankki}/></div>
    <div className='blockcard__card'><img className='blockcard__card--img' src={visamastercard}/></div>
</div>
}