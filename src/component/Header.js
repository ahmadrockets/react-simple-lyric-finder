import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Header extends Component{
    render(){
        return(
          <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">CARI LIRIK</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link"><b>Home</b></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/song" className="nav-link"><b>Find Song</b></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/artist" className="nav-link"><b>Find Artist</b></Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}
export default Header;