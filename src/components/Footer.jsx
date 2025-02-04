import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <Link to="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    <div className="footer-logo me-auto"><img src="/SM-logo2.png" alt="" className="img-fluid" /></div>
                </Link>
                <span className="mb-3 mb-md-0 text-bg-dark">© {new Date().getFullYear()} SMARTEXWEB</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="btn btn-outline-secondary" href="https://github.com/mseo-web" target="_blank"><i className="bi bi-github"></i> GitHub</a></li>

                {/* <li className="ms-3"><Link className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></Link></li>
                <li className="ms-3"><Link className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></Link></li>
                <li className="ms-3"><Link className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></Link></li> */}
            </ul>
        </footer>
    </div>
  );
}

export default Footer;
