// Home3.jsx
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './Home3.css';

const companies = [
    { 
        name: "Deloitte", 
        image: "https://www.smartglobalgovernance.com/wp-content/uploads/Deloitte.png",
        description: "Global consulting and auditing firm"
    },
    { 
        name: "TCS", 
        image: "https://assets.bizclikmedia.net/900/2078fc51a1d0c01acb89f9059988b282:acf1f57bbf15e13872229fa569b78e29/screenshot-77.png",
        description: "Consumer software innovator"
    },
    { 
        name: "Wipro", 
        image: "https://s32519.pcdn.co/wp-content/uploads/2023/10/partner-wipro-512px.png",
        description: "Consumer software innovator"
    },
    { 
        name: "Mindtree", 
        image: "https://mma.prnewswire.com/media/633364/Mindtree_Logo.jp?p=facebook",
        description: "Leading software and cloud computing company"
    },
    { 
        name: "Infosys", 
        image: "https://yt3.googleusercontent.com/6lInA2XQsYVB_y8pWYoS812lBlSAJ4s5GWlWLbhR8TdQG7MI8sbdCnAVDJ2eaF8zFVTlqiSD=s900-c-k-c0x00ffffff-no-rj",
        description: "Technology and search engine giant"
    },
    { 
        name: "Accenture", 
        image: "https://teamtweaks1-blog.s3.us-east-2.amazonaws.com/blog/wp-content/uploads/2023/03/29103608/accenture.png",
        description: "IT and cloud services leader"
    },
    { 
        name: "Attra", 
        image: "https://i0.wp.com/www.enggwave.com/wp-content/uploads/2016/09/Attra-Infotech-Logo.png?ssl=1",
        description: "Consumer software innovator"
    },
];

const MNCsCarousel = () => {
    const options = { loop: true, align: 'center', skipSnaps: false };
    const autoplayOptions = {
        delay: 3000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
    };
    
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);

        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <div className="carousel-wrapper">
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {companies.map((company, index) => (
                            <div className="embla__slide" key={index}>
                                <div className="card">
                                    <div className="card-image-wrapper">
                                        <img 
                                            src={company.image} 
                                            alt={company.name}
                                            className="card-image"
                                        />
                                    </div>
                                    <div className="card-content">
                                        <h3 className="card-title">{company.name}</h3>
                                        <p className="card-description">{company.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
                            onClick={() => scrollTo(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Home3 = () => {
    return (
        <div className="placement-container">
            <div className="header-section">
                <h1>placements at RVIT</h1>
                <p className="subtitle">
                    Discover Your Future Career with Leading Companies
                </p>
            </div>
            <MNCsCarousel />
        </div>
    );
};

export default Home3;