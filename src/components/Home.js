import { Container, Row, Col } from "react-bootstrap"
import { ArrowThroughHeart } from "react-bootstrap-icons"
import Typewriter from 'typewriter-effect';
import unicorn from '../assets/unicorn-1.svg';


export function Home() {
    return (
        <section className="home-start" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>
                        <Typewriter className="typewriter"
                            options={{
                                strings: ["Hi, I'm Alexandra Henriksson"],
                                cursorClassName: "typewriter-cursor",
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        /></h1>
                        <p>.NET Developer Student <br/>& Aspiring Full Stack Developer</p>
                        <a href="#aboutme"><button><span>Let's get to know each other</span> <ArrowThroughHeart color="lightpink" size={30} /></button></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={unicorn} alt="Unicorn" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}