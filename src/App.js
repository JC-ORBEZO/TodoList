import "./App.css";
import {Container,Row,Col/*,Button*/} from "react-bootstrap";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
import { useState } from "react";
import styled from "styled-components";
import Modale from "./components/Modal";
const Titulo=styled.h1`
font-family: 'Otomanopee One', sans-serif;
text-align:center;
`;

const AppContainer=styled(Container)`
    height:720px;
    transition:0.8s;
`;

const AppRow=styled(Row)`
  justify-content:center;  
  align-items:center;
`;

const AppCol=styled(Col)`
  background:yellow;
`;
/*
const Boton=styled(Button)`
  width:100px;
  margin:5px;
`;*/

function App() {
  //hook que recibe un array de objetos
  const [tasks,setTasks]=useState([]);
  const [mostra,setMostra]=useState(false);

  const deleteTask=(a)=>{
    const dato=tasks.filter(task=>task.id!==a);
    setTasks(dato);
}

  const mostrar=()=>{
    setMostra(true);
  };
  
  const addTask=(task)=>{
    setTasks([...tasks,task]);
    // JSON.stringify()
    // JSON.parse()
    //console.log("Guardar: ",JSON.stringify(tasks));
    localStorage.setItem("tasks",JSON.stringify([...tasks,task]));
  };  
  return (     
    <>    
    <AppContainer>
      <Titulo>TODO LIST</Titulo>
      <AppRow>
      {/*<Boton onClick={mostrar}>Mostrar</Boton>*/}
      </AppRow>      
      
      <Titulo>Mostrar</Titulo>  
      <AppRow>
      {mostra ? <Modale/> : null}
        <AppCol 
          className="mt-2" md={6}><TaskForm  addTask={addTask} tasks={tasks} setTasks={setTasks} />
        </AppCol>
        <Col 
          className="mt-2" md={6}><Task addTask={addTask} tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} mostrar={mostrar}/>
        </Col>
      </AppRow>      
    </AppContainer>
    </>   
  )
};

export default App;
