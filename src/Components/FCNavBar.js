import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

export default function FCNavBar({ FvoritesMovies }) {
  const navigate = useNavigate();

  return (
    <Navbar style={{marginBottom: 15}} bg="dark" variant="dark">
      <Container style={{ color: "white", marginLeft: 0 }}>
        <h3>Movies app</h3>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/", { state: FvoritesMovies })} >Home</Nav.Link>
          <Nav.Link onClick={() => navigate("/FavoritesMovies", { state: FvoritesMovies })}>Favories Movies</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
