import { INCREMENT_COUNTER } from './types';

export function incrementCounter(){
    return (dispatch) => {
        dispatch({ type: INCREMENT_COUNTER });
    };
}