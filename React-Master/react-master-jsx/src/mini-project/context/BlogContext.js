import React from "react";

const BlogContext = React.createContext({
    blog: [
        {
            id: 0, 
            title: '',
            content: ''
        }
    ]
});

export const BlogContextProvider = BlogContext.Provider;

export const useBlogContext = () => {
    return React.useContext(BlogContext);
}