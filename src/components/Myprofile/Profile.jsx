
import React from 'react'
import "./Profile.css"
const Profile = () => {
    return (
        <div className='contents'>
            <div className='profile-content'>
                <img src='./profile.jpg' className='profile-img' />
                <p>Ashsih Newar</p>
                <h2>Transaction History</h2>
            </div>
            <div className='order-book-content'>
                <h2>OrderBook</h2>
                <div className="func-content">
                    <div className="buy"><h3>Buy</h3></div>
                    <div className="sell"><h3>Sell</h3></div>

                </div>
            </div>

        </div>
    )
}

export default Profile
