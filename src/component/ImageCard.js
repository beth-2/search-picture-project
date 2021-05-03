import React from 'react';
import { Card } from '@material-ui/core';

const ImageCard = ({desc, url}) => {
    return (
        <Card>
            <img alt={desc} src={url}/>
        </Card>
    )
}

export default ImageCard