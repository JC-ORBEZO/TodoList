import { Form,Button } from "react-bootstrap";
import shortid from "short-id";
//import Modale from "./Modal";

const TaskForm = ({addTask,setTasks,tasks}) => {
    /*const newTarea=(e)=>{
        e.preventDefault();
        console.log(e);
        console.log(e.target);
        console.log(e.target.elements);
        const [title,description,hora,date]=e.target.elements;
        console.log(title);
        console.log(description);
        console.log(title.value);
        console.log(description.value);
        //spread
        setTasks([...tasks,{id:shortid.generate(),title:title.value,description:description.value,hora:hora.value,date:date.value}]);
    }*/

    const handleAddTask=(e)=>{
        e.preventDefault();
        const [taskTitle,taskDescription,taskHora,taskFecha]=e.target.elements;
        if(taskTitle.value.trim()!=="" && taskDescription.value.trim()!=="" && taskHora.value!=="" && taskFecha.value!==""){
            addTask({
                id:shortid.generate(),
                title:taskTitle.value.trim(),
                description:taskDescription.value.trim(),
                hora:taskHora.value,
                fecha:taskFecha.value,
            });
            e.target.reset();
        }else{
            alert("Alert!");
        }
        
        
    }
    
    return ( 
        <>
        <Form onSubmit={handleAddTask}>
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
            
            <Button className="m-1" variant="primary" type="submit">
            Nueva Tarea
            </Button>
        </Form>
        </>
     );
}
 
export default TaskForm;