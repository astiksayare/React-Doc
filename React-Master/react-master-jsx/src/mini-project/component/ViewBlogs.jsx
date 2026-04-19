import * as Context from '../context';

export const ViewBlogs = () => {

     const {blogs} = Context.useBlogContext();

     console.log(blogs)
    return (
        <section>
            <h1 className='text-center'>View Blogs</h1>

            <div>
                {
                    blogs.map(item => (
                      <div key={item.id} className='mt-1 flex-column'>
                        <h3>Title: {item.blog.title}</h3>
                        <p>{item.blog.content}</p>
                        <hr width='500'/>
                      </div>
                    ))
                }
            </div>
        </section>
    )
}