import React from 'react';
import Typewriter from 'typewriter-effect';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>
          <Typewriter
            options={{
              strings: ["Hello I'm"],
              autoStart: true,
              loop: true,
            }}
          />
        </h5>
        <h1>
          <Typewriter
            options={{
              strings: ["Aniruddha M. Patil"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
