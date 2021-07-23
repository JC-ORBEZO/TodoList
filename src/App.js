import "./App.css";
import {Container,Row,Col/*,Button*/} from "react-bootstrap";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
import { useState } from "react";
import styled from "styled-components";
import Modale from "./components/Modal";
import Portada from "./components/Portada";
const Titulo=styled.h1`
font-family: 'Otomanopee One', sans-serif;
text-align:center;
color:white;
`;

//Styled Components
//Container
const AppContainer=styled(Container)`
    height:720px;
    transition:0.8s;
    background:	#333333;
`;
//Row
const AppRow=styled(Row)`
  justify-content:center;  
  align-items:center;
  margin:5px;
`;
//Col
const AppCol=styled(Col)`
  background:#3333CC;
`;
/*
const Boton=styled(Button)`
  width:100px;
  margin:5px;
`;*/

function App() {
  //hook que recibe un array de objetos
  const [tasks,setTasks]=useState([]);
  const [oneTask,setOneTask]=useState([]);
  const [mostraModal,setMostraModal]=useState(false);
  const [mostrarHeader,setMostrarHeader]=useState(true);
  //Ocultar Portada
  const ocultarPortada=()=>{
    setMostrarHeader(false);
  }

  //Función que busca y da de baja x id
  const deleteTask=(a)=>{
    const dato=tasks.filter(task=>task.id!==a);
    setTasks(dato);
  }

  //Muestra componente Modal desde el botón modificar de Task
  const mostrar=(oneTask)=>{
    setMostraModal(true);
    setOneTask(oneTask);
    console.log(oneTask);
  };

  //Oculta componente Modal
  const ocultar=()=>{
    setMostraModal(false);
  }
  

  //Agregar nuevo objeto al hook Tasks
  const addTask=(task)=>{
    setTasks([...tasks,task]);
    // JSON.stringify()
    // JSON.parse()
    //console.log("Guardar: ",JSON.stringify(tasks));
    localStorage.setItem("tasks",JSON.stringify([...tasks,task]));
  };  
  return (
    <>
    {mostrarHeader ? <Portada ocultarPortada={ocultarPortada}/> : <AppContainer>
      {/*<Titulo>TODO LIST</Titulo>*/}
      <AppRow>
      {/*<Boton onClick={mostrar}>Mostrar</Boton>*/}
      </AppRow>      
      
      <Titulo>Mostrar</Titulo>  
      <AppRow>
      {mostraModal ? <Modale addTask={addTask} tasks={tasks} setTasks={setTasks}  ocultar={ocultar} oneTask={oneTask} setOneTask={setOneTask}/> : null}
        <AppCol 
          className="mt-2" md={6}><TaskForm  addTask={addTask} tasks={tasks} setTasks={setTasks} />
        </AppCol>
        <Col 
          className="mt-2" md={6}><Task addTask={addTask} tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} mostrar={mostrar}/>
        </Col>
      </AppRow>      
    </AppContainer>}
    </>
  )
};

export default App;
