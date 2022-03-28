import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom";
import Axios from "axios";
import Seat from "./Seat";
import Success from "./Success";

export default function Section() {
    const { idSection } = useParams();
    const [info, setInfo] = useState({ movie: {}, day: {}, seats: [] });
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [reservations, setReservations] = useState([]);
    const [done, setDone] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const promise = Axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`);
        promise.then((response) => {
            const { data } = response;
            setInfo(data);
        });
        promise.catch((response) => {
            console.log(response);
        });
    }, []);

    function attReservations(action, seat) {
        if (action === true) {
            reservations.push(seat);
            setReservations([...reservations]);
        } else {
            reservations.pop(seat);
            setReservations([...reservations]);
        }
    }

    function finishReservation() {
        const obj = { ids: (reservations.map((seat)=>{return seat.id})), name: name, cpf: cpf }
        const promise = Axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, obj);
        promise.then((response) => {
            setDone(true);
            navigate("/sucesso", { state: {
                info: info,
                reservations: reservations,
                name: name,
                cpf: cpf
            }});
        });
        promise.catch((response) => {
            console.log(response);
        });
    }

    return (
        <div className="section">
            <div className="container">
                <h2>Selecione o(s) assentos(s)</h2>
                <div className="seats">
                    {info.seats.map((seat) => {
                        return (
                            <Seat id={seat.id} name={seat.name} done={done} isAvailable={seat.isAvailable} reservations={[...reservations]} attReservations={attReservations} />
                        );
                    })}
                </div>
                <div className="types">
                    <div>
                        <Seat done={false} reservations={[...reservations]} />
                        <span>Selecionado</span>
                    </div>
                    <div>
                        <Seat done={false} isAvailable={true} reservations={[...reservations]} />
                        <span>Disponível</span>
                    </div>
                    <div>
                        <Seat done={false} isAvailable={false} reservations={[...reservations]} />
                        <span>Indisponível</span>
                    </div>
                </div>
                <div className="data">
                    <h5>Nome do comprador:</h5>
                    <input placeholder="Digite seu nome..." value={name} onChange={(e) => setName(e.target.value)}></input>
                    <h5>CPF do comprador:</h5>
                    <input placeholder="Digite seu CPF..." value={cpf} onChange={(e) => setCpf(e.target.value)}></input>
                    <button onClick={() => finishReservation()}>Reservar assento(s)</button>
                </div>
            </div>
            <footer>
                <img src={info.movie.posterURL} alt="Poster filme" />
                <div>
                    <h4>{info.movie.title}</h4>
                    <h4>{`${info.day.weekday} - ${info.day.date}`}</h4>
                </div>
            </footer>
        </div>
    )
}