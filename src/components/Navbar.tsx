import React from 'react'
import { Navbar as NavbarBs, Container, Nav} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
export default function Navbar() {
  return (
    <NavbarBs sticky = "top" className = "bg-white shadow-sm mb-3">
        <Container>
            <Nav className = "me-auto">
                <Nav.Link href = "/">Home</Nav.Link>
                <Nav.Link href = "/dnd">Dnd</Nav.Link>
            </Nav>
            <Button></Button>
        </Container>
    </NavbarBs>
  )
}
