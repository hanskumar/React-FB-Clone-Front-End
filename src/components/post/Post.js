import "./post.css";
import { MoreVert } from "@material-ui/icons";

const Post = () => {
    return (
        <div className="post">
            <div className="postWrapper">
            <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="assets/person/4.jpeg"
              alt=""
            />
            <span className="postUsername">Dora Hawks</span>
            <span className="postDate">15 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
            <div className="postCenter">
          <span className="postText">Love For All, Hatred For None.</span>
          <img className="postImg" src="assets/post/1.jpeg" alt="" />
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
