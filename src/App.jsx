import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo';


function App() {
  const [amount , setAmount] = useState('');
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const [convertedAmount , setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo);

  const swap = ()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(Math.floor(amount * currencyInfo[to]))
  }



  const ulrImage = 'https://images.pexels.com/photos/14922271/pexels-photo-14922271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'


  const ulrImage2 = 'https://images.pexels.com/photos/1791583/pexels-photo-1791583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  

  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat "
    style={{
        backgroundImage: `url('${ulrImage}')`, backgroundColor: '#333'
    }}
    >   <div className=' bg-blue-600 text-white text-7xl px-3 py-5 rounded-2xl'><h1>Curreny Converter</h1></div>
        <div className="w-full ">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1  ">
                        <InputBox
                            
                            label="FROM"
                            amount={amount}
                            onAmountChange={(amount) => setAmount(amount)}
                            onCurrencyChange={ (currency) => setFrom(currency)}
                            currencyOptions={options}
                            selectCurrency={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 hover:bg-green-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            SWAP
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4 ">
                        <InputBox
                            // className='text-lg text-slate-900'
                            label="To"
                            amount={convertedAmount}
                            onCurrencyChange={(currency) => setTo(currency)}
                            currencyOptions={options}
                            selectCurrency={to}
                            amountDisable
                            
                        />
                    </div>
                    <button
                        id='btn-submit' 
                        type="submit" 
                        className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-green-600 "
                        >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                        
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
