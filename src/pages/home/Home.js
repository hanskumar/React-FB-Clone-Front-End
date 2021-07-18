import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"
import "./home.css"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <Sidebar />
                <Feed/>
                <Rightbar/>
            </div>

            <ToastContainer />
        </>
    );
}

export default Home
