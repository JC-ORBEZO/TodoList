import React from 'react'
import {Container, Row, Col, Button} from "react-bootstrap";
import styled from 'styled-components';

const ButtonPortada=styled(Button)`
width:240px;
height:80px;
font-size:40px;
font-weight:bold;
`;

const AppCol=styled(Col)`
display:flex;
justify-content:center;
align-items:center;
background:#336666;
height:700px;
`;

const AppRow=styled(Row)`
  justify-content:center;  
  align-items:center;
`;

function Portada({ocultarPortada}) {
    return (
        <Container>
            <AppRow>
                <AppCol md={12}>
                <ButtonPortada onClick={()=>ocultarPortada()}>INGRESAR</ButtonPortada>
                </AppCol>
            </AppRow>
        </Container>
    )
}

export default Portada
