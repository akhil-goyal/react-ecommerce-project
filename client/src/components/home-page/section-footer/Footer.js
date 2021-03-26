import React from 'react';

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
                    <li><a href="#">Terms of Use</a></li>
                    <li>|</li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li>|</li>
                    <li><a href="#">Accessibility Policy</a></li>
                </ul>
            </nav>

            <p className="text-center"><small className="copyright">Copyright &copy; 2021 | Spruce</small></p>

        </footer>
    )
}

export default Footer;