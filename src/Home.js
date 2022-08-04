import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'kevin', id: 1},
        { title: 'Web Dev', body: 'lorem ipsum...', author: 'jeff', id: 2},
        { title: 'React to this!', body: 'lorem ipsum...', author: 'kevin', id: 3},
    ])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!!"/>
        </div>
     )
}
 
export default Home;