const loginAction = {
    handleClick = async () => {
        let client_id = '2bba7390150c42c9bad5b2fe1fe7a3d7';
        let scopes = `playlist-modify-private`;
        let redirect_url = `http://localhost:3000`;
        let spotifyUrl = `https:/accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirect_url)}`;
        window.location = spotifyUrl;
    }
};

export default loginAction