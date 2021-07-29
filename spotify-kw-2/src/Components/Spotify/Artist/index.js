import React from 'react';

class Artist extends React.Component {
    render(){
        return <h3 id = "artist">{this.props.name}</h3>;
    }
}

export default Artist