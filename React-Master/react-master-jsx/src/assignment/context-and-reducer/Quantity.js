export const initialCount = {count: 0};

export const quantityReducer = (quantity, action) => {
    if(action.type == "INC") return {...quantity, count: quantity.count + 1};
    else if(action.type == "DEC") return {...quantity, count: quantity.count - 1};
    else return {count: initialCount.count};
}