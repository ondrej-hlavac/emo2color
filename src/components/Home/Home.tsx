import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to<br/> Emo2color</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae pulvinar odio, id fringilla purus. Nulla tortor nibh, sodales in malesuada in, dictum a enim. Vestibulum porttitor vestibulum mauris vel bibendum. Ut scelerisque consequat enim, sit amet molestie dolor sodales vitae.</p>
      <Link to='/exercise' className="btn">
        <span>
          Start therapy
        </span>
      </Link>
    </div>
  );
};

export default Home;