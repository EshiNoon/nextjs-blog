import Post from '../components/Post'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
//fetching favorite image data from mongodb
Liked.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/notes')
  const { data } = await res.json()
  return { notes: data }
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
        <Post posts={fav} />
      </div>
    </div>
  )
}
export default Liked