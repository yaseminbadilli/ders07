import React from "react";
import Header from "./Header.js";
import { Container, Row } from "reactstrap";


export default class App extends React.Component{
    render(){
        return(
            <div className="App">
                <Container>
                <Row><Header/></Row>
                </Container>
            </div>
        )
    }
}
