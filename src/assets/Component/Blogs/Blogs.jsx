import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmark,handleMarkasRead}) => {
    const [blogs,setBlogs]=useState([0])
    useEffect(()=>{
fetch('Blogs.json')
.then((res)=>res.json())
.then((data)=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2>Blogs :{blogs.length}</h2>
            {
                blogs.map(blog=><Blog handleMarkasRead={handleMarkasRead} handleBookmark={handleBookmark} key={blog.id} blog={blog}></Blog>)
            }

            
        </div>
    );
};

export default Blogs;