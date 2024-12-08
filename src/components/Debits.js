// /*==================================================
// src/components/Debits.js

// The Debits component contains information for Debits page view.
// Note: You need to work on this file for the Assignment.
// ==================================================*/
// import {Link} from 'react-router-dom';

// const Debits = (props) => {
//   // Create the list of Debit items
//   let debitsView = () => {
//     const { debits } = props;
//     return debits.map((debit) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
//       let date = debit.date.slice(0,10);
//       return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
//     });
//   }
//   // Render the list of Debit items and a form to input new Debit item
//   return (
//     <div>
//       <h1>Debits</h1>

//       {debitsView()}

//       <form onSubmit={props.addDebit}>
//         <input type="text" name="description" />
//         <input type="number" name="amount" />
//         <button type="submit">Add Debit</button>
//       </form>
//       <br/>
//       <Link to="/">Return to Home</Link>
//     </div>
//   );
// }

// export default Debits;



// // import {Link} from 'react-router-dom';



// // const Debits = (props) => {
// //   // Create the list of Debit items
// //   let debitsView = () => {
// //     const { debits } = props;
// //     return debits.map((debit) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
// //       let date = debit.date.slice(0,10);
// //       return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
// //     });
// //   }
// //   // Render the list of Debit items and a form to input new Debit item
// //   return (
// //     <div>
// //       <h1>Debits</h1>

// //       {debitsView()}

// //       <form onSubmit={props.addDebit}>
// //         <input type="text" name="description" />
// //         <input type="number" name="amount" />
// //         <button type="submit">Add Debit</button>
// //       </form>
// //       <br/>
      
// //       <br/>
      
// //       <Link to="/">Return to Home</Link>
// //     </div>
// //   );
// // }

// // export default Debits;


////////////////////////////

/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import React, {/*Component,*/ useState} from 'react';
import AccountBalance from './AccountBalance';

const Debits = (props) => {

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [items, setItems] = useState(props.debits);
  const [balance, setBalance] = useState(props.bal);

  const handleUpdateBalance = (newBalance) => {
    props.updateBalance(newBalance);
   }

   const handleSubmit = () =>{
    if (description && amount) {
      const currentDateTime = new Date().toLocaleString();
      const intAmount = parseInt(amount, 10);
      const intBalance = parseInt(balance,10);
      let newBalance=intBalance - intAmount;
      let intNewBalance= parseInt(newBalance,10)
      handleUpdateBalance(intNewBalance);
      setItems([...items, { description, amount: parseFloat(amount), date: currentDateTime }]);
          setDescription('');
          setAmount('');
          setBalance(intNewBalance)
          } else {
            alert("Please enter both description and amount");
          }
  };



  // Create the list of Debit items
  let debitsView = () => {
    //const { debits } = props;
    return items.map((debit) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
      let date = debit.date.slice(0,10);
      return <li key={debit.id}>{debit.description}: {debit.amount}  {date}</li>
    });
  }
  // Render the list of Debit items and a form to input new Debit item
  return (
    <div>
      <h1>Debits</h1>
      
        <AccountBalance accountBalance = {balance} />
      

      {debitsView()}

  
        <input type="text" name="description" 
        value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
        <input type="number" name="amount" 
        value={amount} placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
        <button type="submit" onClick={handleSubmit}>Add Debit</button>
    
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Debits;