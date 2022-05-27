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
  fetchpost()
  return (
    <div className="">
      <Head>
        <title>Noon Categories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {posts && <Post posts={posts} />}
      <Footer />
    </div>
  )
}
export default Home