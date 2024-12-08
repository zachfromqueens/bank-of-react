// /*==================================================
// src/components/Credits.js

// The Credits component contains information for Credits page view.
// Note: You need to work on this file for the Assignment.
// ==================================================*/

// // import AccountBalance from './AccountBalance';

// import React, {Component, useState} from 'react';
// //import React, {useState} from "react";
// import {Link} from 'react-router-dom';

// // function addCredit({description, amount}){
// //   return (
// //     <div>
// //     <p> Description: {description} </p> 
// //     <p> Amount: {amount} </p>
// //     </div>
// //   )
// // }



// submitThis(event) {
//   event.preventDefault();
  
// }
// const Credits = (props) => {
//   const [value, setValue] = useState(null);
//   const [result, setResult] = useState(null);

//   function handleSubmit(e){
//     e.preventDefault();
//     setResult(
//       "Description: " + value
//     );
// }

// function handleChange(e){
//   setValue(e.target.value);
//   setResult(null);
// }

//   return (
//     <div>
//       <h1>Credits</h1>
   
//       <div>
//       <form onSubmit={this.submitThis}>
//         <input type="text" name="description" placeholder = "Description" value={value} onInput={handleChange} />
//         <input type="number" name="amount" placeholder = "Amount"/>
//         <button type="submit">Add Credit</button>
//       </form>

//       </div>
      
//       <div>
//         {this.props.map((x, index) =>
//           <div key={index} style={{border: "1px black solid"}}>
//           <p>Description: {x[0]}</p>
//           <p>Amount: ${x[1]}</p>
//        </div> )}
    

    
//       <Link to="/">Return to Home</Link>
//     </div>
//     </div>
//   );
// }

// export default Credits;
////////////////////////////////////////////////////////////////////

// import {Link} from 'react-router-dom';
// import React, { useState } from 'react';
// import AccountBalance from './AccountBalance';

// function App() {
//   const [creditDescription, setCreditDescription] = useState('');
//   const [amount, setAmount] = useState('');
//   const [items, setItems] = useState([]);

//   const handleAddItem = () => {
//     if (creditDescription && amount) {
//       const currentDateTime = new Date().toLocaleString();
//       setItems([...items, { creditDescription, amount: parseFloat(amount), date: currentDateTime }]);
//       setCreditDescription('');
//       setAmount('');
//     } else {
//       alert("Please enter both description and amount");
//     }
//   };

  
//   return (
//     <div>
//       <h1>Credits</h1>
//         <div>

//         </div>
//       <div>
//         <div>
//         <Link to="/">Return to Home</Link>
//         </div>
//         <input
//           type="text"
//           placeholder="Enter description"
//           value={creditDescription}
//           onChange={(e) => setCreditDescription(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Enter amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//         <button onClick={handleAddItem}>Add Item</button>
//       </div>
//       <div>
//         <h2>Credit Transactions</h2>
//         <ul>
//           {items.map((item, index) => (
//             <li key={index}>
//               {item.creditDescription}: ${item.amount.toFixed(2)}
//               <br />
//               <p>Submitted on: {item.date}</p>
//               <hr />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
//   }


// export default App;




import React, {/*Component,*/ useState} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';






const Credits = (props) => {

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [items, setItems] = useState([]);
  //const aBalance = {props,accountBalance}; 
  //const {balance} = location.state;
  const [balance, setBalance] = useState(props.bal);
  //const balance = {this.props.accountBalance};

 const handleUpdateBalance = (newBalance) => {
  // let newBalance= balance + amount;
  // console.log(balance)
  props.updateBalance(newBalance);
 }
 
  // function handleChangeBalance() {
  //   useState(this.props.updateBalance(amount));
  // };

  const handleSubmit = () =>{
    if (description && amount) {
      const currentDateTime = new Date().toLocaleString();
      const intAmount = parseInt(amount, 10);
      const intBalance = parseInt(balance,10);
      

      let newBalance=intAmount + intBalance;
      let intNewBalance= parseInt(newBalance,10)
      handleUpdateBalance(intNewBalance);
      setItems([...items, { description, amount: parseFloat(amount), date: currentDateTime }]);
          setDescription('');
          setAmount('');
          setBalance(newBalance)
          } else {
            alert("Please enter both description and amount");
          }
  };

 
  return (
    <div>
    <div>
      <h1>Credits</h1>
      <br/>
     
      <AccountBalance accountBalance={balance}/>
      
      <br/>
      <Link to="/">Return to Home</Link>
    </div>

    <div>
      
        <input 
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
        <input
        type="number"
        placeholder='Enter amount'
        value={amount}
        onChange={(e)=> setAmount(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>

      
    </div>
    <br/>

    <div>
      <h1>Credit Transactions:</h1>
     
    </div>

    <div>
      <ul>
           {items.map((item, index) => (
            <li key={index}>
              {item.description}: ${item.amount.toFixed(2)}
              <br />
              <p>Submitted on: {item.date}</p>
              <hr />
            </li>
          ))}
      </ul>
    </div>
    </div>
  );
}


export default Credits;
