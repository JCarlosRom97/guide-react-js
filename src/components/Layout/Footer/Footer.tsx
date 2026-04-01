import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h3>José Carlos Romero</h3>
                    <p>Full Stack Developer</p>
                </div>
                <div className="footer-center">
                    <a
                        href="https://github.com/JCarlosRom97"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jcarlosrom97/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="/CV.pdf"
                        download
                    >
                        Download CV
                    </a>
                </div>
                <div className="footer-right">
                    <p>© {new Date().getFullYear()} All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer; 