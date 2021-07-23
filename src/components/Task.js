import {Table,Button} from "react-bootstrap";

const Task = ({addTask,tasks,setTasks,deleteTask,mostrar}) => {
    const removeTask=(id)=>{
      //deleteTask(id);
      const proba=tasks.filter(task=>task.id!==id);
      setTasks(proba);
    }

    return (
        <Table striped bordered hover variant="success">
  <thead>
    <tr>
      <th className="text-center">Hora</th>
      <th className="text-center">Fecha</th>
      <th className="text-center">Titulo</th>
      <th className="text-center">Descripción</th>
      <th className="text-center">⚠</th>
    </tr>
  </thead>
  <tbody>

    {tasks.map((task)=>
    <tr key={task.id}>
        <td className="text-center">{task.hora}</td>
        <td className="text-center">{task.fecha}</td>
        <td className="text-center">{task.title}</td>
        <td>{task.description}</td>
        <td className="text-center">
            <Button variant="primary" onClick={()=>removeTask(task.id)}>❌</Button>
            <Button variant="success" onClick={()=>mostrar(task)}>✍</Button>
        </td>
    </tr>)}    
    
  </tbody>
</Table>
     );
}
 
export default Task;