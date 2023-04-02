import React from "react";
import { Fade } from "react-reveal";
import { Col, Container, Row } from "react-bootstrap";
import { Download } from "react-bootstrap-icons"
import Typewriter from "typewriter-effect";
import react from '../assets/react.svg';
import css from '../assets/css.png';
import js from '../assets/js.png';
import html from '../assets/html.png';
import dotnet from '../assets/dotnet.svg';
import csharp from '../assets/csharp.svg';
import sql from '../assets/sql.png';
import pdf from '../assets/pdf-resume.pdf';
import bootstrap from '../assets/bootstrap.png';


export function Skills() {
    return (
        <section className="skill" id="skills">
            <Container>
                <Row style={{ justifyContent: "start" }}>
                    <h2>Resume <span>overview.</span></h2>
                    <Col md={4}>
                        <Fade left duration={2000}>
                            <h3><span>Education</span></h3>
                            <p className="title">.NET Developer</p>
                            <p className="info">
                                Teknikhögskolan <span>&bull;</span>
                                <em className="date"> Aug 2021 - Present</em>
                            </p>
                            <p className="description">"Higher vocabulary education" - YH.<br /> I'm currently in my second and final year, and I'll be graduating in
                                <span className="grad-date"> june 2023</span> 
                            </p>
                            <p>Courses I've done so far:</p>
                            <ul className="course">
                                <li>Programming with c#</li>
                                <li>Databases (SQL Server, Entity Framework etc)</li>
                                <li>Frontend</li>
                                <li>Backend</li>
                                <li>Azure & The cloud</li>
                                <li>Produce and deliver software (CI/CD, Testing etc)</li>
                            </ul>
                        </Fade>
                    </Col>
                    <Col md={4}>
                        <Fade right duration={2000}>
                            <h3><span>Experience</span></h3>
                            <p className="title">Internship (LIA1)</p>
                            <p className="info">
                                Anytrust AB <span>&bull;</span>
                                <em className="date"> Oct 2022 - Dec 2022</em>
                            </p>
                            <p className="description">My main task was to develop an in-house desktop application from scratch, that the company was gonna use for statistics and analytics purposes.
                                I was given a requirement specification but got free hands to choose UI and add extra features.
                                The data was fetched from an external API and I developed the app with C# and WinUI3 (XAML)</p>
                                <p className="title">Internship (LIA2)</p>
                            <p className="info">
                                WCOM AB <span>&bull;</span>
                                <em className="date"> Feb 2023 - Present</em>
                            </p>
                            <p className="description"></p>
                        </Fade>
                    </Col>
                    <Col md={2}>
                        <h3><span>Languages</span></h3>
                        <div className="skill-bar">
                            <span className="skill-name">Swedish</span>
                            <div className="skill-dots">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                        <div className="skill-bar">
                            <span className="skill-name">English</span>
                            <div className="skill-dots">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", paddingTop: "20px", position: "relative" }}>
                    <Col md={6}>
                        <h3 id="skill-heading">
                            <span>
                                <Typewriter className="typewriter"
                                    options={{
                                        strings: ["Skills, Technologies & Tools:"],
                                        cursorClassName: "typewriter-cursor",
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                    }}
                                />
                            </span>
                        </h3>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", paddingTop: "20px", position: "relative" }}>
                    <Col xs={4} md={1}>
                        <div id="dotnet">
                            <img className="img-thumbnail" src={dotnet} alt="dotnet" />
                        </div>
                    </Col>
                    <Col xs={4} md={1}>
                        <img className="skill-img" src={csharp} alt="csharp" />
                    </Col>
                    <Col xs={4} md={1}>
                        <img className="skill-img" src={sql} alt="sql" />
                    </Col>
                    <Col xs={4} md={1}>
                        <img className="skill-img" src={html} alt="html5" />
                    </Col>
                    <Col xs={4} md={1}>
                        <img className="skill-img" src={css} alt="css" />
                    </Col>
                    <Col xs={4} md={1}>
                        <img className="skill-img" src={bootstrap} alt="bootstrap" />
                    </Col>
                    <Col xs={4} md={1}>
                        <img className="skill-img" src={js} alt="js" />
                    </Col>
                    <Col xs={4} md={2}>
                        <img className="skill-img" src={react} alt="react" />
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", position: "relative", paddingTop: "80px" }}>
                <p className="whisper">Psssst... Don't forget to download PDF:</p>
                    <button id="resume-btn">
                        <a className="button" href={pdf} download rel='noopener noreferrer' target='_blank'>
                            <Download
                                color="lightpink"
                                size={25} /><br />
                            <span>
                                Resume
                            </span>
                        </a>
                    </button>
                </Row>
            </Container>
        </section>
    )
}