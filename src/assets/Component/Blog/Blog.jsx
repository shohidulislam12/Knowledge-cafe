import PropTypes from 'prop-types'; 
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleBookmark,handleMarkasRead}) => {
    const {title,id,cover,author,author_img,posted_date,reading_time,hashtags=[]}=blog
 
    return (
        <div>
            <img className='w-full  my-5' src={cover} alt={`cover picture of the title ${title}`}/>
            <div className='flex justify-between items-center'>
                <div className='flex gap-5'>
                    <img className='w-14 h-14' src={author_img} alt="" />
                    <span>
                        <h2 className='text-2xl font-semibold'>{author}</h2>
                        <p>{posted_date}</p>

                    </span>
                </div>
                <p className='flex items-center'>{reading_time} min read <button className='text-red-500' onClick={()=>handleBookmark(blog)}><CiBookmark /></button>
                </p>

            </div>
            <h2 className="text-3xl font-bold my-3">{title}</h2>
            <div className='gap-4 flex'>
                {
                hashtags.map((hash,index)=><span key={index}><a href="">#{hash}</a></span>)
      
                }
                      <br />
                      <p onClick={()=>handleMarkasRead(reading_time,id)} className='text-red-600'>mark as read </p>
                </div>
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired
 
}
export default Blog;