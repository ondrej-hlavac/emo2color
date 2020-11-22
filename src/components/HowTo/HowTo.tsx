import React from 'react';
import { Link } from 'react-router-dom';

const HowTo = () => {
  return (
    <article className="how-to-wrapper">
      <h1>
        how to use Emo2color?
      </h1>
      <section>
        <h3>1) Close your eyes</h3>
      </section>
      <section>
        <h3>2) Feel the emotion you have right now.</h3>
      </section>
      <section>
        <h3>3) Try to describe your emotion by picking a color.</h3>
      </section>
      <section>
        <h3>4) Let your emotion go away and repeat step 1.</h3>
      </section>
      <Link to='/exercise' className="btn">
        <span>
          Start therapy
        </span>
      </Link>
    </article>
  )
};

export default HowTo;