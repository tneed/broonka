import React from 'react';
import { connect } from 'react-redux';
import Component from './component';
import { changeUser } from 'src/actions/user';
import { changeTerm } from '../../actions/term';

class WelcomeContainer extends React.Component {
    render(){
        return <Component {...this.props}/>;
    }
}

export default connect( 
    ({ userReducer:{username}, termReducer:{term} })=>({ username, term }),
    {changeUser, changeTerm}
)(WelcomeContainer);