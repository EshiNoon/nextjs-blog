import {
  ChatIcon,
  HeartIcon,
  PaperAirplaneIcon,
  DotsHorizontalIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import Fetch from 'isomorphic-unfetch'
import { useEffect, useState } from 'react'
function Post({ posts }) {
  const [post, setPost] = useState(posts)
  const handlefav = async (post) => {
    let data
    if (post.fav === false) {
      data = {
        userId: posts.userId,
        userName: posts.userName,
        userImage: posts.userImage,
        postPic: posts.postPic,
        caption: posts.caption,
        fav: true,
        btnFill: 'red',
      }
    } else {
      data = {
        userId: posts.userId,
        userName: posts.userName,
        userImage: posts.userImage,
        postPic: posts.postPic,
        caption: posts.caption,
        fav: false,
        btnFill: 'white',
      }
    }
    const update = await fetch(`http://localhost:3000/api/notes/${post._id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    fetch('http://localhost:3000/api/notes')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setPost(data.data)
      })
  }
  return posts.map((post) => (
    <div className="container mx-auto overflow-hidden px-4" key={post.userId}>
      <div className="my-7 rounded-sm border bg-white">
        {/* Header */}
        <div className="flex items-center p-5">
          <img
            src={post.userImage}
            className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
            alt=""
          />
          <p className="flex-1 font-bold">{post.userName}</p>
          <DotsHorizontalIcon className="h-5" />
        </div>
        {/* img */}
        <img src={post.postPic} className="w-full object-cover" alt="" />
        {/* buttons */}
        <div className="flex space-x-4 px-4 pt-4">
          <HeartIcon
            className="btn"
            fill={post.btnFill}
            onClick={() => handlefav(post)}
          />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        {/* caption */}
        <p className="truncate p-5">
          <span className="mr-1 font-bold">{post.userName}</span>
          {post.caption}
        </p>
      </div>
    </div>
  ))
}
export default Post