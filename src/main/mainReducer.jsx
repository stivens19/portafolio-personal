
import { types } from './../types/types';

export const MainReducer=(state={},action)=>{
    switch (action.type) {
        case types.menu: {
            return {
                ...state,
                isActive:action.payload
            }
        }
        default:
            return state;
    }
}