import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios';
import { useContext , useRef,useState,useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Post = (post) => {

    console.log("ALL POST::",post.post.createdAt);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="post">
            <div className="postWrapper">
            <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={PF + post.post.userId.profile_image } 
              alt=""
            />
            <span className="postUsername">{post.post.userId.name }</span>
            <span className="postDate">15 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
            <div className="postCenter">
          <span className="postText">{post.post.descprtion }</span>
          <img className="postImg" src={post.post.image } alt="" />
        </div>
            <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png"  alt="" />
            <img className="likeIcon" src="assets/heart.png"  alt="" />
            <span className="postLikeCounter">3 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
            </div>
        </div>
    )
}

export default Post
