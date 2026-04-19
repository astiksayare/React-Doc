import React from "react";

export const initialTheme = { textColor: '#000', backgroundColor: '#FFF'};

export const themeReducer = (state, action) => {
    if(action.type === "DARK") return {textColor: '#FFF', backgroundColor: '#000'};
    return initialTheme;
}