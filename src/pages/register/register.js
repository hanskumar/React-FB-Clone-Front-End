import { Link } from "react-router-dom";
import { useRef } from 'react';
import './register.css'
import axios from "axios";
import { useHistory } from "react-router";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const name = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    
    const history = useHistory();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        
        const user = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
        };

        try {
            const response = await axios.post("/register", user);
            
            if(response.data.status == false){
                toast.error(response.data.message);

            } else if(response.data.status == true){
                toast.success(response.data.message);
                history.push("/login");
            }

        } catch (err) {
            console.log(err);
            //M.toast({html: "Something went wrong,Please try again!",classes:"#c62828 red darken-3"});
            toast.error("Something went wrong,Please try again!");
        }
    }
 
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                <h3 className="loginLogo">Facelook</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Lamasocial.
                </span>
                </div>
                <div className="loginRight">
                <form className="loginBox" onSubmit={handleSubmit}>
                
                    <input type="text" placeholder="Full Name" className="loginInput"  ref={name}/>
                    <input type="email" placeholder="Email" className="loginInput"  ref={email}/>
                    <input type="password" placeholder="Password" className="loginInput"  ref={password}/>
                    <input type="password" placeholder="Password Again" className="loginInput"  ref={passwordAgain}/>
                    <button className="loginButton">Sign Up</button>
                    
                    <button className="loginRegisterButton"> 
                         <Link to="/login" >Log into Account</Link>
                    </button>
                </form>
                <ToastContainer />
                </div>
            </div>
            </div>
    )
}

export default Register
