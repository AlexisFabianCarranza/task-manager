import React, {Component} from 'react';

export default class Title extends Component {
    render(){
        return(
            <div>
                <h1 
                    style={{
                        color: '#455a64', 
                        fontSize: 25,
                        fontWeight: 500
                }}
                >
                    {this.props.title}
                </h1>
            </div>
        )
    }
}