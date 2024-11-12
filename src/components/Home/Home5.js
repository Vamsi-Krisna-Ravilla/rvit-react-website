import React from 'react';
import './Home5.css';

const Home5 = () => {
    return (
        <div>
            {/* Programs Section */}
            <section className="programs-section">
                <div className="container-fluid px-4" >
                <h1 className="section-title1 wow fadeIn" data-wow-delay=".3s" style={{ textAlign: "center" }}>Explore Our Programmes</h1>

                    <div className="row g-4">
                        {/* B.Tech */}
                        <div className="col wow fadeIn" data-wow-delay=".3s">
                            <div className="program-card">
                                <div className="program-image">
                                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCuHVbENvXp_xRvQ_cST314itjXpJNcu5QB07zJQFRlFzshfWE" alt="B.Tech Program" />
                                    <span className="program-badge">B.Tech</span>
                                </div>
                                <div className="program-content">
                                    <h3 className="program-title">Bachelor of Technology</h3>
                                    <p className="program-description">Pursue a rewarding engineering career with our accredited B.Tech programs.</p>
                                    <div class="read-more-btn-wrapper">
                                        <a href="#" class="read-more-btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* M.Tech */}
                        <div className="col wow fadeIn" data-wow-delay=".4s">
                            <div className="program-card">
                                <div className="program-image">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0pvqbh4LMbl2DXfQWIp5nP4lIzZ0x2yB3mNp1m-_G_fTkBTi" alt="M.Tech Program" />
                                    <span className="program-badge">M.Tech</span>
                                </div>
                                <div className="program-content">
                                    <h3 className="program-title">Master of Technology</h3>
                                    <p className="program-description">Advance your knowledge and expertise with our specialized M.Tech programs.</p>
                                    <a href="curriculumandsyllabus.php" className="read-more-btn">Read More</a>
                                </div>
                            </div>
                        </div>

                        {/* MCA */}
                        <div className="col wow fadeIn" data-wow-delay=".5s">
                            <div className="program-card">
                                <div className="program-image">
                                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSEHWcok_gdQPmTOTyO6l33B0JQjEilbgASvusji6ifRGLeNBcC" alt="MCA Program" />
                                    <span className="program-badge">M.C.A</span>
                                </div>
                                <div className="program-content">
                                    <h3 className="program-title">Master of Computer Applications</h3>
                                    <p className="program-description">Master the art of software development with our industry-focused MCA program.</p>
                                    <a href="curriculumandsyllabus.php" className="read-more-btn">Read More</a>
                                </div>
                            </div>
                        </div>

                        {/* Diploma */}
                        <div className="col wow fadeIn" data-wow-delay=".6s">
                            <div className="program-card">
                                <div className="program-image">
                                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRgBaGhwObCwZ4nHqHzC2TW5wJisG2UVk13WrMoaDzM6ICMUqzI" alt="Diploma Courses" />
                                    <span className="program-badge">Diploma</span>
                                </div>
                                <div className="program-content">
                                    <h3 className="program-title">Explore Diploma Courses</h3>
                                    <p className="program-description">Gain valuable industry-relevant skills through our comprehensive diploma courses.</p>
                                    <a href="curriculumandsyllabus.php" className="read-more-btn">Read More</a>
                                </div>
                            </div>
                        </div>

                        {/* BCA */}
                        <div className="col wow fadeIn" data-wow-delay=".7s">
                            <div className="program-card">
                                <div className="program-image">
                                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSet24KK74VvMVraSkDW2tLt0-ciW3UBiBD0zjx_UkoziGUZaBT" alt="BCA Program" />
                                    <span className="program-badge">B.C.A</span>
                                </div>
                                <div className="program-content">
                                    <h3 className="program-title">Bachelor of Computer Applications</h3>
                                    <p className="program-description">Learn the fundamentals of computer science and software development with our BCA program.</p>
                                    <a href="curriculumandsyllabus.php" className="read-more-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Programs End */}
            {/* Courses Section */}
<section className="courses-section">
    <div className="container">
        <h2 className="courses-title wow fadeIn" data-wow-delay=".3s">
            Our Specialized Courses
        </h2>
        
        <div className="row g-4">
            {/* CSE */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="course-box">
                    <div className="course-icon">
                        <i className="fas fa-laptop-code"></i>
                    </div>
                    <h3 className="course-name">Computer Science Engineering</h3>
                    <p className="course-info">
                        Dive deep into computer architecture, algorithms, and software development. 
                        Learn cutting-edge technologies and prepare for the digital future with our 
                        comprehensive CSE program.
                    </p>
                    <div className="course-btn-wrapper">
                        <a href="cse.php" className="course-btn">Read More</a>
                    </div>
                </div>
            </div>

            {/* AIML */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="course-box">
                    <div className="course-icon">
                        <i className="fas fa-brain"></i>
                    </div>
                    <h3 className="course-name">AI & Machine Learning</h3>
                    <p className="course-info">
                        Explore the fascinating world of artificial intelligence and machine learning. 
                        Master neural networks, deep learning, and intelligent systems design.
                    </p>
                    <div className="course-btn-wrapper">
                        <a href="aiml.php" className="course-btn">Read More</a>
                    </div>
                </div>
            </div>

            {/* Data Science */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="course-box">
                    <div className="course-icon">
                        <i className="fas fa-database"></i>
                    </div>
                    <h3 className="course-name">Data Science</h3>
                    <p className="course-info">
                        Transform raw data into meaningful insights. Learn statistical analysis, 
                        data visualization, and predictive modeling techniques for informed decision-making.
                    </p>
                    <div className="course-btn-wrapper">
                        <a href="datascience.php" className="course-btn">Read More</a>
                    </div>
                </div>
            </div>

            {/* ECE */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                <div className="course-box">
                    <div className="course-icon">
                        <i className="fas fa-microchip"></i>
                    </div>
                    <h3 className="course-name">Electronics & Communication</h3>
                    <p className="course-info">
                        Master electronic systems, signal processing, and communication technologies. 
                        Build expertise in circuit design and telecommunications.
                    </p>
                    <div className="course-btn-wrapper">
                        <a href="ece.php" className="course-btn">Read More</a>
                    </div>
                </div>
            </div>

            {/* VLSI */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                <div className="course-box">
                    <div className="course-icon">
                        <i className="fas fa-microchip"></i>
                    </div>
                    <h3 className="course-name">VLSI Design</h3>
                    <p className="course-info">
                        Specialize in Very Large Scale Integration design. Learn chip design, 
                        semiconductor physics, and integrated circuit manufacturing processes.
                    </p>
                    <div className="course-btn-wrapper">
                        <a href="vlsi.php" className="course-btn">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

            {/* INCUBATION CENTER */}
            <section className="incubation-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12 wow fadeInLeft" data-wow-delay=".3s">
                            <div className="incubation-content">
                                <h1 className="incubation-title">
                                    Welcome to RVIT Incubation Center
                                </h1>
                                <div className="highlight-box">
                                    <p className="incubation-lead">
                                        Dive into a world of innovation and entrepreneurship at RVIT's Incubation Center. We're here to
                                        empower aspiring entrepreneurs like you by providing access to a network of mentors, investors, and
                                        resources.
                                    </p>
                                </div>
                                <p className="incubation-text">
                                    At RVIT, we're passionate about fostering entrepreneurship and nurturing tech startups. Our business
                                    incubator offers comprehensive "Start to Scale" support, guiding you through every stage of your
                                    entrepreneurial journey. From idea conception to market domination, we're here to help you translate
                                    your research into real-world ventures.
                                </p>
                                <a href="incubationcenter.php" className="incubation-btn1">
                                    <i className="fas fa-rocket me-2"></i>Discover Our Projects
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 wow fadeInRight" data-wow-delay=".5s">
                            <div className="incubation-image">
                                <img src="https://img.freepik.com/free-vector/business-people-working-office_1308-29330.jpg?ga=GA1.1.1477122728.1731241567&semt=ais_hybrid" alt="RVIT Incubation Center" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home5;