import React, { useEffect, useState } from 'react';
import { NavLink,Link, useParams } from 'react-router-dom'
import './Trails.css';
import { CircularProgress } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';


let Trails = () => {

    let [trails, setTrails] = useState([]);
    let [page,setPage] = useState(1)

    useEffect(() => {
        getTrails();
    }, [])

    const handleChange = (event,value) => {
        setPage(value)
    }

    let getTrails = () => {
        fetch('https://hikings.herokuapp.com/api/data/hikings').then(res => res.json()).then(trails => setTrails(trails))
    }

    let pageSize = Math.ceil(trails.length/5)


    return (
        <>
           {console.log(pageSize)}
            <div >{trails.length > 0 ?
              
    
      <div>
      <div className="trails">
                    {trails.slice((page-1)*5,page*5).map((e, i) => <div key={i} className="each-trail" >
                        <img alt="icon" style={{ width: '20px', height: '20px' }} src={require(`../icons/${e.type}.png`)} />
                        <NavLink className="each-trail-name" to={`/trails/${e.id}`}><div><span>{e.name}</span></div></NavLink>
                        <img alt="hiking" style={{ width: '200px', height: '150px' }} src={e.image1} />
                    </div>)}
                </div>
       
       <div className="pagination">
     
      <Pagination 
      variant="outlined"
      color="secondary"
      count={pageSize} 
      page={page} 
      onChange={handleChange} />
    
   </div>
      </div>

                : <CircularProgress style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
            }

               
            </div>
        </>
    )
}


export default Trails;