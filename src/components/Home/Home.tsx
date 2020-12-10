import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* <h1>Welcome to<br/> Emo2color</h1> */}
      <h1>Emo2color</h1>
      <p>
        Emotions to color is therapy utility app - recently in beta. You can
        save the results of therapy exercise to your image folder to consult
        with your therapist. If you are therapist, propably do not have to look
        at{' '}
        <Link className="link" to="/how-to-use">
          how to use
        </Link>
        , but you are welcome to use this app to save some paper and crayons
        with your clients. :)
      </p>

      <Link to="/exercise" className="btn">
        <span>Start therapy</span>
      </Link>
    </div>
  );
};

export default Home;
