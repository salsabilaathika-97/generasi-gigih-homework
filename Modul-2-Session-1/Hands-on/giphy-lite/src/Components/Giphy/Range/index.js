import React from 'react';
import Input from '@material-ui/core';

const Range = props => {
    return (
        <Input onChange={props.updateLimit}
                type = "range"
                min = "1"
                max = "12"
                defaultValue = {props.limit} />
    )
}

export default Range;