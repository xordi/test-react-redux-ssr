import { INCREMENT_COUNTER } from '../actions/types';

export default function appReducer(state = {}, action){
    switch(action.type){
        case INCREMENT_COUNTER:
            return { ...state, count: state.count + 1 };
        default:
            return state;
    }
}