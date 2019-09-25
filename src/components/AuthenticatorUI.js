import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Title from '../components/utilites/Title';
import ImgTasks from '../imgs/tasks.png';
import { Redirect } from 'react-router';
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
        this.setState({
            redirectHome: true,
        });
        this.props.login(this.state.email,this.state.password);
    }
    signUp = () =>{
        this.setState({
            redirectHome: true,
        });
        this.props.signUp(this.state.email, this.state.password);
    }
    render(){
        if (this.state.redirectHome){
            return <Redirect push to="/" />;
        }
        return(
            <div className={'container'}>
                    <div className={'container-form'}>
                        <div className={'content-text'}>
                            <Title title='Login'/>
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
                                <Button 
                                    className='button'
                                    variant="contained" 
                                    color="secondary"
                                    size="small"
                                    onClick={this.login}
                                >
                                    Login
                                </Button>
                                <Button 
                                    className='button'
                                    variant="contained" 
                                    color="secondary"
                                    size="small"
                                    onClick={this.signUp}
                                >
                                    Create Account
                                </Button>   
                            </div>
                        </div>  
                        <div className='content-img'>
                            <img src={ImgTasks} />
                            <Button 
                                    className='button'
                                    variant="outlined" 
                                    color="secondary"
                                    size="small"
                                    onClick={()=>console.log("se presiono")}
                                >
                                    Test Mode
                            </Button>   
                        </div>  
                        
                    </div>
                </div>
        )
    }    
}