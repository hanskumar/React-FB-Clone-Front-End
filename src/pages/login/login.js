import './login.css'
import { Link,useHistory } from "react-router-dom";
import { useRef } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgress } from "@material-ui/core";

const Login = () => {

    const email = useRef();
    const password = useRef();

    const history = useHistory();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        
        const user = {
            email: email.current.value,
            password: password.current.value,
        };

        try {
            const response = await axios.post("/login", user);
            
            if(response.data.status === false){
                toast.error(response.data.message);

            } else if(response.data.status === true){
                toast.success(response.data.message);
                history.push("/");
            }

        } catch (err) {
            console.log(err);
            console.log(err.response.data.message)
            //M.toast({html: "Something went wrong,Please try again!",classes:"#c62828 red darken-3"});
            toast.error(err.response.data.message);
        }
    }


    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                <Link to ="/" > <h3 className="loginLogo">Facelook</h3></Link>
                <span className="loginDesc">
                    Connect with friends and the world around you on Lamasocial.
                </span>
                </div>
                <div className="loginRight">
                <form className="loginBox" onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" className="loginInput" ref={email} />
                    <input type="password" placeholder="Password" className="loginInput" ref={password}/>
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton"> 
                         <Link to="/register" >Create a New Account</Link>
                    </button>
                </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login
