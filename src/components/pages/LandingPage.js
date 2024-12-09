import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/landing-page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons';

import logo from "../../assets/logos/logo.png";
import boxes from "../../assets/images/boxes6.JPG";
import oldSet from "../../assets/images/old-set.jpg";
import customSet from "../../assets/images/lego-404.jpeg";
import missingPieces from "../../assets/images/lego-404.jpeg";
import train2 from "../../assets/images/train2.png";


export default function LandingPage () {
    const navigate = useNavigate();
    const navigateLandingPage = () => navigate('/', { replace: false });
    const navigateAboutUs = () => navigate('/about', { replace: false });
    const navigatePayments = () => navigate('/payments', { replace: false });
    const navigateAuth = () => navigate('/auth/2', { replace: false });
    const navigateAuthRegister = () => navigate('/auth/1', { replace: false });

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className="lp-wrapper">
            <div className={`lp-nav-wrapper ${isScrolled ? 'lp-scrolled' : ''}`}>
                <button className="lp-nav-left" onClick={navigateLandingPage}>
                    <img src={logo} alt="logo" className={`lp-nav-logo ${isScrolled ? 'lp-scrolled-logo' : ''}`} />
                    <span className={`lp-span lp-l ${isScrolled ? 'lp-scrolled-text' : ''}`}>L</span>
                    <span className={`lp-span lp-e ${isScrolled ? 'lp-scrolled-text' : ''}`}>E</span>
                    <span className={`lp-span lp-g ${isScrolled ? 'lp-scrolled-text' : ''}`}>G</span>
                    <span className={`lp-span lp-o ${isScrolled ? 'lp-scrolled-text' : ''}`}>O</span>
                    <span className={`lp-span lp-log ${isScrolled ? 'lp-scrolled-text' : ''}`}>log</span>
                </button>
                <div className="lp-nav-right">
                    <button className="lp-nav-btn" onClick={navigateAboutUs}>About Us</button>
                    <button className="lp-nav-btn" onClick={navigatePayments}>Get Started</button>
                    <button className="lp-nav-btn-primary" onClick={navigateAuth}>Log In</button>
                </div>
            </div>
            <div className="lp-block-1">
                <div className="lp-block1-content-wrapper">
                    <h2 className="lp-block1-title">Your LEGO collection, anytime, anywhere.</h2>
                    <button className="lp-cta" onClick={navigatePayments}>Get Started</button>
                </div>
            </div>
            <div className="lp-block-2">
                <div className="lp-block2-content-wrapper">
                    <h2 className="lp-block2-title">Your Virtual LEGO Room</h2>
                    <p className="lp-block2-text">
                        Track and explore your LEGO collection with LEGOlog. Organize your sets, uncover unique details, and enjoy fun 
                        insights like your total piece count and other stats.
                    </p>
                </div>
                <div className="lp-block2-img-wrapper">
                    <img src={boxes} alt="LEGO Boxes" className="lp-block2-img"/>
                </div>
            </div>
            <div className="lp-block-2 lp-reverse-display">
                <div className="lp-block2-content-wrapper">
                    <h2 className="lp-block2-title right-align">How it Works</h2>
                    <p className="lp-block2-text right-align">
                        Our extensive database features all mainline LEGO sets since 1970. Easily find sets by name or number and add 
                        them to your personal collection.
                    </p>
                </div>
                <div className="lp-block2-img-wrapper">
                    <img src={oldSet} alt="LEGO Boxes" className="lp-block2-img"/>
                </div>
            </div>
            <div className="lp-block-2">
                <div className="lp-block2-content-wrapper">
                    <h2 className="lp-block2-title">Customize to Your Desire</h2>
                    <p className="lp-block2-text">
                        Love building your own creations? Log your custom builds and explore unique creations shared by the community.
                    </p>
                </div>
                <div className="lp-block2-img-wrapper">
                    <img src={customSet} alt="LEGO Boxes" className="lp-block2-img"/>
                </div>
            </div>
            <div className="lp-block3-title-wrapper">
                <h2 className="lp-block3-title">Pick Your Perfect Plan</h2>
                <h4 className="lp-block3-subtitle">Choose the plan that suits you best. Switch or cancel anytime with ease.</h4>
            </div>
            <div className="lp-block-3">
                <div className="lp-tier-card">
                    <h3 className="lp-tier-title">Brick Starter</h3>
                    <p className="lp-tier-subtitle">Everything you need to get started</p>
                    <div className="lp-tier-span-wrapper">
                        <span className="lp-tier-span-large">Free</span>
                    </div>
                    <button className="lp-tier-btn lp-tier-btn-active" onClick={navigateAuthRegister}>Choose Plan</button>
                    <hr className="lp-tier-divider" />
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faCheck} className='lp-check' size='m' />
                        <p className="lp-tier-text">Full Database Access</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faCheck} className='lp-check' size='m' />
                        <p className="lp-tier-text">Log Up To 15 Sets</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faCheck} className='lp-check' size='m' />
                        <p className="lp-tier-text">View Your Statistics</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faCheck} className='lp-check' size='m' />
                        <p className="lp-tier-text">Unlimited Missing Pieces</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faMinus} className='lp-minus' size='m' />
                        <p className="lp-tier-text lp-greyed">Log Custom Sets</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faMinus} className='lp-minus' size='m' />
                        <p className="lp-tier-text lp-greyed">Community Tab</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faMinus} className='lp-minus' size='m' />
                        <p className="lp-tier-text lp-greyed">Minifigure Log</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faMinus} className='lp-minus' size='m' />
                        <p className="lp-tier-text lp-greyed">Custom Picture Uploads</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faMinus} className='lp-minus' size='m' />
                        <p className="lp-tier-text lp-greyed">Personal Agent to Order Your Missing Pieces</p>
                    </div>
                </div>
                <div className="lp-tier-card">
                    <h3 className="lp-tier-title">Avid Collector</h3>
                    <p className="lp-tier-subtitle">Level up with additional features.</p>
                    <div className="lp-tier-span-wrapper">
                        <span className="lp-tier-span-small">US$ </span>
                        <span className="lp-tier-span-large">1.99</span>
                        <span className="lp-tier-span-small">/mo</span>
                    </div>
                    <button className="lp-tier-btn">Coming Soon</button>
                    <hr className="lp-tier-divider" />
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faCheck} className='lp-check' size='m' />
                        <p className="lp-tier-text">Full Database Access</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faCheck} className='lp-check' size='m' />
                        <p className="lp-tier-text">Log Up To 30 Sets</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faCheck} className='lp-check' size='m' />
                        <p className="lp-tier-text">View Your Statistics</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faCheck} className='lp-check' size='m' />
                        <p className="lp-tier-text">Unlimited Missing Pieces</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faCheck} className='lp-check' size='m' />
                        <p className="lp-tier-text">Log Custom Sets</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faCheck} className='lp-check' size='m' />
                        <p className="lp-tier-text">Community Tab</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faMinus} className='lp-minus' size='m' />
                        <p className="lp-tier-text lp-greyed">Minifigure Log</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faMinus} className='lp-minus' size='m' />
                        <p className="lp-tier-text lp-greyed">Custom Picture Uploads</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faMinus} className='lp-minus' size='m' />
                        <p className="lp-tier-text lp-greyed">Personal Agent to Order Your Missing Pieces</p>
                    </div>
                </div>
                <div className="lp-tier-card">
                    <h3 className="lp-tier-title">LEGO Enthusiast</h3>
                    <p className="lp-tier-subtitle">The Ultimate LEGOlog experience.</p>
                    <div className="lp-tier-span-wrapper">
                        <span className="lp-tier-span-small">US$ </span>
                        <span className="lp-tier-span-large">7.99</span>
                        <span className="lp-tier-span-small">/mo</span>
                    </div>
                    <button className="lp-tier-btn">Coming Soon</button>
                    <hr className="lp-tier-divider" />
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faCheck} className='lp-check' size='sm' />
                        <p className="lp-tier-text">Full Database Access</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faCheck} className='lp-check' size='m' />
                        <p className="lp-tier-text">Log Unlimited Sets</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faCheck} className='lp-check' size='m' />
                        <p className="lp-tier-text">View Your Statistics</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faCheck} className='lp-check' size='m' />
                        <p className="lp-tier-text">Unlimited Missing Pieces</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faCheck} className='lp-check' size='m' />
                        <p className="lp-tier-text">Log Custom Sets</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faCheck} className='lp-check' size='m' />
                        <p className="lp-tier-text">Community Tab</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faCheck} className='lp-check' size='m' />
                        <p className="lp-tier-text">Minifigure Log</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faCheck} className='lp-check' size='m' />
                        <p className="lp-tier-text">Custom Picture Uploads</p>
                    </div>
                    <div className="lp-tier-feature">
                        <FontAwesomeIcon icon={faCheck} className='lp-check' size='m' />
                        <p className="lp-tier-text">Personal Agent to Order Your Missing Pieces</p>
                    </div>
                </div>
            </div>
            <div className="lp-block-2">
                <div className="lp-block2-content-wrapper">
                    <h2 className="lp-block2-title">Track Your Missing Pieces</h2>
                    <p className="lp-block2-text">
                        Missing pieces? No problem. Log them in your sets and view them all in one place. With the LEGO Enthusiast 
                        plan, we'll source and order replacements for you at the best prices.
                    </p>
                </div>
                <div className="lp-block2-img-wrapper">
                    <img src={missingPieces} alt="LEGO Boxes" className="lp-block2-img"/>
                </div>
            </div>
            <div className="lp-block-4">
                <div className="lp-block4-img-wrapper">
                    <img src={train2} alt="LEGO Boxes" className="lp-block2-img"/>
                </div>
                <div className="lp-block4-content-wrapper">
                    <h2 className="lp-block2-title">Give It a Try</h2>
                    <p className="lp-block2-text">
                        Start your LEGOlog adventure with a free plan today and get the most out of your collection.
                    </p>
                    <button className="lp-cta-bottom" onClick={navigatePayments}>Get Started</button>
                </div>
            </div>
            <div className="lp-footer">
                <h3 className="lp-footer-text">
                    Legolog is redeveloping using a different backend framework. You can still create an account and view our home page
                     at the moment. Thank you for your patience!
                </h3>
                <div className="lp-footer-top-wrapper">
                <button className="lp-footer-btn" onClick={navigateAboutUs}>About Us</button>
                <div className="lp-footer-a-wrapper">
                    <a href="https://www.instagram.com/legologca/" className="lp-footer-a" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className='lp-icon-footer' size='2x' />
                    </a>
                    <a href="https://www.instagram.com/legologca/" className="lp-footer-a" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faMedium} className='lp-icon-footer' size='2x' />
                    </a>
                </div>
                </div>
                <h3 className="lp-footer-text">LEGOlog is in no way affiliated with the LEGO Group or any of its subsidiaries.</h3>
                <h3 className="lp-footer-copyright-text">&copy; 2024 Jaren Worme</h3>
            </div>
        </div>
    )
}
