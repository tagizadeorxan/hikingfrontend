import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './eachTrail.css';
import {CircularProgress, Button} from '@material-ui/core';

class Trail extends Component {
    state = { data: [] }

    componentDidMount() {
        this.getHikingData();
    }

    getHikingData = () => {
     

        fetch(`https://hikings.herokuapp.com/api/data/hikings/${this.props.match.params.id}`).then(res => res.json()).then(data => this.setState({ ...this.state, data }))
    }

    render() {

        let {data} = this.state;

        return (
            <>

            
                { data.length > 0 ? <div className="data-container">
                <Button style={{marginLeft:'5%'}} variant="contained" color="secondary" onClick={()=>this.props.history.goBack()} className="back-button">back</Button>
                <div className="images">
               
            
                <img alt="trail" src={data[0].image1}/>
                
                <iframe title="location" src={data[0].location}
                         frameBorder="0" style={{ border: 0 }} aria-hidden="false" tabIndex="0"></iframe>
                
                </div>
                
                <div className="data-info">
              
                    <div><img alt="icon" className="icon" src={require(`../icons/${data[0].type}.png`)}/>{ReactHtmlParser(data[0].info)}</div>
                </div>
                    
                   
                </div> : <CircularProgress style={{display:'block',marginLeft:'auto',marginRight:'auto', marginTop:"10%"}}/>}
            </>
        )
    }
}

export default Trail;