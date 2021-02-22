import {Form,Col,Row ,Container,Button } from 'react-bootstrap';



function EditarAluno() {
    return (
        <div>
        <Container>
        <h2>Editar Aluno</h2>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Nome
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Nome do Aluno" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Matrícula
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="number" placeholder="Matrícula do Aluno" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Curso
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Curso" />
                </Col>
            </Form.Group>
        </Form>
        <Button variant="dark">Editar</Button>{' '}
        </Container>
      </div>
    );
  }
  
  export default EditarAluno;