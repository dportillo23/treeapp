import React, { useState } from "react";
import Details from "./Details";

export default function ButtonLink(props) {
    const imagePath = `./images/${props.data.img}`;
    const [selected, setSelected] = useState();

    const handleClick = (e) => {
        // window.location.href = props.data.link;
        setSelected(e.target)
    }

    return (<>
        <div className="button__link" onClick={handleClick}>
            <img className="button__img" src={imagePath} alt={imagePath} />
            <p className="button__p"><span>{props.data.name} - </span>{props.data.subtitle}</p>
        </div>
        {selected ? <Details data={props.data} setSelected={setSelected} /> : null}
    </>)
};