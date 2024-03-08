import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]) )
        console.log(data);
        
    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;

// NOTE:

// This is the old url, which is terminated now, Today date: 07/03/2024
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json

// This is the new url, which replaced the previous one
// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json

// For further clarification, go to the below github repo
// https://github.com/fawazahmed0/currency-api?tab=readme-ov-file