import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home4.css';

const Home4 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <section className="news-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 animate-slide">
                        <div className="news-carousel">
                            <div className="section-header">
                                <h2 className="section-title">
                                    <i className="fas fa-globe"></i> Latest News & Events
                                </h2>
                            </div>
                            <Slider {...settings}>
                                <div className="news-card">
                                    <div className="news-image">
                                        <img src="https://via.placeholder.com/800x400" alt="MSME Hackathon" />
                                    </div>
                                    <div className="news-content">
                                        <h3 className="news-title">MSME – Idea Hackathon</h3>
                                        <a href="/news" className="btn btn-primary">View Details</a>
                                    </div>
                                </div>
                                <div className="news-card">
                                    <div className="news-image">
                                        <img src="https://via.placeholder.com/800x400" alt="RVIT Coding Club Hackathon Winners" />
                                    </div>
                                    <div className="news-content">
                                        <h3 className="news-title">RVIT Coding Club Hackathon Winners</h3>
                                        <a href="/news" className="btn btn-primary">View Details</a>
                                    </div>
                                </div>
                                {/* Add more slides as needed */}
                            </Slider>
                        </div>
                    </div>
                    <div className="col-lg-4 animate-slide">
                    <div className="notice-header">
                                <h2 className="h4 mb-0"><i className="fas fa-bell"></i>     NOTICE BOARD </h2>
                                
                            </div>
                        <div className="notice-board">
                            
                            <div className="notice-content">
                                <div className="notice-item">
                                    <a href="https://octopod.co.in/student/admission/8748779b6a851d4c78179320b21460f6" className="notice-link">
                                        <i className="fas fa-bullhorn notice-icon"></i>
                                        <span>Student Fee Online Payment Link</span>
                                    </a>
                                </div>
                                <div className="notice-item">
                                    <a href="/noticeboard" className="notice-link">
                                        <i className="fas fa-bullhorn notice-icon"></i>
                                        <span>15 Lakh Fund Sanctioned for Voice-controlled smart dumpster (VCS dumpster) Project under MSME Idea Hackathon 3.0</span>
                                    </a>
                                </div>
                                <div className="notice-item">
                                    <a href="/nodue-request" className="notice-link">
                                        <i className="fas fa-bullhorn notice-icon"></i>
                                        <span>Student No-Due Request</span>
                                    </a>
                                </div>
                                <div className="notice-item">
                                    <a href="/virtualtour360" className="notice-link">
                                        <i className="fas fa-bullhorn notice-icon"></i>
                                        <span>Virtual Tour RVIT(formerly CHEC)</span>
                                    </a>
                                </div>
                                <div className="notice-item">
                                    <a href="/patents" className="notice-link">
                                        <i className="fas fa-bullhorn notice-icon"></i>
                                        <span>List of Patents possessed by RVIT</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home4;