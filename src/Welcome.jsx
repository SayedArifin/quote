import React, { useEffect, useState } from 'react';
import './Welcome.css';
import axios from 'axios';
import Button from './Button';

const Welcome = () => {
  const [timeOfDay, setTimeOfDay] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [img, setImg] = useState('');

  useEffect(() => {
    axios
      .get('https://api.quotable.io/random')
      .then(response => {
        const randomQuote = response.data;
        setQuote(randomQuote.content);
        setAuthor(randomQuote.author);
      })
      .catch(error => {
        console.log('Error:', error);
      });

    const getTimeOfDay = () => {
      const currentHour = new Date().getHours();
      if (currentHour < 12) {
        setTimeOfDay('morning');
      } else if (currentHour < 18) {
        setTimeOfDay('afternoon');
      } else {
        setTimeOfDay('evening');
      }
    };

    const getCurrentTime = () => {
      const now = new Date();
      const hours = (now.getHours() % 12) || 12; // Convert to 12-hour format
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const ampm = now.getHours() < 12 ? 'AM' : 'PM'; // Get AM/PM text
      setCurrentTime(`${hours}:${minutes}:${seconds} ${ampm}`);
    };

    getTimeOfDay();
    getCurrentTime();

    const interval = setInterval(getCurrentTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const imageShow = () => {
      if (timeOfDay === 'morning') {
        setImg('/picture/morning.gif');
      } else if (timeOfDay === 'afternoon') {
        setImg('/picture/after.gif');
      } else {
        setImg('/picture/night.gif');
      }
    };

    imageShow();
  }, [timeOfDay]);

  return (
    <div className={`greeting-page ${timeOfDay}`}>
      <div className="greeting-text">
        
          <img className='greeting-logo' src={img} alt="greeting pic" />
        
        <h1>Hay, Good {timeOfDay}!</h1>
        <div className="quote-container">
          {/* <p className="quote-text">"{quote}"</p>
          <p className="author-name">{author}</p> */}
          <blockquote>{quote}
          <cite>{author}</cite>
          </blockquote>
          
        </div>
        {/* <Button text= 'bo' link = '/lol'/> */}
        <p className="current-time">Current time: {currentTime}</p>
      </div>
    </div>
  );
};

export default Welcome;
