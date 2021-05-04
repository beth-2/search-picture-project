import React from "react";
import ImageCard from "./ImageCard";
import './ImageList.css';

const ImageList = ({ images }) => {
  const resimler = images.map((image) => {
    return (
      <ImageCard
        key={image.alt_description}
        desc={image.alt_description}
        url={image.urls.regular}
      />
    );
  });

  return <div className="image-list">{resimler}</div>;
};

export default ImageList;
