import React, { useState } from 'react';
import gif from '../../../Data';
import axios from "axios";

const Form = () => {
    const [search, setSearch] = useState('');

    const handleSubmit = event => {
        event.prevenDefault();
        console.log(search);
    }

    return (
        <input type = "search" value={search} onChange={event=>setSearch(event.target.value)} placeholder = "Cari GIF"/>
        
    )
}

export default Form

// class Form extends React.Component {
//     render(){
      
        
//         return <input type = "text" placeholder = "Cari GIF"
//         />
     

//     }
// }

// export default Form