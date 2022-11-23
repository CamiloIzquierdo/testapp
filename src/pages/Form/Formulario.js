import React from "react";
import { Link } from "react-router-dom";
import "./Formulario.css";
import Constantes from "../../components/Constantes";
import { Toast } from "bootstrap";

class AgregarPelicula extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: {
                pelicula: "",
                puntajegordo: Number,
                puntajegorda: Number,
                comentario: "",
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDePelicula = this.manejarEnvioDePelicula.bind(this);
    }
    render() {
        return (
            <div className="form-pelicula">
                <form onSubmit={this.manejarEnvioDePelicula}>
                    <fieldset>
                        <legend className="d-flex justify-content-center">
                            Puntaje de la pelicula
                        </legend>
                        <div className="group">
                            <label for="pelicula">🎬</label>
                            <input
                                autoFocus
                                required
                                placeholder="pelicula"
                                type="text"
                                id="pelicula"
                                onChange={this.manejarCambio}
                                value={this.state.pelicula.pelicula}
                                className="input"
                            />
                        </div>

                        <div className="group">
                            <label for="puntajegorda">👩</label>
                            <input
                                autoFocus
                                required
                                placeholder="puntajegorda"
                                type="number"
                                id="puntajegorda"
                                onChange={this.manejarCambio}
                                value={this.state.pelicula.puntajegorda}
                                className="input"
                            />
                        </div>

                        <div className="group">
                            <label for="puntajegordo">🧑</label>
                            <input
                                autoFocus
                                required
                                placeholder="puntajegordo"
                                type="number"
                                id="puntajegordo"
                                onChange={this.manejarCambio}
                                value={this.state.pelicula.puntajegordo}
                                className="input"
                            />
                        </div>
                        <div className="group">
                            <label for="comentario">🤔</label>
                            <textarea
                                autoFocus
                                required
                                placeholder="comentario"
                                type="text"
                                id="comentario"
                                onChange={this.manejarCambio}
                                value={this.state.pelicula.comentario}
                                className="input"
                            />
                        </div>
                    </fieldset>
                    <div className="form-group">
                        <button className="button is-success mt-2">
                            Guardar
                        </button>
                        &nbsp;
                        <Link to="/" className="button is-primary mt-2">
                            Volver
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
    async manejarEnvioDePelicula(evento) {
        evento.preventDefault();
        // Codificar nuestro videojuego como JSON

        const cargaUtil = JSON.stringify(this.state.pelicula);
        // ¡Y enviarlo!
        const respuesta = await fetch(`${Constantes.RUTA_API}`, {
            method: "POST",
            body: cargaUtil,
            headers: {
                "Content-Type": "application/json",
            },
        });
        const exitoso = await respuesta.json();
        if (exitoso) {
            Toast("Videojuego guardado 🎮", {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            this.setState({
                videojuego: {
                    nombre: "",
                    precio: "",
                    calificacion: "",
                },
            });
        } else {
            Toast.error("Error guardando. Intenta de nuevo");
        }
    }
}

export default AgregarPelicula;
