import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';

export default function Home () {
    return (
      <main>
          <Mouse />
          <div className='home'>
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
            <div className="main-content">
                <h1>WonCareer</h1>
                <h2>Technology Trends</h2>
            </div>
        </div>
        <ButtonsBottom right={"/Services"} />
      </div>
      </main>
    );
  };

