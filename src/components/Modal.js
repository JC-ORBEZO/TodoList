import styled from 'styled-components';
import {Modal,Button,Form} from 'react-bootstrap';
//import { Col } from 'react-bootstrap';

const NewModalDialog=styled(Modal.Dialog)`
position:fixed;
display:flex;
width:60vw;
text_align:center;
background:red;
`;


function Modale({addTask,tasks,setTasks,ocultar,oneTask,setOneTask}) {    
    /*const modificar=(id)=>{
    const prueba=tasks.find(task=>task.id===id);
    console.log(prueba); 
    const {id,title,description,hora,fecha}=prueba;
    console.log(id); 
    console.log(title); 
    console.log(description); 
    console.log(hora); 
    console.log(fecha); 
    
   prueba.title="titulo de prueba";
   prueba.description="decription de prueba";
   prueba.hora="02:30";
   prueba.fecha="14/04/1987";

   console.log(prueba.id);
   console.log(prueba.title);
   console.log(prueba.description);
   console.log(prueba.hora);
   console.log(prueba.fecha);
    }*/

    
    const eventoModal=(e)=>{
        e.preventDefault();
        console.log(e.target);

        ocultar();
    }
    return (
    <NewModalDialog>     
        <Modal.Header>
            <Modal.Title>MODIFICAR TAREA</Modal.Title>
        </Modal.Header>
        <Form onSubmit={eventoModal}>
        <Modal.Body>
            
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
        
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={()=>{ocultar()}}>Cerrar</Button>
            <Button variant="primary" type="submit">Modificar</Button>
        </Modal.Footer>
        </Form>
    </NewModalDialog>
    )
}

export default Modale;
