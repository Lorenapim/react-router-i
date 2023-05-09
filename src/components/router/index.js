import { Route,Routes } from "react-router-dom";
import Home from "../home";
import Contacto from "../contact";

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contacto/>}/>
        </Routes>
    )
}