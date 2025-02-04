import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(idInstance, apiTokenInstance);
  };

  return (
    <>
        <section id="" className="mt-5">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Авторизация на сервисе Green Api</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label className="form-label">Введите idInstance</label>
                          <input 
                            className="form-control" 
                            id="idInstance" 
                            type="text"  
                            placeholder="idInstance"
                            value={idInstance}
                            onChange={(e) => setIdInstance(e.target.value)} 
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Введите apiTokenInstance</label>
                          <input
                            className="form-control" 
                            id="apiTokenInstance" 
                            type="text"
                            placeholder="apiTokenInstance"
                            value={apiTokenInstance}
                            onChange={(e) => setApiTokenInstance(e.target.value)} 
                            required
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">Авторизация</button>
                      </form>

                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Login;
