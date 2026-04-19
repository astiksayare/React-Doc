import * as Context from '../context';
import * as Component from '../component';
import React from 'react';

const activeButton = {
    color: '#FFF',
    background: '#448aff',
    border: 'none'
}

export const ActionButton = () => {

    const {buttonTheme} = Context.useThemeContext();
    const [isActive, setIsActive] = React.useState({
        addBlog: true,
        viewBlog: false
    });

    const handleBlogAction = (e) => {
        if(e.target.value == 'Add Blog') {
            setIsActive({addBlog: true, viewBlog: false});
        }else {
            setIsActive({addBlog: false, viewBlog: true});
        }
    }

    return (
        <section className='container'>
           
           <div>
                <button onClick={handleBlogAction} value={'Add Blog'} style={isActive.addBlog ? activeButton : buttonTheme} className='mr-1'>Add Blog</button>
                <button onClick={handleBlogAction} value={'View Blog'} style={isActive.viewBlog ? activeButton : buttonTheme}>View Blogs</button>
           </div>
            <div style={{border: `1px solid ${buttonTheme.textColor}`, borderRadius: '1rem', padding: '1rem'}} className='container'>
                {
                    isActive.addBlog ? <Component.AddBlog buttonTheme={activeButton}/> : <Component.ViewBlogs />
                }
            </div>
        </section>
    )
}