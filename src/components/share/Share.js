import './share.css';
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"

import { useContext , useRef,useState,useEffect} from 'react';
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Share = () => {

    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const API_URL = process.env.REACT_APP_IMAGE_UPLOAD_URL;    

    const desc = useRef();    
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);
    //console.log("IMAGE URL:::",image);

    useEffect(async () => {
        if(url){
            /*------Submit Post Data after uploading the image-----------*/
            const newPost = {
                //userId: user._id,
                desc: desc.current.value,
                image_url:url
            };

            const config = {
                headers: { Authorization: `Bearer ${user.accessToken}` }
            };

            try {
                const response = await axios.post("/createPost", newPost,config);
                console.log(response);
                toast.success(response.data.message);
                //window.location.reload();
            } catch (err) { 
                //console.log(err);
                toast.error(err.response.data.message); 
            }

        }
        
    }, [url])

    const submitHandler = async (e)=>{

        e.preventDefault();

        /*-----Upload image First----*/
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', process.env.REACT_APP_upload_preset);
        data.append('cloud_name', process.env.REACT_APP_cloud_name);

        try {
           const response = await axios.post(API_URL, data);
           if(response){
             console.log(response.data);
             setUrl(response.data.secure_url)
           }
        } catch (err) {
            console.log(err)
        }
 
    }

    return (
        <div className="share">
            <div className="shareWrapper">
            <div className="shareTop">
            <img className="shareProfileImg" src={PF + user.profile_image} alt="" />
            <input
                placeholder={"What's in your mind " + user.name + " ?"}
                className="shareInput"
                ref={desc}/>
            </div>
        <hr className="shareHr"/>
        <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
                <lable htmlFor="file" className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                    <input
                        style={{ display: "" }}
                        type="file"
                        id="file"
                        accept=".png,.jpeg,.jpg"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </lable>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
      <ToastContainer />
    </div>
    )
}

export default Share
