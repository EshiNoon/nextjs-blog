import Head from 'next/head'
import Header from "../components/Header";
import Post from "../components/Post";
import Footer from "../components/Footer";
import mongoose from "mongoose";
import Fetch from 'isomorphic-unfetch';
import { connect } from 'mongoose';



const Home = () => {

  const posts = [
    {
      userId: "111",
      userName: "eshaniiii_98",
      userImage: "/member-1.png",
      postPic: "/pic-01.png",
      caption: "Select noon category fashion and explore the world of fashion",
      tags: "#fashion#fashion#fashion#fashion#fashion#fashion#fashion#fashion#fashion#fashion#fashion",


    },

    {
      userId: "222",
      userName: "methieeee_96",
      userImage: "/member-2.png",
      postPic: "/pic-02.png",
      caption: "Select noon category fragrance and collect the best brands ever",
      tags: "#fashion#fashion#fashion#fashion#fashion#fashion#fashion#fashion#fashion#fashion#fashion",

    },

    {
      userId: "333",
      userName: "shaaaaan_06",
      userImage: "/member-3.png",
      postPic: "/pic-03.png",
      caption: "Select noon mobiles and get the latest mobile phones",
      tags: "#fashion#fashion#fashion#fashion#fashion#fashion#fashion#fashion#fashion#fashion#fashion",

    },

    {
      userId: "444",
      userName: "thaweeeee_99",
      userImage: "/member-4.png",
      postPic: "/pic-04.png",
      caption: "Select noon category appliances and ease your days at home",
      tags: "#fashion#fashion#fashion#fashion#fashion#fashion#fashion#fashion#fashion#fashion#fashion",

    }

  ];

    //function for adding favorite images using post method
    const handlefav = async (posts) => {

      let data =
      {
        userId: posts.userId,
        userName: posts.userName,
        userImage: posts.userImage,
        postPic: posts.postPic,
        caption: posts.caption,
        tags: posts.tags,
      }
  
  
      Fetch('http://localhost:3000/api/notes', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          data)
      })
  
  
    }


  return (
    <div className="">
      <Head>
        <title>Noon Categories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Post posts={posts} handlefav={handlefav} />
      <Footer />
    </div>







  )
}

export default Home;
