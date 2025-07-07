import { FcGoogle } from "react-icons/fc";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import "./Login.css"
function Login() {
    return(
        <>
        <div className="login-css">
            <h1 className="title">Zero Workers</h1> 
            <p className="manual">Sign into Your Workspace ☺️</p>  
            <input type="email" placeholder="name@email.com" className="login-input" />
            <input type="password" placeholder="Password" className="login-input" /> 
            <button className="login-button">Next</button>

            <div className="login-link">
                <a href="#">Forgot Password?</a>
                <a href="#"style={{marginLeft: "80px"}}>Sign Up Your Team</a>
            </div>

            <div className="social-login"></div>
            <p className="manual2">or login with one of the platforms</p>
            <div className="icon-row">
                <button className="google"><FcGoogle /></button>
                <button className="github"><FaGithub /></button>
                <button className="outlook"><TfiMicrosoftAlt /></button>
            </div>
        </div>        
        </>
    );
};

export default Login;
