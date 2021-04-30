import React from 'react';
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-container">
            <section 
            className="footer-subscription">
                <p className="footer-subscription-heading">
                    연락을 위한 이메일은 아래의 깃허브 페이지를 참고 해 주시기 바랍니다.
                </p>
                <p className="footer-subscription-text">
                    https://github.com/mireu-san
                </p>
                <div className="input-areas">
                    <form>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="향후 이메일 지원 예정!" 
                            className="footer-input"
                        />
                        <Button
                        buttonStyle="btn--outline">Submit
                        </Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Main Menu</h2>
                        <Link to="/"><i class="fab fa-github"></i>Github Page</Link>
                    </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Blog Page</h2>
                        <Link to="/">SilverLibrary</Link>
                        <Link to="/">CapitalPunk</Link>
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Bookmark</h2>
                        <Link to="/"><i class="fab fa-google"></i>oogle
                        </Link>
                        <Link to="/">Stackoverflow</Link>
                        <Link to="/">reactrouter.com</Link>
                        <Link to="/">Opentutorials.org</Link>
                        <Link to="/">Baekjoon algorithm</Link>
                    </div>
                </div>


                </div>
            </div>
            
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            MireuSpace <i className="fas fa-book-reader" />
                        </Link>
                    </div>
                    <small className="website-rights">MireuSpace 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to="/"
                        target="_blank"
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        aria-label="Instgram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
                        to="/"
                        target="_blank"
                        aria-label="Twitter"
                        >
                            <i className="fab fa-twitter-square"></i>
                        </Link>
                        <Link className="social-icon-link Bitcoin"
                        to="/"
                        target="_blank"
                        aria-label="Twitter"
                        >
                            <i className="fab fa-bitcoin"></i>
                        </Link>



                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer
