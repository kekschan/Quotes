import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import About from "./components/About";
import {Col, Container, Row} from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import Quotes from "./components/Quotes";
import QuotesTop from "./components/QuotesTop";
import Test from "./components/Test";

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
                            <Route path={"/quotes/top"} exact component={QuotesTop}/>
                            <Route path={"/test"} exact component={Test}/>

                        </Col>
                    </Switch>
                </Row>
            </Container>
        </Router>
    );
}
export default App;