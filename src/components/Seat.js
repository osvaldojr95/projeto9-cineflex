import React from "react";

export default function Seat(props) {

    const { id, name, isAvailable, reservations, attReservations, done } = props;
    const [status, setStatus] = React.useState(isAvailable === true ? "grey" : (isAvailable === false ? "yellow" : "green"));
    let css = ["seat", ((reservations.indexOf(id) !== -1 && done === true) ? "yellow" : status)];

    function select() {
        if (isAvailable === true) {
            if(done === true){
                setStatus("yellow");
            }
            if (status === "grey") {
                setStatus("green");
                attReservations(true, {id:id, name:name});
            } else {
                setStatus("grey");
                attReservations(false, {id:id, name:name});
            }
        }else{
            alert("Esse assento não está disponível");
        }
    }

    return (
        <>
            <button className={css.join(' ')} onClick={() => (name ? select() : {})}>
                {(name ?? "")}
            </button>
        </>
    )
}