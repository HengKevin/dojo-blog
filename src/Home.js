import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'kevin', id: 1},
        { title: 'Web Dev', body: 'lorem ipsum...', author: 'jeff', id: 2},
        { title: 'React to this!', body: 'lorem ipsum...', author: 'kevin', id: 3},
    ])

    return (
        <div className="home">
            
            {blogs.map((blog) => {
                return <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>;
            })}
        </div>
     );
}
 
export default Home;