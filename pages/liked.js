import Post from '../components/Post'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
//fetching favorite image data from mongodb
Liked.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/notes')
  const { data } = await res.json()
  return { notes: data }
}
const handlefav = async (post) => {
  let data
  if (post.fav === false) {
    data = {
      userId: post.userId,
      userName: post.userName,
      userImage: post.userImage,
      postPic: post.postPic,
      caption: post.caption,
      fav: true,
      btnFill: 'red',
    }
  } else {
    data = {
      userId: post.userId,
      userName: post.userName,
      userImage: post.userImage,
      postPic: post.postPic,
      caption: post.caption,
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
}
function Liked({ notes }) {
  const [fav, setFav] = useState([])
  notes.map((note) => {
    if (note.fav === true) {
      fav.push(note)
    }
  })
  return (
    <div>
      <div>
        <Header />
        <Post posts={fav} handlefav={handlefav} />
      </div>
    </div>
  )
}
export default Liked