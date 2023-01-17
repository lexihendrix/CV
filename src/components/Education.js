import { Col, Container, Row } from "react-bootstrap";

export const Education = () => {
    const responsive = {
        largeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    };

    return (
        <section className="educations" id="education" >
            <Container>
                <Row>
                    <Col>
                        <h2>Education</h2>
                        <p>balaaa hdehjfehhfdsjkjhjhjdfkshsdfk.hsfdh.aj<br></br>skjsjkajkasj</p>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}
