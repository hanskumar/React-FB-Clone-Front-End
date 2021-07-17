import "./online.css";

export default function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src="/assets/person/1.jpeg" alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">Test</span>
    </li>
  );
}