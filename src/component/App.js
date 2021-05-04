import React, { useState } from "react";
import { Container, Typography, CssBaseline } from "@material-ui/core";
import PanoramaIcon from "@material-ui/icons/Panorama";
import SearchBar from "./SearchBar";
import axios from "axios";
import ImageList from "./ImageList";
import ImageCard from "./ImageCard";

const App = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (state) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: state },
      headers: {
        Authorization: "Client-ID PMIeg_mheGQOwcYZ6Q3ZQnLGeLWvzXg12lTLKLLY3wM",
      },
    });
    setImages(response.data.results);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          <PanoramaIcon style={{ fontSize: 40, padding: 5 }} />
          React Pic Search
        </Typography>
        <SearchBar gonder={onSearchSubmit} />
        <hr/>
        <ImageList images={images} />
      </Container>
    </>
  );
};
export default App;
