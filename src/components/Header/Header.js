import { Container,Row,Col } from "react-bootstrap";
import styled from "styled-components";

//Componentes atómicos
const Alert=styled.h1`
    background:tomato;
    color:white;
    text-align:center;
    margin-top:10px;
`;

const AppCol=styled(Col)`
    justify-content:center;
`;

const Header = () => {
    return (
        <Container>
            <Row>
                <AppCol md={6}>
                    <Alert>Componente Atómico 1</Alert>
                </AppCol>
                <AppCol md={6}>
                    <Alert>Componente Atómico 2</Alert>
                </AppCol>
                <AppCol md={6}>
                    <Alert>Componente Atómico 3</Alert>
                </AppCol>
            </Row>
        </Container>
      );
}
 
export default Header;