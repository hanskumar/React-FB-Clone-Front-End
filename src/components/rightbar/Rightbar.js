import "./rightbar.css";
import OnlineFriends from '../online/online'

const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">

                <div className="birthdayContainer">
                <img className="birthdayImg" src="assets/gift.png" alt="" />
                <span className="birthdayText">
                    <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
                </span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <OnlineFriends/>
                    <OnlineFriends/>
                    <OnlineFriends/>
                    <OnlineFriends/>
                    <OnlineFriends/>
                </ul>
      
            </div>
        </div>
    )
}

export default Rightbar
