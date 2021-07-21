import React from 'react'
import './message.css'

const Message = () => {
    const own = false;
    return (
        <>
        <div className="message own">
            <div className="messageTop">
                <img
                className="messageImg"
                src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                />
                <p className="messageText">Message Text sender</p>
            </div>
            <div className="messageBottom">2021-09-08</div>
        </div>

        <div className="message">
            <div className="messageTop">
                <img
                className="messageImg"
                src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                />
                <p className="messageText">Message Text Reciver</p>
            </div>
            <div className="messageBottom">2021-09-08</div>
        </div>

      </>
    )
}

export default Message
