import { sendForm } from 'emailjs-com';
import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import React, { useRef } from 'react';
import { BsEnvelope } from "react-icons/bs";
import profile from '../assets/712F4958-538D-4ED6-9221-C40134E0C8FD.jpeg'

export const Contact = () => {
    const form = useRef();
    const formInitialDetails = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendForm('service_t2q8v6a', 'template_1p428rj', form.current, 'uj_S0PofWUHcxVMni')
            .then((result) => {
                setStatus({ success: true, message: 'The message was successfully sent!' })
                console.log(result.text);
            }, (error) => {
                setStatus({ success: false, message: 'Something went wrong, please try again!' })
                console.log(error.text);
            });
        setButtonText("Send");
        setFormDetails(formInitialDetails);
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row>
                    <Col size={12} md={6}>
                        <h2>Get in touch <BsEnvelope id="letter" /></h2>
                        {
                            status.message &&
                            <Col size={12} className="px-1">
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            </Col>
                        }
                        <form ref={form} onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="text"
                                        name="firstname"
                                        value={formDetails.firstname}
                                        placeholder="First Name"
                                        onChange={(e) => onFormUpdate('firstname', e.target.value)}
                                        required />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="text"
                                        name="lastname"
                                        value={formDetails.lastname}
                                        placeholder="Last Name"
                                        onChange={(e) => onFormUpdate('lastname', e.target.value)}
                                        required />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formDetails.email} placeholder="Email Address"
                                        onChange={(e) => onFormUpdate('email', e.target.value)}
                                        required />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formDetails.phone}
                                        placeholder="Phone" onChange={(e) => onFormUpdate('phone', e.target.value)}
                                        required />
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea
                                        rows="6"
                                        name="message"
                                        value={formDetails.message}
                                        placeholder="Message"
                                        onChange={(e) => onFormUpdate('message', e.target.value)}
                                        required>
                                    </textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                    <Col size={12} md={6}>
                        <Row className='justify-content-center'>
                            <img src={profile} alt="Profile pic" />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}