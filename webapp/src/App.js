import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import About from "./components/About";
import {Col, Container, Row} from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import Quotes from "./components/Quotes";

function App() {
    const marginTop = {
        marginTop: "20px"
    };

    return (
        <Router>
            <NavigationBar/>
            <Container>
                <Row>
                    <Switch>
                        <Col lg={12} style={marginTop}>
                            <Route path={"/about"} exact component={About}/>
                            <Route path={"/quotes"} exact component={Quotes}/>
                        </Col>
                    </Switch>
                </Row>
            </Container>
        </Router>
    );
}
export default App;