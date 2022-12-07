import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import ParkingSystem from "./pages/ParkingSystem";
import Navbar from "./components/Navbar";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dnd" element={<ParkingSystem />} />
        </Routes>
      </Container>
    </>
  );
}
export default App;
