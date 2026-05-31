import "./styles/Features.css";

function Features() {
    return (
        <section
        id="caracteristicas"
        className="features"
        >
        <h2>Nuestras Características</h2>

        <div className="cards">

            <div className="card">
            <h3>React</h3>

            <p>
                Aprende componentes,
                estados y eventos.
            </p>
            </div>

            <div className="card">
            <h3>Vue</h3>

            <p>
                Desarrolla interfaces modernas
                y reactivas.
            </p>
            </div>

            <div className="card">
            <h3>Responsive</h3>

            <p>
                Diseños adaptables a cualquier
                dispositivo.
            </p>
            </div>

        </div>
        </section>
    );
    }

    export default Features;