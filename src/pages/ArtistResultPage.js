import React, { useContext } from "react";
import { ArtistContext } from "../ArtistContext";

const ArtistResultPage = () =>{
  const [artists] = useContext(ArtistContext)
  return (
    <>
    <div>
      <table width="100%" className="table table-bordered">
        <thead>
          <tr>
            <th>Artist</th>
            <th width="150">Detail</th>
          </tr>
        </thead>
        <tbody>
        {
          artists.map((artist,index)=>
          <tr key={index}>
            <td>{artist.artist.artist_name}</td>
            <td><a disabled className="btn btn-sm btn-primary">Detail</a></td>
          </tr>
          )
        }
        </tbody>
      </table>
    </div>
    </>
    )
  }
  
  export default ArtistResultPage