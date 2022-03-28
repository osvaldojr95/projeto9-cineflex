import Time from "./Time";

export default function Days(props) {
    const { weekday, date, showtimes } = props;

    return (
        <>
            <h3>{weekday} - {date}</h3>
            <ul>
                {showtimes.map((time) => {
                    return (
                        <li className="time">
                            <Time id={time.id} name={time.name} />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}