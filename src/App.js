import React from "react";
import { useNavStore } from "./store";
import ButtonAppBar from "./components/ButtonAppBar";
import Container from "@mui/material/Container";
import Home from "./pages/home";
import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function App() {
  const page = useNavStore((state) => state.page);

  return (
    <div>
      <ButtonAppBar />
      <Container maxWidth="sm" sx={{ mb: "6rem", p: "1rem" }}>
        <Home />
      </Container>
      <div className="btNav">
        <Container maxWidth="sm" sx={{ p: "1rem" }}>
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            color="primary"
            startIcon={<AutoAwesomeIcon />}
            >
            คำนวณ
          </Button>
        </Container>
      </div>
    </div>
  );
}

export default App;
