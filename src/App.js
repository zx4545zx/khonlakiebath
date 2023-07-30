import React from "react";
import ButtonAppBar from "./components/ButtonAppBar";
import Container from "@mui/material/Container";
import Home from "./pages/home";
import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Fab from '@mui/material/Fab';

function App() {
  return (
    <div>
      <ButtonAppBar />
      <Container maxWidth="sm" sx={{ mb: "6rem", p: "1rem" }}>
        <Home />
      </Container>
      <div className="btNav">
        <Container maxWidth="sm" sx={{ p: "1rem" }}>
          <Fab variant="extended" color="primary" aria-label="add"
          style={{
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
            position: 'fixed',
          }}>
            <AutoAwesomeIcon sx={{ mr: 1 }} /> คำนวณ
          </Fab>
        </Container>
      </div>
    </div>
  );
}

export default App;


// <Button
//   variant="contained"
//   sx={{ width: "100%" }}
//   color="primary"
//   size="large"
//   startIcon={<AutoAwesomeIcon />}
//   >
//   คำนวณ
// </Button>
