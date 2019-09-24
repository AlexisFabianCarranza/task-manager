import React , {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Title from '../components/utilites/Title';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import States from '../utilities/states';
import { Redirect } from 'react-router';
import '../styles/task.css';

export default class TaskUI extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            state: States.toDo,
            id: '',
            validTitle: true,
            redirectHome: false,
        };
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            title: (nextProps.taskTitle) ? nextProps.taskTitle : '',
            description: (nextProps.taskDescription) ? nextProps.taskDescription : '',
            state:  (nextProps.taskState) ? nextProps.taskState : States.toDo,
            id: (nextProps.taskId) ? nextProps.taskId : '',
        });
    }
    submit = () => {
        if ( !this.state.title || this.state.title.length > 30 ){
            this.setState({
                validTitle: false
            });
            return;
        }
        this.props.mainAction(this.state);
        this.setState({
            redirectHome: true,
        });
    }
    render(){
        if (this.state.redirectHome){
            return <Redirect push to="/" />;
        }
        return(
            <div className={'container'}>
                <div className={'container-form'}>
                    <Title title={this.props.title}/>
                    <TextField
                        helperText={(this.state.validTitle) ? '' : 'Required. Max lenght 30 letters'}
                        error = {(this.state.validTitle) ? '' : 'error'}
                        className="text-field"
                        variant="outlined"
                        required
                        label="Title"
                        margin="normal"
                        defaultValue="foo"
                        value={this.state.title}
                        onChange={(text) => {
                            this.setState({title: text.target.value});
                            this.setState({validTitle: true});
    
                        }}
                    />
                    <TextField
                        variant="outlined"
                        className='text-field'
                        label="Description"
                        multiline
                        rows="6"
                        margin="normal"
                        value={this.state.description}
                        onChange={(text) => this.setState({description: text.target.value})}
                    />
                    <div className='form-horizontal'>
                        <Select
                            className='select'
                            variant='outlined'
                            value={this.state.state}
                            onChange={(text)=> this.setState({state: text.target.value})}
                        >
                            <MenuItem value={States.toDo}>{States.toDo}</MenuItem>
                            <MenuItem value={States.inProgress}>{States.inProgress}</MenuItem>
                            <MenuItem value={States.done}>{States.done}</MenuItem>
                        </Select>
                        <Button 
                            className='button'
                            variant="contained" 
                            color="secondary"
                            onClick={this.submit}
                        >
                            {this.props.textButton}
                        </Button>
                    </div>    
                    
                </div>
            </div>
        )
    }
}
/*
<Link to='/' style={{textDecoration: 'none'} }>
                            
                        </Link>
*/