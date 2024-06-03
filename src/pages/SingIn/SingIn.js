import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";

export default function SingIn(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { singIn } = useContext(AuthContext);

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function handlePassword(e){
        setPassword(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();

        if(email !== '' && password !== ''){
            singIn(email, password);
        }
    }

    return(
        <div className="contianer-center">
            <div className="login">
                <div className="logo-area">
                    <img src="#" alt="logo"/>
                </div>
                <form onSubmit={handleSubmit}>
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