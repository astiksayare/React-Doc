
export const initialState = {count: 0};

export const counterReducer = (state, action) => {
    if(action.type === 'INC') return {...state, count: state.count + 1};
    else if(action.type === 'DESC') return {...state, count: state.count - 1};
    else return {count: initialState.count};
}