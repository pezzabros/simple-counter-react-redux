import React, {Component} from 'react';

export default class CounterContainer extends Component {
    constructor(props) {
        super(props);

    }

    handleAddValue(){
        let handleClick = this.props.handleClick
        let value = parseInt(this.input.value);

        handleClick(value);
    }

    render() {
        return (
            <div>
                <button onClick={(e) => this.handleAddValue()}>Add</button>
                <input id="incrementValue" type="text" ref={(input) => this.input = input} placeholder="Increment value..."/>
            </div>

        );
    }

}