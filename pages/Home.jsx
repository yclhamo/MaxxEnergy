import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported correctly
import '../styles/Home.css'; // Ensure this path is correct
import calculatorGIF from '../images/calculator.GIF'; 
import newsletterGIF from '../images/newsletter.GIF'; 
import analyticsImage from '../images/analytics.png'; 
import maxxEnergyLogo from '../images/logo.png'; // Import the Maxx Energy logo image

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

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-logo">
          <img src={maxxEnergyLogo} alt="Maxx Energy Logo" />
        </div>
        <div className="hero-content">
          <h1>Welcome</h1>
          <p>Your gateway to real-time solar energy generation insights.</p>
          <Link to="/sign-up">
            <button>Get Started</button>
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src={calculatorGIF} alt="Energy Calculator" />
            <h3>Energy Calculator</h3>
            <p>Tool for users to estimate their energy consumption or savings.</p>
          </div>
          <div className="feature-card">
            <img src={analyticsImage} alt="Analytics" />
            <h3>Analytics</h3>
            <p><strong>FAQs:</strong> Answers to common questions about products, services, and policies.</p>
          </div>
          <div className="feature-card">
            <img src={newsletterGIF} alt="Newsletter" />
            <h3>Newsletter</h3>
            <p>Subscription Form: Option for users to sign up for updates and promotional content.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to start?</h2>
        <p>Join us today and take control of your solar data.</p>
        <Link to="/sign-up">
          <button>Sign Up Now</button>
        </Link>
      </section>

      <BackToTopButton /> {/* Include the BackToTopButton component */}
    </div>
  );
};

export default Home;
