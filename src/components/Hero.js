// Hero.js
import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';

const slides = [
    {
        image: hero1,
        title: 'We Code Your Vision into Reality',
        subtitle:
            'Transforming your ideas into tangible reality through expert coding and innovative solutions.',
    },
    {
        image: hero2,
        title: 'Digital Solutions for Business Growth',
        subtitle:
            'Empowering your business with scalable, efficient and smart software solutions.',
    },
    {
        image: hero3,
        title: 'Innovate. Build. Scale.',
        subtitle:
            'From concept to code, we deliver end-to-end digital transformation.',
    },
];

function Hero() {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef(null);

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleDotClick = (index) => {
        setCurrent(index);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;

        if (diff > 50) handleNext();
        else if (diff < -50) handlePrev();
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                handlePrev();
            } else if (e.key === 'ArrowRight') {
                handleNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const { image, title, subtitle } = slides[current];

    return (
        <div
            className="hero-section"
            style={{ backgroundImage: `url(${image})` }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className="hero-overlay">
                <div className="hero-text fade-in">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>

                <div className="hero-controls">
                    <span className="arrow left" onClick={handlePrev}>
                        &#10094;
                    </span>
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === current ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                    <span className="arrow right" onClick={handleNext}>
                        &#10095;
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Hero;
