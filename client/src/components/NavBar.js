import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import mypic from './mypic.jpeg';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                
                  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
         <img src={mypic} style={{ width: '40px', height: '40px', borderRadius: '50%', borderBlockColor: 'black', opacity: '70%'}}/>
         &nbsp;&nbsp;&nbsp;
        <Link className="navbar-brand" to="#">Samarasinghe S.D</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Posts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">about</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
                 

            </div>
        )
    }
}
