import React, {Component} from 'react';

class Welcome extends Component {

    changeFromGlobal() {
        this.props.changeUser();
    }

    changeFromInternal() {
        this.props.changeTerm();
    }

    render(){
        return (
            <div className="rw-welcome">
                <h1>REWORK</h1>
                <h2>{this.props.term} {this.props.username} !</h2>
                <button onClick={(e) => this.changeFromGlobal()}>Change User From Global Store</button>
                <button onClick={(e) => this.changeFromInternal()}>Change Term From Internal Store</button>
            </div>
        );
    }
}

export default Welcome;