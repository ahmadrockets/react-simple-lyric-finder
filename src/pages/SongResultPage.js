import React, {Component} from 'react';
import {Link} from "react-router-dom";

class SongResultPage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <table width="100%" className="table table-bordered">
                    <thead>
                        <tr>
                        <th width="250">Artist</th>
                        <th>Title</th>
                        <th>Album</th>
                        <th width="150">Link Lyric</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.dataSong.map((song,index)=> 
                                <tr key={index}>
                                    <td align="left">{song.track.artist_name}</td>
                                    <td align="left">{song.track.album_name}</td>
                                    <td align="left">{song.track.track_name}</td>
                                    <td align="left">
                                        <a target="_blank" href={song.track.track_share_url} className="btn btn-sm btn-primary">Show Lyric</a>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>   
                </table>
            </div>
        )
    }
}

export default SongResultPage;