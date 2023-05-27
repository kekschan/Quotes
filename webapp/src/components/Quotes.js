import React, {Component} from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default class Quotes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quotes: []
        };
    }

    findAllQuotes() {
        axios.get("http://localhost:8080/quotes")
            .then(response => response.data)
            .then((date) => {
                this.setState({quotes: date})
            });
    }

    componentDidMount() {
        this.findAllQuotes();
    }


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
                {this.state.quotes.length === 0 ?
                    <div>
                        Лента цитат пока пуста
                    </div>
                    :
                    <div style={{width: '60rem'}}>
                        {this.state.quotes.map((quote) => (
                            <Card className="mb-3" key={quote.id} >
                                <Card.Header style={{fontSize: '16px'}}>
                                    <div className="mx-4"><cite title="time">{quote.date}</cite></div>
                                </Card.Header>
                                <Card.Body style={{fontSize: '18px'}}>
                                    <blockquote className="blockquote mx-4 mt-1">
                                        {quote.text}
                                    </blockquote>
                                </Card.Body>
                                <Card.Footer style={{fontSize: '18px'}}>
                                    <Row>
                                        <Col className="mx-4">
                                            <FontAwesomeIcon style={{fontSize: '21px'}} icon={faHeart}/>
                                            {' '}<cite title="like">{quote.scoreLikes}</cite>
                                        </Col>
                                        <Col className="text-end mx-5"><cite
                                            title="Автор">{quote.authorId}</cite></Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        ))}
                    </div>
                }
            </body>
        )
    }
}
