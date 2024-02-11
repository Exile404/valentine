import React from 'react';

const Congratulations = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-screen flex flex-col items-center justify-center">
      <img
        src="https://media1.tenor.com/m/VDHTafrC3EwAAAAC/lovely-cats.gif"
        alt="Celebration GIF"
        className="mb-8 rounded-md shadow-lg"
      />
      <div className="text-white text-4xl font-bold p-8 rounded-md shadow-lg">
        <span role="img" aria-label="Celebration">🎉</span> Yeeeeee... You're mine finally... I am lucky to have youuu... I love youuu<span role="img" aria-label="Heart">❤️</span>
      </div>
    </div>
  );
};

export default Congratulations;
