import React from "react";
import { Container, Typography, CssBaseline } from "@material-ui/core";
import PanoramaIcon from '@material-ui/icons/Panorama';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
      <PanoramaIcon style={{fontSize: 40, padding: 5}}/>
        React Pic Search
      </Typography>
      </Container>
    </>
  );
};
export default App;
