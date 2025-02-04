import React from 'react';

const Screenshots = () => {
    return (
        <>
            <section className="mt-5">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Скриншоты</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="10000">
                                        <img src="/screenshot1.png" className="d-block w-100" alt="screenshot1" />
                                    </div>
                                    <div className="carousel-item" data-bs-interval="10000">
                                        <img src="/screenshot2.png" className="d-block w-100" alt="screenshot2" />
                                    </div>
                                    <div className="carousel-item" data-bs-interval="10000">
                                        <img src="/screenshot3.png" className="d-block w-100" alt="screenshot3" />
                                    </div>
                                    <div className="carousel-item" data-bs-interval="10000">
                                        <img src="/screenshot4.png" className="d-block w-100" alt="screenshot4" />
                                    </div>
                                    <div className="carousel-item" data-bs-interval="10000">
                                        <img src="/screenshot5.png" className="d-block w-100" alt="screenshot5" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Screenshots;
