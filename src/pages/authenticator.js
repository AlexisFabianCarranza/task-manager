import React,{Component} from 'react';
import AuthenticatorUI from '../components/AuthenticatorUI';
import {connect} from 'react-redux';
import {Login, SignUp} from '../request/UserRequest';
import * as actions from '../actions/userActions';
import firebase from 'firebase';

class Authenticator extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLogin: false,
            email: '',
            password: '',
        };
    }
    login = async (email, password) => {
        //return <Redirect push to="/" />;
        try {
            let response = await firebase.auth().signInWithEmailAndPassword(email, password);
            let {user} = response;
            console.log("Se realizo Login correctamente");
            this.props.dispatch(actions.login({id: user.uid, email: user.email}))
        }catch(err){
            console.log(err.message);
        } 
    }    
    signUp = async (email, password) => {
        try {
            let response = await firebase.auth().createUserWithEmailAndPassword(email , password);
            let {user} = response; //destructuring objetcts
            await firebase.firestore().collection('users').doc(user.uid).set({
                email: user.email
            });
            console.log("Se creo Usuario correctamente");
            this.login(email, password);
        }catch(err){
            console.log(err);
        }
    }
    testMode = () => {
        let user = Login('test@gmail.com','test2019');
        user.then((item) =>{
            this.props.dispatch(actions.login(item))
        });
    }
    render(){
        return(
            <AuthenticatorUI 
                login={this.login}
                signUp={this.signUp}
                testMode={this.testMode}
                isLogin={(JSON.stringify(this.props.user)!=='{}')? false:true}
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