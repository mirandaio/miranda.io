import React, { Fragment } from 'react';
import about from './img/about.jpg';

const Home = () => {
  return (
    <Fragment>
      <div>
        <span>Hey</span>
        <span>I'm Alfredo.</span>
      </div>
      <p>
        <img src={about} alt="Profile photo"/>
        I am a software engineer. I enjoy building large custom web applications, and
        helping others. I have a solid computer science background and can tackle difficult
        challenges. My strenghts are developing user interfaces and backend systems. I am
        mentor both in the workplace and in the local community.
      </p>
    </Fragment>
  );
};

export default Home;
