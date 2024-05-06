import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/header"
import Home from "../pages/home";
import Projetos from "../pages/projetos";

const PageRouter = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projetos" element={<Projetos/>}/>
                <Route path="*" element={<h1>Not Found</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter;