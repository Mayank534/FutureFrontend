
import React from 'react'
import "./Profile.css"

const Profile = () => {
    return (
        <div className='profile-page'>
        <div className='contents'>
            <div className='profile-content'>
                {/* <img src='./profile.jpg' className='profile-img' /> */}
                <h2>Lets Deal</h2>
                <div className='pro'>
                <input placeholder='Enter Amount' type='number' className='profile-input'/>
                <input placeholder='Enter Price' type='number' className='profile-input'/>

                </div>
                <input placeholder='Enter Expiry' type='date' className='profile-input'/>

                <div>
                <button type='button' className='primary-btn2'>Buy</button>

                <button type='button' className='secondary-btn2' >Sell</button>


                </div>
                
                
            </div>
            <div className='order-book-content'>
                <h2>OrderBook</h2>
                <div>
                <h4>Current Price: $500</h4>
                <div className="func-content">
                
                    <div className="buy"><h3>Buy</h3></div>
                    <div className="sell"><h3>Sell</h3></div>

                </div>

                </div>
                
            </div>

        </div>
        <div>
        <h2>Transaction History</h2>


        </div>

        </div>
        
    )
}

export default Profile
