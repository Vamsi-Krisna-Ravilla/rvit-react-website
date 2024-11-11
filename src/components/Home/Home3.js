// Home3.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home3.css';

const MNCsCarousel = () => {
    const companies = [
        { 
            name: "Deloitte", 
            image: "https://zolostays.com/blog/wp-content/uploads/2019/07/deloitte.jpg" 
        },
        { 
            name: "Microsoft", 
            image: "https://zolostays.com/blog/wp-content/uploads/2019/07/deloitte.jpg" 
        },
        { 
            name: "Google", 
            image: "https://zolostays.com/blog/wp-content/uploads/2019/07/deloitte.jpg" 
        },
        { 
            name: "Amazon", 
            image: "https://zolostays.com/blog/wp-content/uploads/2019/07/deloitte.jpg" 
        },
        { 
            name: "Apple", 
            image: "https://zolostays.com/blog/wp-content/uploads/2019/07/deloitte.jpg" 
        },
    ];

    return (
        <div className="carousel-container">
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                interval={3000}
                stopOnHover={true}
                swipeable={true}
                emulateTouch={true}
                dynamicHeight={false}
                className="custom-carousel"
            >
                {companies.map((company, index) => (
                    <div key={index} className="carousel-slide">
                        <img 
                            src={company.image} 
                            alt={company.name} 
                        />
                        <p className="legend">{company.name}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

const Home3 = () => {
    return (
        <div className="placement-container">
            <div className="header-section">
                <h1>Welcome to Our Placement Page</h1>
                <p className="subtitle">
                    Discover Your Future Career with Leading Companies
                </p>
            </div>
            <MNCsCarousel />
        </div>
    );
};

export default Home3;