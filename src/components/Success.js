import { Link, useLocation } from "react-router-dom"

export default function Success() {
    const location = useLocation();
    console.log(location);

    return (
        <div className="success">
            <h2>
                Pedido feito
                <br />
                com sucesso!
            </h2>
            <h3>Filme e sessão</h3>
            <h4>{location.state.info.movie.title}</h4>
            <h4>{location.state.info.day.date} {location.state.info.name}</h4>
            <h3>Ingressos</h3>
            {location.state.reservations.map((seat) => {
                return (<h4>Assento {seat}</h4>);
            })}
            <h3>Comprador</h3>
            <h4>Nome: {location.state.name}</h4>
            <h4>CPF: {location.state.cpf}</h4>
            <Link to="/">
                <button>Voltar pra Home</button>
            </Link>
        </div>
    )
}