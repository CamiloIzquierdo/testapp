import axios from "axios";

export const PostApi = () => {
    const test = async () => {
        const body = {
            collection: "pelis",
            database: "api",
            dataSource: "Cluster0",
            document: {
                name: "pelikevirrrn",
                puntajegordo: 44,
                puntajegorda: 33,
                comentario: "una chorrrta",
            },
        };
        const header = {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "api-key":
                    "gyozKV9svE6YhFEgXekc9AJy6aT5UH7I9qBuLXF1h078BcLLWholMdKR6I8IspI2",
            },
        };
        const response = await axios.post(
            "https://data.mongodb-api.com/app/data-vugsc/endpoint/data/v1/action/insertOne",
            body,
            header
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
