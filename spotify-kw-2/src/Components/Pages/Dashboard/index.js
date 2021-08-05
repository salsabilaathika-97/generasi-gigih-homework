import React from 'react'
import { Redirect } from 'react-router-dom';
import {TextField, Button} from '@material-ui/core';
import axios from 'axios';

const Dashboard = (props) => {
    const { isValidSession } = props;
    const clickSearch = async () => {
        let searchInput = document.getElementById("search-input").value;
        const params = JSON.parse(localStorage.getItem("params"));
        const accessToken = params.access_token;
        const config = {
            headers: {Authorization : `Bearer ${accessToken}`}
        }
        await axios.get(`https://api.spotify.com/v1/search?q=name:${searchInput}&type=track&limit=10`, config)
            .then(result => {
                console.log(result);
                let tracks = result.data.tracks.items;
                let listString = '';
                tracks.map((element) => (
                    listString += `
                    <div class="list-playlist">
                        <div class = "container-grid-list">
                            <div class = "grid-list-img">
                                <image style ="width: 150px; height:150px;" src="${element.album.images[1].url}" />
                            </div>
                            <div class = "grid-list-desc">
                                <div style="font-size: 16px; font-weight: bolder;">Title</div>
                                <div style="font-size: 18px;">${element.name}</div>
                                <div style="font-size: 16px; font-weight: bolder;">Album Name</div>
                                <div style="font-size: 18px;">${element.album.name}</div>
                                <div style="font-size: 16px; font-weight: bolder;">Artist Name</div>      
                                <div style="font-size: 18px;">${element.artists[0].name}</div>      
                            </div>
                        </div>
                    </div>`
                ));
                document.getElementById("result-content").innerHTML = listString;
            })
            .catch(error => {console.log(error)});
    }

    return (
        <React.Fragment>
            {isValidSession() ? (
                <div id="container" style={{width: '100%'}}>
                    <div id="search-wrapper" style={{width: '100%',display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                        <div style={{fontSize: 37, fontWeight: 'bolder', marginTop: 15}}>Search Song</div>
                        {/* <input type="text" id="search-input" placeholder="Insert Keyword" style={{width: '420px', fontSize: 18, display: 'inline-block', marginTop: 10, marginBottom: 5}} /> */}
                        <div style={{width: '420px', fontSize:18, display:'inline-block', marginTop:10, marginBottom: 5}}>
                        <TextField label = "keyword" id = "search-input" fullWidth/>
                        </div>
                        <Button onClick={clickSearch} style={{marginTop:10, marginBottom:10}} variant="contained" color="primary">Search Now</Button>
                        {/* <button onClick={clickSearch} style={{marginTop: 10, marginBottom: 10}}>Search Now</button> */}
                    </div>
                    <div id="result-content" style={{padding: 15, width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                        
                    </div>
                </div>
            
            ) : (<Redirect to="/" />)}
        </React.Fragment>
    );
}

export default Dashboard