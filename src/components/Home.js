import { useState, useEffect } from "react"
import Axios from "axios";
import Poster from "./Poster";

export default function Home() {

    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        const promise = Axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((response) => {
            const { data } = response;
            console.log(data);
            setMovieList(data);
        })
        promise.catch((response) => {
            console.log(response);
        })
    }, []);

    return (
        <div className="home">
            <h2>Selecione o filme</h2>
            <ul className="movie-list">
                {movieList.map((movie) => { return <li className="movie"><Poster id={movie.id} posterURL={movie.posterURL} /></li> })}
            </ul>
        </div>
    )
}