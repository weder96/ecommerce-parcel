import { INCREMENT, DECREMENT } from './../actions/actionTypes';

const increment = () => {
    return {
        type: INCREMENT
    }
}

const decrement = () => {
    return {
        type: DECREMENT
    }
}

export default {
    increment,
    decrement
}