import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="page-footer">

            <nav>
                <ul className="social">
                    <li><a target="_blank" href="https://www.facebook.com"><i className="fab fa-facebook"></i></a></li>
                    <li><a target="_blank" href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                    <li><a target="_blank" href="https://www.twitter.com"><i className="fab fa-twitter-square"></i></a></li>
                </ul>
            </nav>

            <nav aria-label="Legal">
                <ul className="legal">
                    <li><b>Terms of Use</b></li>
                    <li>|</li>
                    <li><b>Privacy Policy</b></li>
                    <li>|</li>
                    <li><b>Accessibility Policy</b></li>
                </ul>
            </nav>

            <p className="text-center"><small className="copyright">Copyright &copy; 2021 | Spruce</small></p>

        </footer>
    )
}

export default Footer;