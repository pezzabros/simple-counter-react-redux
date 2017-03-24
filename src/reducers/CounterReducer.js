/**
 * Created by dpezzatini on 24/03/17.
 */
import * as types from '../actions/ActionTypes';

const initialState = {
    value: 0
}

export default function CounterApp(state = initialState, action) {
    console.log("State:")
    console.log(state)

    switch (action.type) {
        case types.INCREMENT:
            return Object.assign({}, state, {
                value: state.value + 1
            })

        case types.DECREMENT:
            return Object.assign({}, state, {
                value: state.value - 1
            })

        case types.INCREMENT_BY_VALUE:
            return Object.assign({}, state, {
                value: state.value + action.value
            })
    }
    return state;
}