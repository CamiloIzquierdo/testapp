import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Principal from "./components/Principal";
import Video from "./components/Video";
import "./css/App.css";
import { FormPeli } from "./pages/Form/Formulario";
import FormResto from "./pages/FormResto/FormResto";
import { VerPelis } from "./components/VerPelis";

function App() {
    return (
        <>
            <Header />
            <div className="container d-flex align-items-center flex-column">
                <Routes>
                    <Route path="/principal" element={<Principal />} />
                    <Route path="/" element={<Video />} />
                    <Route path="/formulariopelis" element={<FormPeli />} />
                    <Route path="/formularioresto" element={<FormResto />} />
                    <Route path="/verpelis" element={<VerPelis />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
