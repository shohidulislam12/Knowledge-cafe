
import { useState } from 'react'
import './App.css'
import Blogs from './assets/Component/Blogs/Blogs'
import Bookmark from './assets/Component/Bookmark/Bookmark'
import Header from './assets/Component/Header/Header'

function App() {
const [bookmark,setBookmark]=useState([])
const [readingTime,setReadingTime]=useState(0)
const handleBookmark=(blog)=>{
const newBookmark=[...bookmark,blog]
setBookmark(newBookmark)
}
const handleMarkasRead=(reading_time,id)=>{
  setReadingTime(readingTime+reading_time)
    console.log('id from reading', id)
    const remaingBookmark=bookmark.filter(bookmark=>bookmark.id !==id)
    setBookmark(remaingBookmark)
  

}

  return (
    <>
<Header></Header>
<div className='container mx-auto md:flex '>
<Blogs handleMarkasRead={handleMarkasRead} handleBookmark={handleBookmark}></Blogs>
<Bookmark readingTime={readingTime} bookmark={bookmark}></Bookmark>
</div>
    </>
  )
}

export default App
