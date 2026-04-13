
export const initialValue = {
    username: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    address: '',
}

export const userReducer = (state, action) => {
    if(action === "RESET") return initialValue;

    return {...state, [action.name]: action.value};
}