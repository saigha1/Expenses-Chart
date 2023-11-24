
import './App.css';
import React, {useState, useEffect} from "react"
import jsonData from '../src/data.json'; 
import logo from './images/logo.svg'


function App() {

  const [data, setData] = useState([])  

    useEffect(() => {
      setData(jsonData)
    }, []);

    const totalAmount = () => {
      let total = 0
      for (const obj of jsonData) {
        total += obj.amount 
      }
      return total
    }


  return (
    <div className="App">
      {/* top */}
      <div className='display'>
        <div className= 'top'>
          <div className='info'>
            <div className='heading'>
              <h6 className='headingH6'>My Balance</h6>
              <h1 className='headingH6'>$1000</h1>
              {/* <h5>{Balance}</h5> */}
            </div>
            <div className='img'>
              <img src = {logo} alt= "circle"/>
            </div>
          </div>
        </div>
         
          {/* Bottom */}
        <div className = 'bottom'> 
          <h1>Spending- Last 7 days</h1>
          <div className = "chart">

            <div className='day'>
              {data.map((item, index) => (
                <div className='dayBlock' key={index}>
                  <p >{item.day}</p>
                  <div className='bar' style={{ height: `${item.amount * 2.5}px`, width: '40px' }}></div>
                  <p className='price'>${`${item.amount}`}</p>
                </div>
              ))}
            </div>

          </div>

          <div className = 'border'></div>

          <div className='totalInfo'>
            <div>
              <h6 className='headingH6 totalMonth'>Total this month</h6>
              <h1 className='headingH6'>${totalAmount()}</h1>
            </div>
            <div className = "stats">
              <h6 className='headingH7'>+2.4%</h6>
              <h6 className='headingH7 fromLastMonth'>from last month</h6>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
