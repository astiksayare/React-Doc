import * as Types from '@/app/types';

export const initialCounter: Types.Counter = { count: 0 };

export const counterReducer = (state: Types.Counter, action: {type: string}) : Types.Counter => {
    
    if(action.type === "INC") return {...state, count: state.count + 1}
    return initialCounter;
}
 