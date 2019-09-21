import React, {Component} from 'react';


export default class Title extends Component {
    render(){
        return(
            <div >
                <h1 >{this.props.textTitle}</h1>
            </div>
        )
    }
}