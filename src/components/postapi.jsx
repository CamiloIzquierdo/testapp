import axios from "axios";

export const PostApi = (nombre) => {
    console.log(nombre);
    const test = async () => {
        const body = {
            nombre: "pelikevirrrn",
            puntajeGordo: 44,
            puntajeGorda: 33,
            comentario: "una chorrrta",
        };

        const response = await axios.post(
            "https://k2n5j844.directus.app/items/pelis",
            body
        );
        console.log(response);
    };
    return (
        <div>
            <h1>test</h1>
            <button onClick={test}>click</button>
        </div>
    );
};
