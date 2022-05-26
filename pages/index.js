import Head from 'next/head'
import Header from '../components/Header'
import Post from '../components/Post'
import Footer from '../components/Footer'
import mongoose from 'mongoose'
import Fetch from 'isomorphic-unfetch'
import { connect } from 'mongoose'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
const Home = () => {
  const [posts, setPost] = useState([])
  async function fetchpost() {
    fetch('http://localhost:3000/api/notes')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setPost(data.data)
      })
  }
  useEffect(() => {
    fetchpost()
  }, [posts])
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
  }
  return (
    <div className="">
      <Head>
        <title>Noon Categories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {posts && <Post posts={posts} handlefav={handlefav} />}
      <Footer />
    </div>
  )
}
export default Home