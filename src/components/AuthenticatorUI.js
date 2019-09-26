import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Title from '../components/utilites/Title';
import ImgTasks from '../imgs/tasks.png';
import { Redirect } from 'react-router';
import {
    BrowserRouter as ReactRouter,
    Route,
    Link
  } from 'react-router-dom';
import '../styles/auth.css';

export default class AuthenticatorUI extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            password: '',
            redirectHome: false,
        }
    }
    login = () =>{
        this.props.login(this.state.email, this.state.password);
    }
    signUp = () =>{
        this.props.signUp(this.state.email, this.state.password);
        if (this.props.isLogin){
            this.setState({
                redirectHome: true
            });
        }
    }
    render(){
        if (this.state.redirectHome){
            return <Redirect push to="/" />;
        }
        return(
            <div className={'container'}>
                    <div className={'container-form'}>
                        <div className={'content-text'}>
                            <Route path="/" exact render={()=>{
                                return <Title title='Login'/>
                            }}></Route>
                            <Route path="/signup" exact render={()=>{
                                return <Title title='Sign Up'/>
                            }}></Route>
                            <TextField
                                className="text-field"
                                variant="outlined"
                                required
                                label="Email"
                                type="email"
                                margin="normal"
                                value={this.state.email}
                                onChange={(text) => {
                                    this.setState({email: text.target.value});
                                }}
                            />
                            <TextField
                                className="text-field"
                                variant="outlined"
                                required
                                label="Password"
                                margin="normal"
                                type="password"
                                value={this.state.password}
                                onChange={(text) => {
                                    this.setState({password: text.target.value});
                                }}
                            />
                            <div className='form-horizontal'>
                                <Route path="/" exact render={()=>{
                                    return < Button 
                                                className='button'
                                                variant="contained" 
                                                color="secondary"
                                                size="small"
                                                onClick={this.login}
                                            >
                                                Login
                                            </Button>
                                }}></Route>
                                <Route path="/signup" exact render={()=>{
                                    return  <Button 
                                                className='button'
                                                variant="contained" 
                                                color="secondary"
                                                size="small"
                                                onClick={this.signUp}
                                                >
                                                Sign Up
                                            </Button>  
                                }}></Route>
                            </div>
                            <Route path="/" exact render={()=>{
                                    return  <Link to="/signup">
                                                <p>Create Account</p> 
                                            </Link> 
                                }}></Route>
                            <Route path="/signup" exact render={()=>{
                                    return  <Link to="/">
                                                <p>Login</p>
                                            </Link>   
                                }}></Route>
                        </div>  
                        <div className='content-img'>
                            <img src={ImgTasks} />
                            <Button 
                                    className='button'
                                    variant="outlined" 
                                    color="secondary"
                                    size="small"
                                    onClick={()=>this.props.testMode()}
                                >
                                    Test Mode
                            </Button>   
                        </div>  
                        
                    </div>
                </div>
        )
    }    
}