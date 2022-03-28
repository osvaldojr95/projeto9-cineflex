import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Axios from "axios";
import Days from "./Days";

export default function Movie() {
    const [info, setInfo] = useState({ days: [] });
    const { idMovie } = useParams();

    useEffect(() => {
        const promise = Axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);
        promise.then((response) => {
            const { data } = response;
            setInfo(data);
        });
        promise.catch((response) => {
            console.log(response);
        });
    }, []);

    return (
        <div className="movie">
            <div className="container">
                <h2>Selecione o horário</h2>
                <ul className="day-list">
                    {info.days.map((section) => {
                        return <li className="day">
                            <Days
                                id={section.id}
                                weekday={section.weekday}
                                date={section.date}
                                showtimes={section.showtimes}
                            />
                        </li>
                    })}
                </ul>
            </div>
            <footer>
                <img src={info.posterURL} alt="Poster filme" />
                <h4>{info.title}</h4>
            </footer>
        </div>
    )
}