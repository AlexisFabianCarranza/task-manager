import React,{Component} from 'react';
import AuthenticatorUI from '../components/AuthenticatorUI';
import {connect} from 'react-redux';
import {Login, SignUp} from '../request/UserRequest';
import * as actions from '../actions/userActions';

class Authenticator extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLogin: false,
            email: '',
            password: '',
        };
        console.log(props.user);
    }
    login = (email, password) => {
        let user = Login(email,password);
        user.then((item) =>{
            this.props.dispatch(actions.login(item))
        });
    }
    signUp = (email, password) => {
        let user = SignUp(email,password)
        user.then((item) =>{
            this.props.dispatch(actions.login(item))
        });
    }
    render(){
        return(
            <AuthenticatorUI 
                login={this.login}
                signUp={this.signUp}
            />

        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Authenticator);