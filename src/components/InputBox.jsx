import React, {useId} from 'react';
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false, 
    className = "",

}) {
   const amountInputId = useId();

    return (
        <div className={`bg-slate-200 p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  htmlFor={amountInputId} className="text-white mb-2 inline-block bg-blue-600 rounded-md px-2 py-1">
                    {label}
                </label>
                <input
                    id = {amountInputId}
                    min = '0'
                    className="outline-none w-full bg-transparent py-1.5 text-slate-600 bg-gray-300 rounded-lg px-2  "
                    type="Number"
                    placeholder="Amount"
                    disabled ={amountDisable}
                    value = {amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-slate-600 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 text-white bg-green-600 cursor-pointer outline-none "
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >
                    
                        {currencyOptions.map((currency)=>(
                            <option key={currency} value = {currency}
                            className='bg-blue-600 text-white'
                            >
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
