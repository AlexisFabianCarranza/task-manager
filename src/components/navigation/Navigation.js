import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import MyAppBar from './MyAppBar';

class Navigation extends Component {
    constructor(props){
        super(props);
    }
    goHome(){
        this.props.dispatch(push('/'))
    }
    render(){
        return <MyAppBar />
    }
} 

function mapStateToProps(state, ownProps){
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Navigation)