import {
    ChatIcon,
    HeartIcon,
    PaperAirplaneIcon,
    DotsHorizontalIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post(props) {
const posts = props.posts;
const handlefav = props.handlefav;

    return (
        posts.map((post) => (

            <div class="container mx-auto px-4 overflow-hidden">


            <div className="bg-white my-7 border rounded-sm">

                {/* Header */}
                <div className="flex items-center p-5">
                    <img src={post.userImage}
                        className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
                        alt="" />
                    <p className="flex-1 font-bold">{post.userName}</p>
                    <DotsHorizontalIcon className="h-5" />
                </div>


                {/* img */}

                <img src={post.postPic} className="object-cover w-full" alt="" />


                {/* buttons */}

                <div className="flex space-x-4 px-4 pt-4">
                    <HeartIcon className="btn" onClick={() => props.handlefav(post)} />
                    <ChatIcon className="btn" />
                    <PaperAirplaneIcon className="btn" />

                </div>


                {/* caption */}

                <p className="p-5 truncate">
                    <span className="font-bold mr-1">{post.userName}</span>
                    {post.caption}
                </p>


                </div>
            </div>)

            


        )
    )

}

export default Post;