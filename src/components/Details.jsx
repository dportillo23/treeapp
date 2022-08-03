import { useEffect, useState} from "react";

export default function Details(props) {
    const [activate, setActivate] = useState("");
    const [grow, setGrow] = useState("");

    useEffect(() => {
        setActivate("active")
        setGrow("grow")
        return () => {
            setActivate("")
            setGrow("") 
        }
    }, [])

    const handleClick = e => {
        props.setSelected();
    }

    return (
        <div className={`blackscreen ${activate}`} onClick={() => props.setSelected()}>
            <div className={`detail__card ${grow}`} style={{ backgroundImage: `url(${props.data.img})`}}>
                <h1>{props.data.name}</h1>
                <h3>{props.data.subtitle}</h3>
                {props.data.description.map(paragraph => {
                    return <p>{paragraph}</p>
                })}
                <h1 onClick={handleClick}>X</h1>
                <a href={props.data.link}>Go to</a>
            </div>
        </div>
    )
};