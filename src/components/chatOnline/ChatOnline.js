import React from 'react'
import "./chatOnline.css";

const ChatOnline = () => {
    return (
        <div className="chatOnline">
            
                <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img
                    className="chatOnlineImg"
                    src="assets/noAvatar.png"
                    alt=""
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Jhon Cater</span>
                </div>
        </div>
    )
}

export default ChatOnline
