import React from 'react';

class Image extends React.Component {
    render(){
        return <img id = "image" src = {this.props.url} alt = {this.props.alt}/>;
    }
}

export default Image