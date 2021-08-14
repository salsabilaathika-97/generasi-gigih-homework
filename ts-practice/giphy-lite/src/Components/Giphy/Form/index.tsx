import React from 'react';
import { FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';

const Form =() => {
   return (
    <FormControl>
        <InputLabel htmlFor="my-input">Search GIF</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Mencari GIF</FormHelperText>
    </FormControl>
   );
};

export default Form;