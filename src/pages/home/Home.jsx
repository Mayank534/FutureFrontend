import React from 'react';
import {Bids, Header, } from '../../components'
import Profile from '../../components/Myprofile/Profile';


const Home = () => {

  return <div>
   <Header />
   <Profile/>
   {/* <Bids title="Hot Bids"  /> */}
  </div>;
};

export default Home;
