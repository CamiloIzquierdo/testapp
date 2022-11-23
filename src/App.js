import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Principal from "./components/Principal";
import Video from "./components/Video";
import "./css/App.css";
import AgregarPelicula from "./pages/Form/Formulario";
import Formulario from "./pages/Form/Formulario";
import FormResto from "./pages/FormResto/FormResto";

function App() {
    return (
        <>
            <Header />
            <div className="container d-flex align-items-center flex-column">
                <Routes>
                    <Route path="/principal" element={<Principal />} />
                    <Route path="/" element={<Video />} />
                    <Route path="/formulario" element={<AgregarPelicula />} />
                    <Route path="/formularioresto" element={<FormResto />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
