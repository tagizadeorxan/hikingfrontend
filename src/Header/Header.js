import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <>
            <header>
                <img alt="header" src={require('../icons/hiking.png')} />
            </header>
           
           </>
        )
    }
}

export default Header;