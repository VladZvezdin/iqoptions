import React, { useEffect, useState } from "react";
import { getCurrencies, getForex } from "../../../../action/intro.js";
import './currency.scss'
import '../../../../assets/css/buttons.scss'


export default function Currency(props){
    const[choice, setChoice] = useState(1);
    const [forex, setForex] = useState(null);
    const [currency, setCurrency] = useState(null);


    useEffect(() =>{
        getCurrencies().then(result => setCurrency(result.data))
        getForex().then(result => setForex(result.data))
        setChoice(props.choice)
        console.log("cheto",choice);
},[])
let tableForex
let tableCurrency
if (forex !== null) {
    tableForex = Object.keys(forex.rates).map(i => 
        <div className=" container row panel-row">
        <div className="col-md-3">
            <b>USD/{i}</b>
        </div>
        <div className="col-md-3">
            {forex.rates[i]}
        </div>
        <div className="col-md-6 row" style={{'justifyContent':'flex-end'}}>
            <div style={{'display': 'contents'}}>
                <a className="btn_panel btn_panel--red">Sell</a>
                <a className="btn_panel btn_panel--green">Buy</a>
            </div>
            
        </div>
        </div>
)
}
if (currency !== null) {
    tableCurrency = Object.keys(currency).map(i => 
    // ({name: currency[i].id, price: currency[i].current_price, percent: currency[i].market_cap_change_percentage_24h
        <div className=" container row panel-row">
        <div className="col-md-3">
            <b>{currency[i].id}</b>
        </div>
        <div className="col-md-3">
            {currency[i].current_price}
        </div>
        <div className="col-md-6 panel-1D">
            <a style={{'padding-right':'120px'}}>{currency[i].market_cap_change_percentage_24h}%</a>
                <a className="btn_panel btn_panel--red">Sell</a>
                <a className="btn_panel btn_panel--green">Buy</a>
        </div>
        </div>
    )
}



    return <>
    <div className="container">
        <div className="row top-bar">
            <div className="col-md-4">
                {props.choice === 1 &&<a href=""><b>31</b> Forex pairs (CFD)</a>}
                {props.choice === 2 &&<a href=""><b>189</b> Stocks (CFD)</a>}
                {props.choice === 3 &&<a href=""><b>12</b> Cryptocurrenies (CFD)</a>}
                {props.choice === 4 &&<a href=""><b>12</b> Commodiies (CFD)</a>}
            </div>
            <div className="col-md-4">
                <div>
                {props.choice === 1 && <b>1:30</b>}
                {props.choice === 2 && <b>1:5</b>}
                {props.choice === 3 && <b>1:2</b>}
                {props.choice === 4 && <b>1:20</b>}
                </div>
                <div>
                    Leverage up to
                </div>
            </div>
            <div className="col-md-4">
                <div>
                    <b>$1</b>
                </div>
                <div>
                    Minimum invetment
                </div>
            </div>
        </div>
        <div className="container row name-cols">
            <div className="col-md-3">Name</div>
            <div className="col-md-3">Bid</div>
            <div className="col-md-6">1D change</div>
        </div>
        {props.choice === 1 && <div>
            {tableForex}
        </div>}
        {props.choice === 3 && <div>
            {tableCurrency}
            </div>}
    </div>
    </>
}