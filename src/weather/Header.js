import React from 'react';
import logo from '../images/icon/logo.png';

export default function Header(){
    return (
        <header>
        <img className="header__logo" src={logo} />
        <h1 className="header__title">Weather Channel</h1>
        {/* <p style="color:red">test</p> */}
      </header>
    );
}
