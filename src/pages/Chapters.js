import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Chapters.css';

function Chapters() {
  // Example static chapters array
  const chapters = [
    { id: 'about', title: 'About Us', description: 'Learn more about our organization.' },
    { id: 'services', title: 'Services', description: 'Discover our range of services.' },
    { id: 'events', title: 'Events', description: 'Upcoming events and activities.' },
    { id: 'adogc', title: 'ADOGC', description: 'Advanced Developer Oriented Global Community' },
    { id: 'women empowerment', title: 'Women Empowerment', description: 'Upcoming events and activities.' }
  ];

  return (
    <div>
      <Header />
      <div className="chapters-page">
        <h2>Our Chapters</h2>
        <div className="chapters-grid">
          {chapters.map((chapter) => (
            <Link key={chapter.id} to={`/chapter/${chapter.id}`} className="chapter-box">
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chapters;
