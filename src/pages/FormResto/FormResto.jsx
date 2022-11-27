import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner/Spinner";
import "../Form/Formulario.css";

export const FormResto = () => {
    const [nombre, setNombre] = useState();
    const [image, setImage] = useState("");
    const [formSpinner, setFormSpinner] = useState(false);

    const handleTest = (event) => {
        event.preventDefault();
        setNombre({
            nombre: event.target.elements.restaurante.value,
            puntajeGorda: event.target.elements.puntajeGorda.value,
            puntajeGordo: event.target.elements.puntajeGordo.value,
            comentario: event.target.elements.comentario.value,
        });
        event.target.reset();
    };

    const postPeli = async () => {
        if (nombre) {
            setFormSpinner(true);
            const body = {
                nombre: nombre.nombre,
                puntajeGorda: nombre.puntajeGorda,
                puntajeGordo: nombre.puntajeGordo,
                comentario: nombre.comentario,
                imagen: image,
            };
            const response = await axios.post(
                "https://k2n5j844.directus.app/items/restaurantes",
                body
            );
            if (response) {
                toast.success("Restaurante agregado");
                setFormSpinner(false);
            } else {
                toast.error("Ocurrio un error!!");
                setFormSpinner(false);
            }
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
                        Puntaje del restaurante
                    </legend>
                    {!formSpinner ? (
                        <div className="flex flex-col gap-3">
                            <div className="group">
                                <label htmlFor="restaurante">🍔</label>
                                <input
                                    autoFocus
                                    required
                                    placeholder="Restaurante"
                                    type="text"
                                    id="restaurante"
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
                            <div className="flex gap-5 w-full justify-end">
                                <button className="bg-sky-600 text-white px-2 rounded-md font-bold py-1">
                                    Publicar
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <Spinner />
                        </div>
                    )}
                </fieldset>
            </form>
        </div>
    );
};
