import React from 'react';

const About = () => {
    return (
        <>
            <section id="skills" className="skills mt-5">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Личные данные</h2>
                        <p>Подлинное счастье может дать только обучение. И новое, пусть и не большое, расширение границ познания мира.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
                            <img src="/SM2.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                            <h3>Skills</h3>
                            <p className="fst-italic">
                            ПРОСТО ДЕЛАЙ ТО, ЧТО ЛЮБИШЬ ДЕЛАТЬ!
                            </p>

                            <div className="skills-content">

                                <div className="progress">
                                    <span className="skill">HTML/CSS <i className="val">99%</i></span>
                                    <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100" style={{width: '99%'}}></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">Laravel <i className="val">80%</i></span>
                                    <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">React <i className="val">50%</i></span>
                                    <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">Vue <i className="val">50%</i></span>
                                    <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">Angular <i className="val">50%</i></span>
                                    <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">WordPress <i className="val">50%</i></span>
                                    <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">Photoshop <i className="val">50%</i></span>
                                    <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}></div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default About;
