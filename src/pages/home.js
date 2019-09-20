import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class Home extends Component {
    render(){
        return(
            <div >
                <FlatButton secondary={true}label="Que onda"/>
            </div>
        )
    }
}

