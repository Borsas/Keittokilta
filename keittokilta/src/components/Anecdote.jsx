import React from "react"
import "../App.css";

const Anecdote = () => {

    const smart_things = [
        "Kyllä vähän tekis mieli soppaa",
        "Kyllä minä ainakin tulen oli olo mikä tahansa jos olen kerran maksanut",
        "Mikä on tampereen paikallinen pilvenhattara?",
    ]

    const item = smart_things[Math.floor(Math.random() * smart_things.length)]

    return (
        <div className="Anecdote">
            "{item}"
        </div>
    )
}

export default Anecdote