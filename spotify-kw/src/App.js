import React, {Component} from 'react'

export default class App extends Component {
    handleClick = async () => {
        let client_id = '2bba7390150c42c9bad5b2fe1fe7a3d7';
        let scopes = `playlist-modify-private`;
        let redirect_url = `http://localhost:3000`;
        let spotifyUrl = `https:/accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirect_url)}`;
        window.location = spotifyUrl;
    }

    render(){
        return <div style={{width:'100%'}}>
            <h1 style={{textAlign:'center'}}>Spotify Login</h1>
            <center>
                <button onClick={this.handleClick} style={{fontSize:'20px'}}>Login</button>
            </center>
        </div>
    }
}