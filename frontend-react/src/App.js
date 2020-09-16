import React, { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState('');
  const [percentage, setPercentage] = useState('');
  const [tip, setTip]= useState('0')

 const calculateTip = (e) => {
   e.preventDefault()

   const data = {
     amount: amount,
     tip: percentage
   }

   fetch('http://localhost:9000/api/1/calculatetip', {
    method: 'POST',
    headers : {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => {
    return res.json()
  }).then((data) => {
    setTip(data.toBePaid)
  })
 }
  return (
    <div className="App">
      <div className="tip__container">
        <h1>Tip Calculator</h1>
         {/*amount*/} 
        <h4>Order Amount:<input type="text" placeholder="$" value={amount} onChange={(e) =>setAmount(e.target.value)}/></h4>
        {/*percentage*/}
        <h4>Tip Percentage:<input type="text" placeholder="%" value={percentage} onChange={(e) =>setPercentage(e.target.value)}/></h4>
        <button onClick={calculateTip}>Calculate</button>
        {/*output*/}
  <h2>${calculateTip ? tip : ""}</h2>
      </div>
    </div>
  );
}

export default App;
