import React from 'react'
import { Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';


const Home = (props) => {
    const handleClick = async () => {
        let client_id = '2bba7390150c42c9bad5b2fe1fe7a3d7';
        let scopes = `playlist-modify-private`;
        let redirect_url = `http://localhost:3000/redirect`;
        let spotifyUrl = `https:/accounts.spotify.com/authorize?client_id=${client_id}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirect_url)}&response_type=token&show_dialog=true`;
        window.location = spotifyUrl;
    }

    const { isValidSession, location } = props;
    const { state } = location;
    const sessionExpired = state && state.sessionExpired;

    return (
        <React.Fragment>
            {isValidSession() ? 
                (<Redirect to="/dashboard" />) : 
                (<div style={{width:'100%'}}>
                    <h1 style={{textAlign:'center'}}>Spotify Login</h1>
                    <center>
                        {/* <button onClick={handleClick} style={{fontSize:'20px'}}>Login</button> */}
                        <Button variant="contained" color = "primary" onClick={handleClick}>Login</Button>
                    </center>
                </div>)}
        </React.Fragment>
    );
}

export default (Home)
