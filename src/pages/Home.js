import React from 'react';
import Header from '../components/Header';
import './Home.css';

function Home() {
  return (
    <div>
      <Header />
      <div className="home-content">
        <h1>Welcome to Samudbhav</h1>
        <p>
          We are an organization dedicated to inspiring and educating our community. 
        </p>
        <p>  
          We provide various resources and events to help various communities grow and learn.
        </p>
      </div>
    </div>
  );
}

export default Home;
