import { Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import profile2 from '../assets/profile2.jpg';

export function AboutMe() {
    return (
        <section className="about-me" id="aboutme" >
            <Container>
                <Row>
                    <Col sm={3} md={6}>
                        <Fade down duration={2000}>
                            <img src={profile2} alt="Profile pic" />
                        </Fade>
                    </Col>
                    <Col sm={3} md={6} id="about-me-intro">
                        <h2>Let me introduce <span>myself.</span></h2>
                        <p>I'm <span><strong>Alexandra Henriksson</strong></span> and I'm based in Gothenburg, Sweden.</p>
                        <p>My programming journey started 2020 when I decided to learn coding by myself, and felt like
                            I finally know what I want to do for the rest of my life. So I decided I want a degree - and here we are today.
                            I'm currently in my second and final year at Teknikhögskolan, studying .NET developer.
                            My end goal is to become a fullstack developer - since I love doing both backend (c#) and frontend (react).</p>
                        <p>I am self-driven, problem solving and I work very hard to achieve my goals. Always eager to learn new things,
                            new technologies and work well both within a team or independently. </p>
                        <h3>I need <span>your</span> help</h3>
                        <p> I'm currently looking for a company where can do an internship (February 6th - May 19th 2023)
                            combined with writing a thesis (ex-jobb) for my final semester.
                            Please don't hesitate on <a href="#connect"><span className="message-span"> contacting </span></a>
                            me if there's a possibility of me doing it at your company or if you know anyone that would be happy to have an intern!
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
