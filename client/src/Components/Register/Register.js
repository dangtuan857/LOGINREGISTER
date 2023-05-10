import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "../../App.css";
import Axios from "axios";

// Imported icons
import {MdMarkEmailRead} from "react-icons/md";
import {BsFillShieldLockFill} from "react-icons/bs";
import {AiOutlineSwapRight} from "react-icons/ai";
import {FaUserShield} from "react-icons/fa";

//Import our assets
import video from "../../Assets/video.mp4";
import logo from "../../Assets/logo.png";

const Register = () => {
    //UseState to hold our input
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigateTo = useNavigate();

    // Onclick let us get what the user has entered
    const createUser = (e) => {
        e.preventDefault();
        // We shall require Axios to create an ApI that connects to the server - let's install that
        Axios.post("http://localhost:3002/register", {
            // create variable to send to server through the route
            Email: email,
            UserName: userName,
            Password: password,
        }).then(() => {
            // On register let us redirect the user to the login page
            navigateTo('/')

            // Let us clear the fields too 
            setEmail('');
            setUserName('');
            setPassword('');
        });
    };

    return (
        <div className="registerPage flex">
            <div className="container flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>

                    <div className="textDiv">
                        <h2 className="title">
                            {" "}
                            Create And Sell Extraodinary Products
                        </h2>
                        <p>Adopt the peace of nature!</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text"> Have an account?</span>
                        <Link to={"/"}>
                            <button className="btn"> Login </button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo_image" />
                        <h3>Let Us Know You!</h3>
                    </div>

                    <form action="" className="form grid">
                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="input flex">
                                <MdMarkEmailRead className="icon" />
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Enter Email"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className="icon" />
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="Enter Username"
                                    onChange={(e) => {
                                        setUserName(e.target.value);
                                    }}
                                />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className="icon" />
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter Password"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn flex"
                            onClick={createUser}
                        >
                            <span> Register</span>
                            <AiOutlineSwapRight className="icon" />
                        </button>

                        <span className="forgotPassword">
                            Forgot your password <a href=""> Click here</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
