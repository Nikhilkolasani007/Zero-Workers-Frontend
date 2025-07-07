import './Signup.css'
import { FcGoogle } from "react-icons/fc";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";




function Signup() {
    return(
        <>
        <div className="bg">
            <div className="left_block">
                <h1>*Only Wise People Choose Us.</h1>
            </div>
            <div className="right_block">
                <div className="ac">
                    <h1 className="title">Zero Workers</h1> 
                </div>
                <div className="ac">
                    <p className='in_nm'>Create a Free Account ☺️</p>
                </div>
                <div className="form">
                    <label for="fn" className='in_nm'>First Name</label>
                    <input type="text" name="fn" id="" placeholder='Nikhil' className='login-input'/>
                    <label for="ln" className='in_nm'>Last Name</label>
                    <input type="text" name="ln" id="" placeholder='Kolasani' className='login-input'/>
                    <label for="email" className='in_nm'>Email</label>
                    <input type="email" name="email" id="" placeholder='name@mail.com' className='login-input' />
                    <label for="password" className='in_nm'>Password</label>
                    <input type="password" name="password" id="" placeholder='Password Contain 8 characters long' className='login-input'/>
                    <label for="password" className='in_nm'>Conform Password</label>
                    <input type="password" name="password" id="" placeholder='Password Contain 8 characters long' className='login-input'/>
                    <label for="DOB" className='in_nm'>Date Of Birth (Tap on 📅 to Pick Date )</label>
                    <input type="date" name="DOB" id="" className='login-input'/>
                    <div className="tandc">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor=""><a href="#">I agree all Your Terms and Conditions</a></label>
                    </div>
                </div>
                <button className='login-button'>Create Account</button>
                <p className="manual2">or login with one of the platforms</p>
                <div className="icon-row">
                    <button className="google"><FcGoogle /></button>
                    <button className="github"><FaGithub /></button>
                    <button className="outlook"><TfiMicrosoftAlt /></button>
                </div>
            </div>
        </div>
        </>
    );
};
export default Signup;