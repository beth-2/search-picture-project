import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@material-ui/core';

const ImageCard = ({desc, url}) => {
    const imageRef = useRef(null);
    const [span, setSpan] = useState(0);

    useEffect(()=>{
        imageRef.current.addEventListener('load', setImageSpan)
        setImageSpan();
},[]);

const setImageSpan = ()=>{
    const height = imageRef.current.clientHeight;
    const imageSpan = Math.ceil(height/10);
    setSpan(imageSpan);
}


    return (
        <Card style={{ gridRowEnd: `span ${span}` }}>
            <img ref={imageRef} alt={desc} src={url}/>
        </Card>
    );
};

export default ImageCard;