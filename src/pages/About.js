import React from 'react';
import './About.css';
import Navbar from '../components/navbar';

const AboutUs = () => {
    return (
        <div>
            <Navbar/>
            <div className="about-container">

                {/* About Us Section */}
                <div className="about-section">
                    <h1>About Us</h1>
                    <p>
                        Welcome to <strong>3D Cart</strong>, the ultimate online marketplace for 3D assets! We provide a platform for creators, brands, and developers to buy and sell high-quality 3D assets, textures, rigged bodies, and more.
                        Whether you're a professional artist or a hobbyist, 3D Cart is the perfect place to showcase your talent and find unique assets for your projects.
                    </p>
                </div>

                {/* Goal Section */}
                <div className="goal-section">
                    <h2>Our Goal</h2>
                    <p>
                        Our mission is to empower creators and brands by providing them with a seamless platform to share, monetize, and discover 3D content.
                        We aim to foster a community where innovation meets creativity, bridging the gap between art and technology.
                    </p>
                </div>

                {/* Industry Collaboration Section */}
                <div className="collaboration-section">
                    <h2>Industry & Brand Collaboration</h2>
                    <p>
                        At 3D Cart, we believe in collaborating with the best in the industry to bring exceptional value to our users.
                        We are proud to be associated with leaders like <strong>NVIDIA</strong>, <strong>Epic Games</strong>, and other pioneers in the 3D ecosystem.
                        These partnerships ensure that our creators have access to cutting-edge technology and tools to deliver outstanding content.
                    </p>
                </div>

                {/* Terms and Conditions Section */}
                <div className="terms-section">
                    <h2>Terms and Conditions</h2>
                    <p>
                        Please review our <a href="/terms" className="terms-link">Terms and Conditions</a> to ensure you understand the rules and regulations for using 3D Cart.
                        By accessing our platform, you agree to comply with these terms and policies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

