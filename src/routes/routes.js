import { Route, Routes } from "react-router-dom";

import SingIn from '../pages/SingIn/SingIn.js';
import SingUp from '../pages/SingUp/SingUp.js';

export default function RouterApp(){
    return(
        <Routes>
            <Route path="/" element={ <SingIn/> }/>
            <Route path="/register" element={ <SingUp/> }/>
        </Routes>
    );
}