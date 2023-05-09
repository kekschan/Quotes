import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faQuoteLeft, faInfo, faUserCircle, faUsers} from '@fortawesome/free-solid-svg-icons';

class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <FontAwesomeIcon icon={faHome}/>
                        {' '}
                        Цитатник
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav"/>
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="mx-auto">
                            <NavDropdown title={<><FontAwesomeIcon icon={faQuoteLeft}/>
                                {' '}
                                Цитаты</>}>
                                <NavDropdown.Item href="/quotes">Все цитаты</NavDropdown.Item>
                                <NavDropdown.Item href="/quotes/top">Лучшие 10 цитат</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={<><FontAwesomeIcon icon={faUsers}/>
                                {' '}
                                Авторы</>}>
                                <NavDropdown.Item href="/authors">Все авторы</NavDropdown.Item>
                                <NavDropdown.Item href="/authors/top">Лучшие 10 авторов</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/about">
                                <FontAwesomeIcon icon={faInfo}/>
                                {' '}
                                О нас
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown alignRight title={<><FontAwesomeIcon icon={faUserCircle}/>
                                {' '}
                                Мой Аккаунт</>}>
                                <NavDropdown.Item href="/login">Войти</NavDropdown.Item>
                                <NavDropdown.Item href="/register">Зарегистрироваться</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavigationBar;
