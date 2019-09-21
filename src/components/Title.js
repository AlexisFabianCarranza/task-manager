import React, {Component} from 'react';
import '../styles/basic.css';

export default class Title extends Component {
    render(){
        return(
            <div >
                <h1 className='title'>{this.props.title}</h1>
            </div>
        )
    }
}