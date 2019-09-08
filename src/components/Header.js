import React from 'react';
import facebook from '../assets/facebook.png';

function Header() {
  return (
    <div className="header">
      <a className="home" href="#!">
        <img src={facebook} alt="facebook-logo" />
      </a>
      <a href="#!" className="perfil">
        Meu perfil
      </a>
    </div>
  );
}

export default Header;
