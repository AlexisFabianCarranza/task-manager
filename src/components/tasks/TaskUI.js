import React , {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Title from '../Title';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import States from '../../utilities/states';
import {Link} from 'react-router-dom';
import '../../styles/task.css';


export default class TaskUI extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            state: States.toDo
        }
    }
    componentWillReceiveProps(props){
        this.setState({
            title: (this.props.taskTitle) ? this.props.taskTitle : '',
            description: (this.props.taskDescription) ? this.props.taskDescription : '',
            state:  (this.props.taskState) ? this.props.taskState : States.toDo,
        })
    }
    submit = () => {
        this.props.mainAction(this.state);
    }
    render(){
        return(
            <div className={'container'}>
                <div className={'container-form'}>
                    <Title title={this.props.title}/>
                    <TextField
                        className="text-field"
                        variant="outlined"
                        required
                        label="Title"
                        margin="normal"
                        value={this.state.title}
                        onChange={(text) => this.setState({title: text.target.value})}
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
                            className='select'
                        >
                            <MenuItem value={States.toDo}>{States.toDo}</MenuItem>
                            <MenuItem value={States.inProgress}>{States.inProgress}</MenuItem>
                            <MenuItem value={States.done}>{States.done}</MenuItem>
                        </Select>
                        <Link to='/' style={{textDecoration: 'none'}}>
                            <Button 
                                className='button'
                                variant="contained" 
                                color="secondary"
                                onClick={this.submit}
                            >
                                {this.props.textButton}
                            </Button>
                        </Link>
                        
                    </div>    
                    
                </div>
            </div>
        )
    }
}