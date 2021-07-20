import styled from 'styled-components';
import {Modal,Button,Form} from 'react-bootstrap';

const NewModalDialog=styled(Modal.Dialog)`
position:fixed;
display:flex;
width:60vw;
text_align:center;
background:red;
`;

function Modale() {
    return (
    <NewModalDialog>     
        <Modal.Header>
            <Modal.Title>MODIFICAR TAREA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Titulo</Form.Label>
            <Form.Control type="text" name="title"/>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} name="description"/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Label>Hora</Form.Label>
            <Form.Control type="time" name="hora"/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="Date" name="fecha"/>
        </Form.Group>
        </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
        </Modal.Footer>
    </NewModalDialog>
    )
}

export default Modale;
