import React from 'react';
import Image from 'next/image'

const Pigs: React.FC = () => {
  const pigsPerYear = 1400092105;
  const secondsPerYear = 60 * 60 * 24 * 365;

  const calculatePigsPerSecond = () => {
    return pigsPerYear / secondsPerYear;
  };

  return (
    <div>
      <h1>Pigs</h1>
      <Image src="/pig.jpg" alt="Description of the image" width={500} height={300} />

      <p>{pigsPerYear.toLocaleString()} Pigs are killed per year worldwide. That means {calculatePigsPerSecond().toFixed(2)} pig deaths per second.</p>
    </div>
  );
};

export default Pigs;