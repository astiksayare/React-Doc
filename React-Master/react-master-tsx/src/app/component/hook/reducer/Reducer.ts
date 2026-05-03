
export const initialCount: { count: number } = { count: 0 };

export const counterReducer = (state: {count: number}, action: {type: string}) : { count: number} => {
    if(action.type === "INC") return { count: state.count + 1 };
    else if(action.type === "DEC") return { count : state.count === 0 ? 0 : state.count - 1 };
    else return initialCount;
}