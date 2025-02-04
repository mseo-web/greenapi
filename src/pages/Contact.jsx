import React from 'react';

const Contact = () => {
    return (
        <>
            <section id="contact" className="contact mt-5">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Контакты</h2>
                        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="info-box mb-4">
                            <i className="bi bi-geo-alt"></i>
                            <h3>Адрес:</h3>
                            <p>Республика Казахстан, г. Павлодар</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="info-box  mb-4">
                            <i className="bi bi-envelope"></i>
                            <h3>Email:</h3>
                            <p>mihas-ox7-74@mail.ru</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="info-box  mb-4">
                            <i className="bi bi-phone"></i>
                            <h3>Телефон:</h3>
                            <p>+77088210530</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 ">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8182.658543007002!2d76.96528683783558!3d52.28713847593566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1590232255628!5m2!1sru!2skz" 
                                title="myFrame"
                                width="100%" 
                                height="290px" 
                                // frameBorder="0"
                                style={{ border: 0}}
                                allowFullScreen="">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
