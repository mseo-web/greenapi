import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img src="/SM-logo2.png" className="img-fluid" style={{height: 80}} alt="" />
      <h1 className="display-5 fw-bold text-bg-dark">REACT JS - GREEN API</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Тестовое задание на должность "Фронтенд разработчик React"</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <NavLink to="/greenapi" className="btn btn-primary btn-lg px-4 gap-3">Задание</NavLink>
          <NavLink to="/resume"  className="btn btn-outline-secondary btn-lg px-4">Резюме</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
