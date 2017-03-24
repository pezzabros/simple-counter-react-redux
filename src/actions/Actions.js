/**
 * Created by dpezzatini on 24/03/17.
 */
import * as types from './ActionTypes';

export function increment() {
    return {
        type: types.INCREMENT
    }
}

export function decrement() {
    return {
        type: types.DECREMENT
    }
}

export function incrementByValue(value) {
    return {
        type: types.INCREMENT_BY_VALUE,
        value : value
    }
}