import {useState, useEffect, useContext} from 'react'
import { Provider, Network } from "aptos";
// import { useWallet } from "@aptos-labs/wallet-adapter-react";
import "./Profile.css"
import { accountContext } from '../../Context';

const Profile = () => {
    const {account} =useContext(accountContext);
    const [quantity, setQuantity] = useState('');
    const provider = new Provider(Network.DEVNET);
    const [accountHasHistory, setAccountHasHistory] = useState(false);
    const moduleAddress = "0x8f93e6fe83a7bbc0e4c743a928d31d2810c308515363d843b6af129d094e22ee";
    // const { account, signAndBuySellTransaction } = useWallet();
    const [side,setSide] =useState(false);
    const [transactionInProgress, setTransactionInProgress] = useState(false);

    const buyClick=()=>{
        setSide(false);
        buyTransaction();

    }
    const sellClick=()=>{
        setSide(true);
        buyTransaction();


    }

    // const fetchHistory = async () => {
    //     if (!account) return [];
        
    //     try {
    //       const HistoryTable = await provider.getAccountResource(
    //         account.address,
    //         `${moduleAddress}::Try::TodoList`
    //       );
    //     //   setAccountHasList(true);
    //     } catch (e) {
    //         console.log(e);
    //     //   setAccountHasList(false);
    //     }
    //   };



    const [personalOrders, setPersonalOrders] = useState([
    { id: 1, type: 'Buy', quantity: 100, amount: 100 },
    { id: 2, type: 'Sell', quantity: 50, amount: 50 },
    { id: 3, type: 'Buy', quantity: 200, amount: 200 },
    { id: 4, type: 'Sell', quantity: 150, amount: 150 },
    // Add more orders as needed
    ]);

  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    setQuantity(newQuantity);
  };

  const calculateAmount = () => {
    const totalAmount = quantity * 1;
    return isNaN(totalAmount) ? '' : totalAmount.toFixed(2);
  };

  const buyTransaction = async () => {
    
    if (!account) return [];
    // build a transaction payload to be submited 
    const payload = {
      type: "entry_function_payload",
      function: `${moduleAddress}::Try::place_Order`,
      type_arguments: [],
      arguments: [moduleAddress,quantity,1,Math.floor(new Date().getTime() / 1000),side],
    };
    try {
      // sign and submit transaction to chain
      const response = await window.aptos.signAndSubmitTransaction(payload);
      // wait for transaction
      await provider.waitForTransaction(response.hash);
      console.log("Order Placed");
      setAccountHasHistory(true);
    } catch (error) {
        console.log(error);
        setAccountHasHistory(false);
    } 
    finally {
        setTransactionInProgress(false);
      }    
  };
 

    // useEffect(() => {
    //     fetchHistory();
    //   }, [account?.address]);

    return (
        <div className="contents">
      <div className="top-row">
        <div className="place-order-box">
          <h2>Lets Deal</h2>
          <p>Chadyan Coin / APT</p>
          <h4>Current Price: 1.00 APT</h4>
          <div className="quantity-input">
            <label htmlFor="quantity" className="quantity-text">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <h5>Lot Size: 50</h5>
            <p>
              <span className="amount-text">Amount:</span> {calculateAmount()} APT
            </p>
            <div className="action-buttons">
              <button onClick={buyClick} className="buy-button">Buy</button>
              <button onClick ={sellClick} className="sell-button">Sell</button>
            </div>
          </div>
        </div>

        <div className="order-book-box">
          <h2>OrderBook</h2>
          <div className="func-content">
            <div className="buy">
              <h3>Buy</h3>
            </div>
            <div className="sell">
              <h3>Sell</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-row">
        <div className="personal-orders-box">
          <h2>Personal Orders</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {personalOrders.map((order) => (
                 <tr key={order.id} className={order.type.toLowerCase()}>
                    <td>{order.id}</td>
                    <td>{order.type}</td>
                    <td>{order.quantity}</td>
                    <td>{order.amount}</td>
                 </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
        
    )
}

export default Profile



