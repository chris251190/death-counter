import React from 'react';

const Pigs: React.FC = () => {
  const pigsPerYear = 1400092105;
  const secondsPerYear = 60 * 60 * 24 * 365;

  const calculatePigsPerSecond = () => {
    return pigsPerYear / secondsPerYear;
  };

  return (
    <div>
      <h1>Pigs</h1>
      <p>{pigsPerYear} Pigs are killed per year worldwide. That means {calculatePigsPerSecond().toFixed(2)} pig deaths per second.</p>
    </div>
  );
};

export default Pigs;