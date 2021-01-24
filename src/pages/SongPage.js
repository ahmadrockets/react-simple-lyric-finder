import React, {Component} from "react";
import './Style.css';
import SongResultPage from './SongResultPage';
import axios from "axios";


class SongPage extends Component{
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      data: []
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  searchSong = e =>{
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.inputValue}&page_size=100&s_track_rating=desc&apikey=YourApiKey`)
      .then(res => {
        const respondata = res.data.message.body.track_list
        this.setState({
          data: respondata
        })
      }).catch(err => {
        console.log(err)
      })
  }
  render(){
    return(
      <div>
        <br />
        <h2>SONG PAGE</h2>
        <div className="row">
          <div className="col col-10">
            <input className="form-control" name="inputValue" value={this.state.inputValue} onChange={this.handleChange} placeholder="Type Song Title" />
          </div>
          <div className="col col-2" align="left">
            <button onClick={this.searchSong} className="btn btn-outline-success">Search</button>
          </div>
        </div>
        <br />
        <SongResultPage dataSong={this.state.data} />
      </div>
      )
    }
  }
  export default SongPage;