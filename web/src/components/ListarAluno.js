import {Form,Col,Row ,Container,Table } from 'react-bootstrap';
import Api from '../axios/Api'
import { Component } from 'react';


function ListarAluno() {

  state={
    alunos:[]
  }

  componentDidMount = async()=>{
    await Api.get(``)
    .then(res => this.setState({
      alunos:res.data
    }))
  }

  


    return (
      <div >
        <Container><br/>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Matrícula</th>
              <th>Curso</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>555</td>
              <td>@mdo</td>
              <td>Editar/Apagar</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>666</td>
              <td>@fat</td>
              <td>Editar/Apagar</td>
            </tr>
            
          </tbody>
        </Table>
      </Container>
        
      </div>
    );
  }
  
  export default ListarAluno;