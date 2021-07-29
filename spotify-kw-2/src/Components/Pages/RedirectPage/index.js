import React, { Component } from 'react'
import _ from 'lodash'
import { getParamValues } from '../../../utils/functions';

export default class RedirectPage extends Component {
    componentDidMount(){
        console.log("Redirect start");
        const {setExpiryTime, history, location} = this.props;
        try{
            console.log(location.hash);
            if(_.isEmpty(location.hash)){
                console.log('hash location not found');
                return history.push('/dashboard');
            }
            console.log('hash location is found');
            const access_token = getParamValues(location.hash);
            const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
            localStorage.setItem('params', JSON.stringify(access_token));
            localStorage.setItem('expiry_time', expiryTime);
            setExpiryTime(expiryTime);
            history.push('/dashboard');
        }catch(error){
            return history.push('/');
        }
    }
    render() {
        return (<div>If you see this page, componentDidMount is not working :"</div>);
    }
}
