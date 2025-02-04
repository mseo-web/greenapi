import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <div className="logo mr-auto">
                    <img src="/SM-logo2.png" className="img-fluid" alt="" />
                </div>
            </Link>

            <ul className="nav nav-pills">
                <li className="nav-item">
                    <NavLink to="/" className={`nav-link {({ isActive }) => (isActive ? 'active' : '')}`}>
                        Главная
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/greenapi" className={`nav-link {({ isActive }) => (isActive ? 'active' : '')}`}>
                        GREEN API
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/screenshots" className={`nav-link {({ isActive }) => (isActive ? 'active' : '')}`}>
                        Скриншоты
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className={`nav-link {({ isActive }) => (isActive ? 'active' : '')}`}>
                        Личные данные
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className={`nav-link {({ isActive }) => (isActive ? 'active' : '')}`}>
                        Контакты
                    </NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink to="/resume" className={`nav-link {({ isActive }) => (isActive ? 'active' : '')}`}>
                        Резюме
                    </NavLink>
                </li> */}
            </ul>
        </header>
    </div>
  );
}

export default Header;
