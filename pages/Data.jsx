import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import '../styles/Data.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BackToTopButton = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    if (window.scrollY > 50) {
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

const Data = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Solar Energy Generation (kWh)',
        data: [300, 400, 350, 500, 450, 600, 550],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="data-page">
      <h1>Maxx Energy Generation Data</h1>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
      <BackToTopButton /> {/* Include the BackToTopButton component */}
    </div>
  );
};

export default Data;
