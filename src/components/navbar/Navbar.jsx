import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

const Menu = () => (
  <>
    <Link to="/"><p>Explore</p> </Link>
    <p>My Items</p>

  </>
)

const Navbar = () => {
  const [connected, setConnection] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false)
  const [user, setUser] = useState(false)

  const handleLogout = () => {
    setUser(false);
  }
  const handleLogin = () => {
    setUser(true);
  }
  const connect = async () => {
    if (window.aptos != undefined) {
      console.log("Helli")
      try {
        const response = await window.aptos.connect();
        setConnection(true);
        console.log(response);

      } catch (error) {
        setConnection(false);
        console.log(error);

      }
    }

  }
  const disconnect = async () => {
    await window.aptos.disconnect();
    setConnection(false);

  }

  return (
    <div className='navbar'>
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
          <Link to="/">
            <h1>FutureWallet</h1>
          </Link>
        </div>
        <div className="navbar-links_container">
          <input type="text" placeholder='Search Item Here' autoFocus={true} />
          <Menu />
          {user && <Link to="/"><p onClick={handleLogout}>Logout</p></Link>}

        </div>
      </div>
      <div className="navbar-sign">
        {user ? (
          <>
            <Link to="/create">
              <button type='button' className='primary-btn' >Create</button>
            </Link>
            <button type='button' className='secondary-btn' onClick={connected ? disconnect : connect}>{connected ? "Disconnect" : "Connect"}</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button type='button' className='primary-btn' onClick={handleLogin} >Sign In</button>
            </Link>
            <Link to="/register">
              <button type='button' className='secondary-btn'>Sign Up</button>
            </Link>
          </>
        )}



      </div>
      <div className="navbar-menu">
        {toggleMenu ?
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center" >
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
            <div className="navbar-menu_container-links-sign">
              {user ? (
                <>
                  <Link to="/create">
                    <button type='button' className='primary-btn' >Create</button>
                  </Link>
                  <button type='button' className='secondary-btn' onClick={connected ? disconnect : connect}>{connected ? "Disconnect" : "Connect"}</button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button type='button' className='primary-btn' onClick={handleLogin} >Sign In</button>
                  </Link>
                  <Link to="/register">
                    <button type='button' className='secondary-btn'>Sign Up</button>
                  </Link>
                </>
              )}

            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
