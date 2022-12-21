import React from "react";
import './Footer.css'


const Footer = () => {
    return(
        <footer className="text-white mt-4 py-4 bg-dark">
            <div className="container">
                <nav className="row">
                    <ul className='col-12 col-md-3 list-unstyled d-flex '>
                        <li className='m-3'><b>SIGUENOS:</b></li>
                        <li className='justify-content-betwen m-3'></li>
                            <i className="bi bi-facebook m-3"></i>
                            <i className="bi bi-instagram m-3"></i>
                            <i className="bi bi-twitter m-3"></i>
                            <i className="bi bi-linkedin m-3"></i>
                    </ul>
                    

                </nav>
            </div>
        </footer>
    )
}

export default Footer