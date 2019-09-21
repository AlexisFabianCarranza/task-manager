import React , {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Title from '../Title';
import Select from '@material-ui/core/Select';
import States from '../../utilities/states';

export default class TaskUI extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            state: States.toDo
        }
    }
    submit = () => {
        this.props.saveTask(this.state);
    }
    render(){
        return(
            <div >
                <div>
                    <Title title={'Add Task'}/>
                </div>
                <div>
                    <TextField
                        required
                        label="Title"
                        margin="normal"
                        value={this.state.title}
                        onChange={(text) => this.setState({title: text.target.value})}
                    />
                    <TextField
                        label="Description"
                        multiline
                        rows="4"
                        margin="normal"
                        value={this.state.description}
                        onChange={(text) => this.setState({description: text.target.value})}
                    />    
                    <Select
                        native
                        value={this.state.state}
                        onChange={(text)=> this.setState({state: text.target.value})}
                        inputProps={{
                            name: 'state',
                            id: 'filled-age-native-simple',
                        }}
                        >
                            <option value={States.toDo}>{States.toDo}</option>
                            <option value={States.inProgress}>{States.inProgress}</option>
                            <option value={States.done}>{States.done}}</option>
                        </Select>
                    <div>
                        <Button 
                            variant="contained" 
                            color="secondary"
                            onClick={this.submit}
                        >
                            Create Task
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}