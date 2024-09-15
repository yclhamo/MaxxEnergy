import React, { useState, useEffect } from 'react';
import '../styles/AboutUs.css';
import businessmanImage from '../images/rahi.png'; 
import businesswomanImage from '../images/colins.png'; 
import businessmanImage2 from '../images/brittani.png';

// BackToTopButton Component
const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Adjust this value to control when the button appears
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button 
      className={`back-to-top ${visible ? 'visible' : ''}`} 
      onClick={scrollToTop}
    >
      &#8679; {/* Unicode for up arrow */}
    </button>
  );
};

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <section className="company-overview">
        <h1>About Us</h1>
        <p>
          Maxx Energy is a leading innovator in the renewable energy sector, dedicated to transforming the way the world powers its future. We specialize in providing cutting-edge solutions in solar energy, as well as advanced energy storage technologies. Our commitment is to offer high-quality, sustainable energy solutions that cater to the diverse needs of our clients—from homeowners to large enterprises or communities.
        </p>
        <p>
          Founded with a passion for environmental sustainability, Maxx Energy blends innovation with expertise to deliver reliable, efficient, and cost-effective energy systems. Our team of dedicated professionals brings a wealth of experience and knowledge, ensuring that every project is executed with precision and care. We pride ourselves on our customer-centric approach, working closely with clients to tailor solutions that meet their unique energy requirements.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At Maxx Energy, our mission is to accelerate the global shift towards sustainable energy by delivering innovative and effective renewable energy solutions. We are focused on:
        </p>
        <ul>
          <li><strong>Accessibility:</strong> Ensuring that solar data is not only available but also understandable to all, regardless of technical expertise.</li>
          <li><strong>Transparency:</strong> Upholding a standard of clarity and honesty in the data and insights we provide, ensuring users can trust the information they are viewing.</li>
          <li><strong>Sustainability:</strong> Promoting the adoption of solar energy as a key component in the fight against climate change.</li>
        </ul>
      </section>

      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          Our vision is to be the leading platform for solar energy data, guiding the global transition to a sustainable energy future. We aim to guide transition into the world to where solar power is not just an alternative, but the primary source of energy. This will lead to a significant reduction in carbon emissions and a healthier planet for all of us, for future generations to come as well.
        </p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={businessmanImage} alt="Team Member 1" /> 
            <h3>Rahim Islam</h3>
          </div>
          <div className="team-member">
            <img src={businesswomanImage} alt="Team Member 2" /> 
            <h3>Colin Mays</h3>
          </div>
          <div className="team-member">
            <img src={businessmanImage2} alt="Team Member 3" /> 
            <h3>Brittani Court</h3>
          </div>
        </div>
      </section>

      {/* Include BackToTopButton component */}
      <BackToTopButton />
    </div>
  );
};

export default AboutUs;
