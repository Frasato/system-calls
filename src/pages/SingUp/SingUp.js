import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";

export default function SingUp(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const {singUp} = useContext(AuthContext);

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function handlePassword(e){
        setPassword(e.target.value);
    }

    function handleName(e){
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();

        if(name !== '' && email !== '' && password !==''){
            singUp(email, password, name);
        }
    }

    return(
        <div className="contianer-center">
            <div className="login">
                <div className="logo-area">
                    <img src="#" alt="logo"/>
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <input type="text" placeholder="Name" value={name} onChange={handleName} required/>
                    <input type="text" placeholder="Type your email" value={email} onChange={handleEmail} required/>
                    <input type="password" placeholder="***********" value={password} onChange={handlePassword} required/>
                    <input type="submit" value="Login"/>
                    <Link to="/">Already have a acount?</Link>
                </form>
            </div>
        </div>
    );
}