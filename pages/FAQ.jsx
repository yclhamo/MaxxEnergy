import { useState } from 'react';
import '../styles/FAQ.css';
import BackToTopButton from '../components/backtotop'; 

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [userQuestion, setUserQuestion] = useState('');
  const [questions, setQuestions] = useState([]);

  const toggleFAQ = (index) => {
    console.log(`Clicked FAQ index: ${index}`); // Debugging line
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleQuestionChange = (e) => {
    setUserQuestion(e.target.value);
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (userQuestion.trim() === '') return; // Avoid empty submissions
    setQuestions([...questions, userQuestion]);
    setUserQuestion(''); // Clear the input field
  };

  const faqData = [
    {
      question: 'What is Maxx Energy?',
      answer:
        'Maxx Energy specializes in energy solutions, focusing on renewable energy sources like solar, wind. Services like energy analytics, solar panel installations, and energy-saving solutions can also be provided.',
    },
    {
      question: 'How do I sign up?',
      answer:
        "You can sign up by clicking on the 'Sign Up' button on the homepage or by navigating to the Sign Up page through the navigation menu.",
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes, your data is stored securely with encryption and access controls to ensure your information is protected.',
    },
    {
      question: 'How frequently is the data updated?',
      answer:
        "The data is updated in real-time, providing you with the latest information on your solar plant's energy generation.",
    },
    {
      question: 'Can I download my data?',
      answer:
        'Yes, you can download your Maxx Energy generation data in CSV format for further analysis or record-keeping.',
    },
    {
      question: 'Is there a mobile app?',
      answer:
        'Currently, Maxx Energy is a web-based platform. A mobile app is under development and will be available soon.',
    },
    {
      question: 'What if I forget my password?',
      answer:
        "If you forget your password, you can click on the 'Forgot Password' link on the Sign In page to reset your password.",
    },
    {
      question: 'How do I contact customer support?',
      answer:
        'You can contact our customer support team through the Contact page. We’re here to assist you with any questions or issues.',
    },
    {
      question: 'Are there any subscription plans?',
      answer:
        'Solar Data Viewer offers both free and premium subscription plans. Premium plans provide additional features such as advanced analytics and reporting.',
    },
    {
      question: 'How do I update my account information?',
      answer:
        'You can update your account information by visiting the Profile page after signing in.',
    },
    {
      question: 'What is the refund policy?',
      answer:
        'We offer a 30-day money-back guarantee for all premium subscriptions. If you’re not satisfied, contact us for a full refund.',
    },
    {
      question: 'Can I share my data with others?',
      answer:
        "Yes, you can share your solar energy data with other users by providing them with access through the platform's sharing options.",
    },
  ];

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      <div className="faq-form">
        <h2>Have Additional Questions?</h2>
        <form onSubmit={handleQuestionSubmit}>
          <textarea
            value={userQuestion}
            onChange={handleQuestionChange}
            placeholder="Type your question here..."
            rows="4"
            required
          />
          <button type="submit">Submit Question</button>
        </form>
        <div className="submitted-questions">
          {questions.length > 0 && (
            <div>
              <h3>Submitted Questions:</h3>
              <ul>
                {questions.map((q, index) => (
                  <li key={index}>{q}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
};

export default FAQ;
