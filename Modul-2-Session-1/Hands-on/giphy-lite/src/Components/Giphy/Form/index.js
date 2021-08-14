import React from 'react';
import { FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';

const Form = props => {
    const {searchIt} = props;
    let searchElement = '';
    return (
        <FormControl onSubmit={e => searchIt(e, searchElement)}>
            <InputLabel htmlFor="my-input">Search GIF</InputLabel>
            <Input type = "search" ref={element => searchElement = element} />
            <Input type = "submit" value = "Mencari GIF" />
            <FormHelperText id="my-helper-text">Mencari GIF</FormHelperText>
        </FormControl>
        
        
    )
}

export default Form