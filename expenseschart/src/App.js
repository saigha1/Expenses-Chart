
import './App.css';
import React, {useState, useEffect} from "react"
import jsonData from '../src/data.json'; 
import logo from './images/logo.svg'


function App() {

  const [data, setData] = useState([])  

    useEffect(() => {
      setData(jsonData)
    }, []);


    useEffect(() => {
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          const value = data[key];
          console.log(`Key: ${key}, Value: ${value}`);
          // You can perform any operations with each key-value pair here
        }
      }
    }, [data]);

  return (
    <div className="App">
      {/* top */}
      <div className='display'>
        <div className= 'top'>
          <div className='info'>
            <div className='heading'>
              <h6 className='headingH6'>My Balance</h6>
              <h6 className='headingH6'>fdfd</h6>
              {/* <h5>{Balance}</h5> */}
            </div>
            <div className='img'>
              <img src = {logo} alt= "circle"/>
            </div>
          </div>
        </div>
         
          {/* Bottom */}
        <div className = 'bottom'> 
          <h5>Spending- Last 7 days</h5>
          <div className = "chart">

            <div className='day'>

              <div className='dayBlock'>
                <p className='price'>$300</p>
                <div className = 'bar'></div>
                <p>Monday</p>
              </div>
              <div className='dayBlock'>
                <p className='price'>300</p>
                <div className = 'bar'></div>
                <p>Tuesday</p>
              </div>
              <div className='dayBlock'>
                <p className='price'>$300</p>
                <div className = 'bar'></div>
                <p>Wednesday</p>
              </div>
              <div className='dayBlock'>
                <p className='price'>$300</p>
                <div className = 'bar'></div>
                <p>Thursday</p>
              </div>
              <div className='dayBlock'>
                <p className='price'>$300</p>
                <div className = 'bar'></div>
                <p>Friday</p>
              </div>
              <div className='dayBlock'>
                <p className='price'>$300</p>
                <div className = 'bar'></div>
                <p>Saturday</p>
              </div>
              <div className='dayBlock'>
                <p className='price'>$300</p>
                <div className = 'bar'></div>
                <p>Sunday</p>
              </div>

            </div>

          </div>

          <div className = 'border'></div>

          <div className='totalInfo'>
            <div>
              <h6 className='headingH6'>Total this month</h6>
              <h1 className='headingH6'>$1000</h1>
            </div>
            <div className = "stats">
              <h6 className='headingH6'>+-9.8%</h6>
              <h6 className='headingH6'>from last month</h6>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}

export default App;
