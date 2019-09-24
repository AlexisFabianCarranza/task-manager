import React,{Component} from 'react';
import AuthenticatorUI from '../components/AuthenticatorUI';

export default class Authenticator extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLogin: false,
            user: '',
            password: '',
        };
    }
    render(){
        return(
            <AuthenticatorUI 
            
            />
        );
    }
}