import React, {Component} from 'react';
import '../styles/basic.css';
import States from '../utilities/states';
import Title from './Title';
import TaskCard from '../components/tasks/TaskCard';

export default class HomeUI extends Component{
    componentDidMount(){
        console.log(States);
    }
    findTaks = (state) => {
        return <TaskCard />
    }
    render(){
        return(
            <div className='table'>
                <div className='tableDivisor'>
                    <Title title={States.toDo}/>
                    {this.findTaks(States.toDo)}
                </div>
                <div className='tableDivisor'>
                    <Title title={States.inProgress}/>
                    {this.findTaks(States.inProgress)}
                </div>
                <div className='tableDivisor'>
                    <Title title={States.done}/>
                    {this.findTaks(States.done)}
                </div>
            </div>
        )
    }
}