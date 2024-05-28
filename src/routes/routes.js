import { Route, Routes } from "react-router-dom";

import SingIn from '../pages/SingIn/SingIn.js';
import SingUp from '../pages/SingUp/SingUp.js';
import Err from '../components/Err/Err.js';
import Dashboard from "../pages/Dashboard/Dashboard.js";

export default function RouterApp(){
    return(
        <Routes>
            <Route path="/" element={ <SingIn/> }/>
            <Route path="/register" element={ <SingUp/> }/>
            <Route path="/home" element={ <Dashboard/> }/>
            <Route path="/*" element={ <Err/> }/>
        </Routes>
    );
}