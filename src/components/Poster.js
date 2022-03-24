import { Link } from "react-router-dom"

export default function Poster(props) {
    const {id,posterURL} = props;

    return (
        <Link to={`/filme/${id}`}>
            <img src={posterURL} alt="Capa do filme" />
        </Link>
    )
}