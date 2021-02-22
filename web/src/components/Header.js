import {Link} from 'react-router-dom'

import { Navbar,Nav } from 'react-bootstrap';



function Header() {
    return (
      <div >
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Dados do Aluno</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    <Nav.Link href="/" >Home</Nav.Link>
                    <Nav.Link href="/adicionar">Adicionar Aluno</Nav.Link>
                    <Nav.Link href="/editar" >Editar Aluno</Nav.Link>
                
                </Nav>
               
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Header;
  