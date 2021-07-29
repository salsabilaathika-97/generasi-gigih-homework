import React from 'react';

class Album extends React.Component {
    render(){
        return <h3 id = "album">{this.props.name}</h3>;
    }
}

export default Album