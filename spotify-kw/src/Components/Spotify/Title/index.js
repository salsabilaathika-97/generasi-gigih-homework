import React from 'react';

class Title extends React.Component {
    render(){
        return <h3 id = "title">{this.props.name}</h3>;
    }
}

export default Title