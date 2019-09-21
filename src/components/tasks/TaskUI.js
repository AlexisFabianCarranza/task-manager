import React , {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Title from '../Title';
import Select from '@material-ui/core/Select';

export default class TaskUI extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            state: 'To do'
        }
    }
    render(){
        return(
            <div >
                <div>
                    <Title textTitle={'Add Task'}/>
                </div>
                <div>
                    <TextField
                        required
                        label="Title"
                        margin="normal"
                        value={this.state.title}
                        onChange={(title)=>{this.setState({title})}}
                    />
                    <TextField
                        label="Description"
                        multiline
                        rows="4"
                        margin="normal"
                        value={this.state.description}
                        onChange={(description)=>{this.setState({description})}}
                    />    
                    <Select
                        native
                        value={this.state.state}
                        onChange={(state)=>{this.setState({state})}}
                        inputProps={{
                            name: 'state',
                            id: 'filled-age-native-simple',
                        }}
                        >
                            <option value={"To Do"}>To Do</option>
                            <option value={"In Progress"}>In Progress</option>
                            <option value={"Done"}>Done</option>
                        </Select>
                    <div>
                        <Button 
                            variant="contained" 
                            color="secondary"
                            onClick={()=>this.props.save(this.state)}
                        >
                            Create Task
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}