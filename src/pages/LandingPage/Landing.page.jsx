import React from 'react';

import Background from '../../assets/background.jpg';
import CardComponent from '../../components/CardComponent/Card.component';

const LandingPage = (props) => {
  return (
    <div
      className="w-screen h-screen flex flex-initial justify-center items-center bg-cover"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <CardComponent></CardComponent>
    </div>
  );
};

export default LandingPage;
