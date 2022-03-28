import { Link } from "react-router-dom"

export default function Time(props) {
    const { id, name } = props;

    return (
        <Link to={`/sessao/${id}`}>
            <div>{name}</div>
        </Link>
    )
}