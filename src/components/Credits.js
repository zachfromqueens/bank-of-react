import React, {/*Component,*/ useState} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';






const Credits = (props) => {

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [items, setItems] = useState([]);
  
  
  const [balance, setBalance] = useState(props.bal);
 
 const handleUpdateBalance = (newBalance) => {
  props.updateBalance(newBalance);
 }
 

 

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
