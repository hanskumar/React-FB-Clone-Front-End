import Share from "../../components/share/Share"
import Post from "../../components/post/Post"
import './feed.css'

import { AuthContext } from '../../context/AuthContext'
import axios from 'axios';
import { useContext , useRef,useState,useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Feed = () => {

    const { user } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    console.log(posts);

    useEffect(async () => {

          const config = {
              headers: { Authorization: `Bearer ${user.accessToken}` }
          };

          try {
              const response = await axios.get("/allPost/" + user._id,config);
              //console.log(response.data);
              setPosts(response.data.data);
          } catch (err) { 
              console.log(err);
              toast.error(err.response.data.message); 
          }
    },[])


    return (
            <div className="feed">
                <div className="feedWrapper">
                    <Share/>
                    { posts.map ((p) => (
                          <Post key={p._id} post={p} />
                    ))}
                    
                </div>
            </div>
    )
}

export default Feed
