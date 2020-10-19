import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Trails.css';

class Trails extends Component {

    state = { trails: [] }

    componentDidMount() {
        this.getTrails();
    }

    getTrails = () => {
        fetch('https://hikings.herokuapp.com/api/data/hikings').then(res => res.json()).then(trails => this.setState({ ...this.state, trails }))
    }

    render() {

        let { trails } = this.state;
        return (
            <>
                <div>{trails.length > 0 ?
                    <div className="trails">
                        {trails.map((e, i) => <div key={i} className="each-trail" >
                        <img alt="icon" style={{width:'20px', height:'20px'}} src={require(`../icons/${e.type}.png`)}/>
                        <NavLink className="each-trail-name"  to={`/trails/${e.id}`}><div><span>{e.name}</span></div></NavLink>
                            <img alt="hiking" style={{width:'200px',height:'150px'}} src={e.image1}/>
                        </div>)}
                    </div>

                    : <span>Loading...</span>}</div>
            </>
        )
    }
}

export default Trails;