import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import './messenger.css'

const messenger = () => {
    const currentChat = true;
    return (
        <>
            <Topbar />
            <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            

            <div className="conversation">
                <img
                    className="conversationImg"
                    src="assets/noAvatar.png"
                    alt=""
                />
                <span className="conversationName">Raman Dahiya</span>
            </div>

          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  <Message/>
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    
                  ></textarea>
                  <button className="chatSubmitButton" >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline/>
            <ChatOnline/>
            <ChatOnline/>
            <ChatOnline/>
          </div>
        </div>
      </div>
        </>
    )
}

export default messenger
