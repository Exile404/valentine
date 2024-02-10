// App.jsx
import React, { useState } from 'react';
import Congratulations from './components/Congratulations';
import Decision from './components/Decision';


const App = () => {
  const [showCongratulations, setShowCongratulations] = useState(false);

  const handleYesClick = () => {
    setShowCongratulations(true);
  };

  const handleNoClick = () => {
    console.log("Clicked No")
  };

  return (
    <div>
      {showCongratulations ? (
        <Congratulations />
      ) : (
        <Decision onYesClick={handleYesClick} onNoClick={handleNoClick} />
      )}
    </div>
  );
};

export default App;
