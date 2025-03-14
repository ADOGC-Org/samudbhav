import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ComingSoon from '../components/ComingSoon';
import './ChapterComingSoon.css';

function ChapterComingSoon() {
  const { id } = useParams();
  
return (
    <div>
        <Header />
        <div className="chapter-coming-soon">
            <h2>{id.toUpperCase()} - Coming Soon</h2>
            <div>
                    {id === 'adogc' && (
                            <p>
                                    You can visit our Github Organization <a href="https://github.com/ADOGC-Org" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>here</a>.
                            </p>
                    )}
            </div>
            <ComingSoon />
        </div>
    </div>
);
}

export default ChapterComingSoon;
