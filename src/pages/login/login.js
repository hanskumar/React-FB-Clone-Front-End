import './login.css'
import { Link,useHistory } from "react-router-dom";
import { useRef,useContext } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CircularProgress } from "@material-ui/core";

import { AuthContext } from '../../context/AuthContext';

const Login = () => {

    const email = useRef();
    const password = useRef();

    const history = useHistory();

    const { isFetching, dispatch } = useContext(AuthContext);

    //console.log(isFetching);

    const handleSubmit = async(e)=>{
        e.preventDefault();

        dispatch({ type: "LOGIN_START" });
        
        const user = {
            email: email.current.value,
            password: password.current.value,
        };

        try {
            const response = await axios.post("/login", user);

            if(response.data.status === false){
                toast.error(response.data.message);

            } else if(response.data.status === true){

                dispatch({ type: "LOGIN_SUCCESS", payload: response.data.data });

                localStorage.setItem("accessToken",response.data.accessToken)
                localStorage.setItem("userdata",JSON.stringify(response.data.data))

                history.push("/");
                toast.success(response.data.message);
            }

        } catch (err) {
            console.log(err);
            console.log(err.response.data.message)
            //M.toast({html: "Something went wrong,Please try again!",classes:"#c62828 red darken-3"});
            toast.error(err.response.data.message);

            dispatch({ type: "LOGIN_FAILURE", payload: err });
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
                    <button className="loginButton">
                        
                    {isFetching ? (
                        <CircularProgress color="white" size="20px" />
                    ) : (
                        "Log In"
                    )}

                    </button>
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
