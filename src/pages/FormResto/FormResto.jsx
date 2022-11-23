import "./FormResto.css";
function FormResto() {
    return (
        <div className="form-pelicula">
            <form
                action="https://formsubmit.co/camiloi.99@hotmail.com"
                method="POST"
            >
                <fieldset>
                    <legend className="d-flex justify-content-center">
                        Puntaje del lugar
                    </legend>
                    <div className="group">
                        <label for="restaurante">🍔</label>
                        <input
                            type="text"
                            name="restaurante"
                            placeholder="Nombre del lugar"
                        />
                    </div>

                    <div className="group">
                        <label for="puntaje-gorda">👩</label>
                        <input
                            type="text"
                            name="puntaje-gorda"
                            placeholder="Puntaje gorda"
                        />
                    </div>

                    <div className="group">
                        <label for="puntaje-gordo">🧑</label>
                        <input
                            type="text"
                            name="puntaje-gordo"
                            placeholder="Puntaje gordo"
                        />
                    </div>
                    <div className="group">
                        <label for="opinion">🤔</label>
                        <textarea
                            className="opiniones"
                            type="text"
                            name="opinion"
                            placeholder="Opinion sobre el lugar"
                        />
                    </div>
                </fieldset>

                <input id="submitBtn" type="submit" />
            </form>
        </div>
    );
}

export default FormResto;
