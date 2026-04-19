import React from "react";
import * as Context from '../context';

export const AddBlog = ({buttonTheme}) => {

    const [blog, addBlog] = React.useState({
        title: '',
        content: ''
    });

    const {blogs, setBlog} = Context.useBlogContext();
    const handleBlog = (e) => {
        e.preventDefault();
        setBlog([...blogs, {blog, id: Date.now()}])
        addBlog({
            title: '',
            content: ''
        });
    }
    return (
        <section className="mt-1 full-width text-center">
            <h1>Add Blogs</h1>
            <div>
                <form action="" className="flex-column" onSubmit={handleBlog}>
                    <input
                    type="text" 
                    placeholder="Title"
                    name="title"
                    value={blog.title}
                    onChange={(e) => addBlog({...blog, [e.target.name]: e.target.value})}
                    />

                    <textarea name="content"
                    placeholder="Enter the content"
                    value={blog.content}
                    onChange={(e) => addBlog({...blog, [e.target.name]: e.target.value})}
                    ></textarea>

                    <button type="submit" style={buttonTheme}>Add</button>
                </form>
            </div>
        </section>
    )
}