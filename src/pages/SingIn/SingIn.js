import { useState } from "react";
import { Link } from "react-router-dom";

export default function SingIn(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function handlePassword(e){
        setPassword(e.target.value);
    }

    return(
        <div className="contianer-center">
            <div className="login">
                <div className="logo-area">
                    <img src="#" alt="logo"/>
                </div>
                <form>
                    <h1>Login</h1>
                    <input type="text" placeholder="Type your email" value={email} onChange={handleEmail}/>
                    <input type="password" placeholder="***********" value={password} onChange={handlePassword}/>
                    <input type="submit" value="Login"/>
                    <Link to="/register">Create acount!</Link>
                </form>
            </div>
        </div>
    );
}