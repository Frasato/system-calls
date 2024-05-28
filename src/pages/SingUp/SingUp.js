import { useState } from "react";
import { Link } from "react-router-dom";

export default function SingUp(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [samePassword, setSamePassword] = useState('');
    const [name, setName] = useState('');

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function handlePassword(e){
        setPassword(e.target.value);
    }

    function handleSamePassword(e){
        if(password === e.target.value){
            setSamePassword(e.target.value);
        }else{
            alert('The password are not the same!');
        }
    }

    function handleName(e){
        setName(e.target.value);
    }

    return(
        <div className="contianer-center">
            <div className="login">
                <div className="logo-area">
                    <img src="#" alt="logo"/>
                </div>
                <form>
                    <h1>Register</h1>
                    <input type="text" placeholder="Name" value={name} onChange={handleName}/>
                    <input type="text" placeholder="Type your email" value={email} onChange={handleEmail}/>
                    <input type="password" placeholder="***********" value={password} onChange={handlePassword}/>
                    <input type="password" placeholder="***********" value={samePassword} onChange={handleSamePassword}/>
                    <input type="submit" value="Login"/>
                    <Link to="/">Already have a acount?</Link>
                </form>
            </div>
        </div>
    );
}