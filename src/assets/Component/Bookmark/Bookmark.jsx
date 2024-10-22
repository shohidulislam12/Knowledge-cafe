import Bookmar from "./bookmar";


const Bookmark = ({bookmark,readingTime}) => {
    return (
        <div  className="md:w-1/3 ">
         <div className="text-3xl  bg-[#c6c1e3] rounded-xl p-4 mx-2">
         <span className="text-purple-500">Spend time on read :{readingTime} Min </span>
         </div>
            <div className="bg-slate-200 p-3 rounded-xl mx-2">
            <h3 className="text-2xl">bookmark Blogs :{bookmark.length}</h3>
            {
                bookmark.map(bookmark=><Bookmar bookmark={bookmark}> </Bookmar>)
            }
            </div>
        </div>
    );
};

export default Bookmark;