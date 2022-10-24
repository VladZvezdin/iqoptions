import axios from 'axios'



export const getCurrencies = () =>{
    // return axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    // return axios({
    //     method: 'get',
    //     url:`https://api.exchangerate.host/latest`,
    //     params: {base: 'USD'}
    // })
    return axios({
        method: 'GET',
        url: 'https://api.frankfurter.app/latest?amount=1&from=USD',
    })
}

