import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <div className="bg-dark rounded-3 p-5">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg={8}>
                        <h1 className="text-white mb-4">Добро пожаловать в Цитатник!</h1>
                        <p className="text-white-50 fs-5">
                            Добро пожаловать в нашу социальную сеть Цитатник, где пользователи могут делиться своими цитатами и ставить им лайки. Здесь вы можете найти множество цитат на самые разные темы, от мотивации и успеха до любви и дружбы. Создавайте свой профиль, добавляйте свои любимые цитаты и наслаждайтесь общением с другими людьми, которые разделяют вашу любовь к цитатам.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
