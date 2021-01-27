import React, {Component} from "react";
import { Link } from "react-router-dom";
import './Style.css';


class Home extends Component{
  render(){
    return(
      <div>
        <br /><br /><br />
        <div className="row">
          <section className="col col-2"></section>
          <section className="col col-8 col-sm-12">
            <div className="card">
              <div className="card-header">
                About Apps
              </div>
              <div className="card-body">
                <h5 className="card-title">Simple Apps Cari Lirik (Find Lyric)</h5>
                <p className="card-text">React JS, React Router, Bootstrap, MusixMatch API, Axios</p>
                <p className="card-text">By : Ahmad Fahrudin</p>
                <Link to="/song">
                  <button className="btn btn-primary btn-margin">Find Song</button>
                </Link>
                <Link to="/artist">
                  <button className="btn btn-primary btn-margin">Find Artist</button>
                </Link>
              </div>
            </div>
          </section>
          <section className="col col-2"></section>
        </div>
      </div>
      )
    }
  }
  export default Home;