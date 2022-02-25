import React, {useState, useEffect} from "react";

const Tile = props =>{
    const [img, setImg] = useState({});
    const [text, setText] = useState([]);

    useEffect(()=> {    
        setImg(props.img);
        setText(props.text);
    }, [props])

    return (

        <div className="Tile">     
            <img alt={img.alt} src={img.src} onClick={props.onClick}/>
            {text.map((item, idx) => (
                <p key={idx}>{item}</p>
            ))}
        </div>
    );
}

export default Tile;