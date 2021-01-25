import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
import { ArtistProvider, ArtistContext } from "../ArtistContext";
import { API_URL, API_KEY } from '../Config';

const ArtistPage = () =>{
    const [inputValue, setInputValue] = useState("")
    const [artists, setArtists] = useContext(ArtistContext)
    const handleChange = (ev) => {
        setInputValue(ev.target.value)
    }
    const searchArtist = () =>{
        axios.get(`${API_URL}artist.search?q_artist=${inputValue}&page_size=100&apikey=${API_KEY}`)
            .then(res => {
                const respondata = res.data.message.body.artist_list
                setArtists(respondata)
                console.log(respondata);
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        
    },[])
    return(
      <>
        <div className="row">
          <div className="col col-10">
            <input className="form-control" value={inputValue} onChange={handleChange} placeholder="Type Artist Name" />
          </div>
          <div className="col col-2" align="left">
            <button onClick={searchArtist} className="btn btn-outline-success">Search</button>
          </div>
        </div>
      </>
    )
  }
  export default ArtistPage;