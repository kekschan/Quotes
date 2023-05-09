import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

function Quotes() {
    const styles = {
        cardContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
    };
    const [isLiked, setIsLiked] = useState(false);

    const handleClick = () => {
        setIsLiked(!isLiked);
    };
    return (
        <div style={styles.cardContainer}>
            <Card style={{ width: '61rem'}}>
                <Card.Header className="mx-3" style={{fontSize: '16px'}}>
                    <cite title="time"> 18:30 05.03.2022</cite>
                </Card.Header>
                <Card.Body  style={{fontSize: '18px'}}>
                    <blockquote className="blockquote mx-4 mt-1">
                            В жизни не стоит ждать наступления идеального момента, нужно создавать свои возможности.
                    </blockquote>
                </Card.Body>
                <Card.Footer style={{fontSize: '18px'}}>
                    <Row>
                        <Col  className="mx-4"><div onClick={handleClick}>
                            <FontAwesomeIcon style={{fontSize: '21px'}} icon={faHeart} color={isLiked ? "red" : "gray"}/>
                            {' '}<cite title="like">155</cite>
                        </div></Col>
                        <Col className="text-end mx-5"><cite title="Автор">Борщёв Денис</cite></Col>
                    </Row>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Quotes;
