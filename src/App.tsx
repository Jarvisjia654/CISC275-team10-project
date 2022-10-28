import {  Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Dnd from './pages/Dnd';
import Navbar from './components/Navbar';

function App(): JSX.Element{
  return (
    <>
      <Navbar/>
      <Container className = "mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dnd" element={<Dnd />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
