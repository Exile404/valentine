// Decision.jsx
import React, { useState, useEffect } from 'react';

const Decision = ({ onYesClick, onNoClick }) => {
  const [increaseSize, setIncreaseSize] = useState(0);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [noButtonText, setNoButtonText] = useState('No');
  const [noButtonIndex, setNoButtonIndex] = useState(0); 
  const noButtonOptions = ['Please press Yes', 'Are you sure', 'Confirm No', 'Say Yes', 'I will very sad', 'I will very very sad', 'I will very very very sad',
    "Don't Refuse meeee", "I lovee you", "Please be in my life", "Please be mine", "I will cry", "Please don't press NO", "Choose affirmatively, please", 
    "Don't deny my heartfelt", "Each no deepens my sorrow","Love you endlessly", "Say yes, let's intertwine","Tears will flow if denied","Sure about your decision?"]; // Add your desired texts
  const sizeClasses = [
    'text-lg px-4 py-2',
    'text-xl px-5 py-3',
    'text-2xl px-6 py-4',
    'text-3xl px-8 py-6',
    'text-4xl px-10 py-8',
    'text-5xl px-12 py-10',
    'text-6xl px-14 py-12',
    'text-7xl px-16 py-14',
    'text-8xl px-20 py-16',
    'text-9xl px-24 py-20',
    // Add more classes as needed
    'text-9xl px-28 py-24',
    'text-9xl px-32 py-28',
    'text-9xl px-36 py-32',
    'text-9xl px-40 py-36',
    'text-9xl px-44 py-40',
    'text-9xl px-48 py-44',
    'text-9xl px-52 py-48',
    'text-9xl px-56 py-52',
    'text-9xl px-60 py-56',
    'text-9xl px-64 py-60',
    
    'text-9xl px-64 py-60 w-full h-full'
  ];
  const handleNoClickInternal = () => {
    
    setNoButtonText(noButtonOptions[noButtonIndex]);
    setNoButtonIndex((prevIndex) => (prevIndex + 1) % noButtonOptions.length); 
    setIncreaseSize((prevSize) => prevSize + 1); // Increase size for the next "Yes" button
    onNoClick();
    if (increaseSize === 20) {
      setShowFullScreen(true); // Make the "Yes" button full screen after 10 clicks
    }
  };
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFullScreen(true);
    }, 100); // Adjust the time as needed

    return () => clearTimeout(timeout);
  }, [increaseSize, onNoClick]); // Include onNoClick in the dependency array
  

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-pink-300 to-red-500">
    
      <p className="text-white text-2xl mb-4">❤️❤️❤️Will you be my Valentine??❤️❤️❤️</p>
      <button
        onClick={onYesClick}
        className={`bg-green-800 text-white mb-2 ${
          showFullScreen ? sizeClasses[increaseSize % sizeClasses.length] : 'text-lg px-4 py-2'
        }`}
      >
        Yes
      </button>
      {increaseSize !== 20 && (
        <button
          onClick={handleNoClickInternal}
          className="bg-red-500 text-white px-4 py-2 text-lg"
        >
          {noButtonText}
        </button>
      )}
    </div>
  );
};

export default Decision;
