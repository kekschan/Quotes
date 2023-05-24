import React, {Component} from 'react';

import { Card, Row, Col } from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

class Test extends Component{
    render() {

        const styles = {
            cardContainer: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#0F0F0F'
            },
        };

        return (
        
            
            <body style={styles.cardContainer}>
                <div style={{width: '60rem'}}>
                            <Card className="mb-3" >
                                <Card.Header style={{fontSize: '16px'}}>
                                    <div className="mx-4"><cite title="time">24.05.2023 12:00</cite></div>
                                </Card.Header>
                                <Card.Body style={{fontSize: '18px'}}>
                                    <blockquote className="blockquote mx-4 mt-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ipsum aliquam, commodo dolor eu, consectetur risus. Fusce commodo ultricies ullamcorper. In in dictum mi. Mauris id sapien eu lectus ullamcorper pharetra. Quisque tincidunt quam eget justo tempus, sed faucibus quam commodo. Curabitur condimentum mauris vitae placerat tristique. Nullam hendrerit elit in semper lacinia. Cras aliquet sollicitudin lorem, at suscipit ligula pellentesque at.
                                    </blockquote>
                                </Card.Body>
                                <Card.Footer style={{fontSize: '18px'}}>
                                    <Row>
                                        <Col className="mx-4">
                                            <FontAwesomeIcon style={{fontSize: '21px'}} icon={faHeart}/>
                                            {' '}<cite title="like">1654</cite>
                                        </Col>
                                        <Col className="text-end mx-5"><cite
                                            title="Автор">Альберт Энштейн</cite></Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                            <Card className="mb-3" >
                                <Card.Header style={{fontSize: '16px'}}>
                                    <div className="mx-4"><cite title="time">24.05.2023 12:00</cite></div>
                                </Card.Header>
                                <Card.Body style={{fontSize: '18px'}}>
                                    <blockquote className="blockquote mx-4 mt-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ipsum aliquam, commodo dolor eu, consectetur risus. Fusce commodo ultricies ullamcorper. In in dictum mi. Mauris id sapien eu lectus ullamcorper pharetra. Quisque tincidunt quam eget justo tempus, sed faucibus quam commodo. Curabitur condimentum mauris vitae placerat tristique. Nullam hendrerit elit in semper lacinia. Cras aliquet sollicitudin lorem, at suscipit ligula pellentesque at.
                                    </blockquote>
                                </Card.Body>
                                <Card.Footer style={{fontSize: '18px'}}>
                                    <Row>
                                        <Col className="mx-4">
                                            <FontAwesomeIcon style={{fontSize: '21px'}} icon={faHeart}/>
                                            {' '}<cite title="like">1654</cite>
                                        </Col>
                                        <Col className="text-end mx-5"><cite
                                            title="Автор">Альберт Энштейн</cite></Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                            <Card className="mb-3" >
                                <Card.Header style={{fontSize: '16px'}}>
                                    <div className="mx-4"><cite title="time">24.05.2023 12:00</cite></div>
                                </Card.Header>
                                <Card.Body style={{fontSize: '18px'}}>
                                    <blockquote className="blockquote mx-4 mt-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ipsum aliquam, commodo dolor eu, consectetur risus. Fusce commodo ultricies ullamcorper. In in dictum mi. Mauris id sapien eu lectus ullamcorper pharetra. Quisque tincidunt quam eget justo tempus, sed faucibus quam commodo. Curabitur condimentum mauris vitae placerat tristique. Nullam hendrerit elit in semper lacinia. Cras aliquet sollicitudin lorem, at suscipit ligula pellentesque at.
                                    </blockquote>
                                </Card.Body>
                                <Card.Footer style={{fontSize: '18px'}}>
                                    <Row>
                                        <Col className="mx-4">
                                            <FontAwesomeIcon style={{fontSize: '21px'}} icon={faHeart}/>
                                            {' '}<cite title="like">1654</cite>
                                        </Col>
                                        <Col className="text-end mx-5"><cite
                                            title="Автор">Альберт Энштейн</cite></Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                    </div>
            </body>

        );
        
    }
}

export default Test;
