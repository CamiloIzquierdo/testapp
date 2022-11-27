import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Formulario.css";

export const FormPeli = () => {
    const [nombre, setNombre] = useState();
    const [image, setImage] = useState("");

    const handleTest = (event) => {
        event.preventDefault();
        setNombre({
            nombre: event.target.elements.pelicula.value,
            puntajeGorda: event.target.elements.puntajeGorda.value,
            puntajeGordo: event.target.elements.puntajeGordo.value,
            comentario: event.target.elements.comentario.value,
        });
        event.target.reset();
    };

    const postPeli = async () => {
        if (nombre) {
            const body = {
                nombre: nombre.nombre,
                puntajeGorda: nombre.puntajeGorda,
                puntajeGordo: nombre.puntajeGordo,
                comentario: nombre.comentario,
                imagen: image,
            };
            const response = await axios.post(
                "https://k2n5j844.directus.app/items/pelis",
                body
            );
        }
    };
    const handleImage = (file) => {
        Array.from(file).forEach((f) => {
            const reader = new FileReader();
            reader.readAsDataURL(f);
            reader.onload = function () {
                let array = [];
                let base64 = reader.result;
                array = base64.split(",");
                setImage(array[1]);
            };
        });
    };

    useEffect(() => {
        postPeli();
    }, [nombre]);

    return (
        <div className="form-pelicula">
            <form onSubmit={(event) => handleTest(event)}>
                <fieldset>
                    <legend className="d-flex justify-content-center">
                        Puntaje de la pelicula
                    </legend>
                    <div className="group">
                        <label htmlFor="pelicula">🎬</label>
                        <input
                            autoFocus
                            required
                            placeholder="Pelicula"
                            type="text"
                            id="pelicula"
                            className="input"
                        />
                    </div>

                    <div className="group">
                        <label htmlFor="puntajeGorda">👩</label>
                        <input
                            autoFocus
                            required
                            placeholder="Puntaje Gorda"
                            type="number"
                            id="puntajeGorda"
                            className="input"
                        />
                    </div>

                    <div className="group">
                        <label htmlFor="puntajeGordo">🧑</label>
                        <input
                            autoFocus
                            required
                            placeholder="Puntaje Gordo"
                            type="number"
                            id="puntajeGordo"
                            className="input"
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="file"></label>
                        <input
                            autoFocus
                            placeholder="comentario"
                            type="file"
                            id="file"
                            className="input"
                            accept=".jpg, .png|image/*"
                            onChange={(event) =>
                                handleImage(event.target.files)
                            }
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="comentario">🤔</label>
                        <textarea
                            autoFocus
                            required
                            placeholder="Opiniones"
                            type="text"
                            id="comentario"
                            className="input w-full min-h-[100px]"
                        />
                    </div>
                </fieldset>
                <div className="flex gap-5 w-full justify-end">
                    <button className="bg-sky-600 text-white px-2 rounded-md font-bold py-1">
                        Publicar
                    </button>
                </div>
            </form>
        </div>
    );
};
