import React, { Component } from 'react';
import Trails from '../Trails/Trails.js'
import Videos from '../videos'
import './Home.css'




class Home extends Component {
    render() {
        return (
            <>
               
                    
                    <div className="home-container">
                        <h1><span className="home-container-text">WELC<img alt="app-logo" className="App-logo" src={require('../icons/earth.png')} />ME</span></h1>
                        <Videos/>
                        <Trails />
                        
                    </div>

                


            </>
        )
    }
}

export default Home;