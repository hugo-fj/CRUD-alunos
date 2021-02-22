import {Form,Col,Row ,Container,Button } from 'react-bootstrap';


function AdicionarAluno() {
    return (
      <div>
        <Container>
        <h2>Adicionar Aluno</h2>
          <Form method="POST" action='/add'>

            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>Nome</Form.Label>
                <Col sm={10}>
                <Form.Control type="text" name="nome" placeholder="Nome do Aluno" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Matrícula
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="number" name="matricula"placeholder="Matrícula do Aluno" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Curso
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" name="curso" placeholder="Curso" />
                </Col>
            </Form.Group>
            <Button variant="dark">Adicionar</Button>{' '}
        </Form>
        

        </Container>
      </div>
    );
  }
  
  export default AdicionarAluno;