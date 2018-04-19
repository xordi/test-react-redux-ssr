import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class Counter extends Component{

    constructor(props){
        super(props)        
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        this.props.incrementCounter();        
    }

    render(){
        return (
            <div>
                <span>{this.props.count}</span>
                <button type="button" onClick={this.onClick}>Increment</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    count: state.count
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);