import React, { useState, useEffect } from 'react';
import Image from 'next/image'

const Pigs: React.FC = () => {
  const pigsPerYear = 1400092105;
  const secondsPerYear = 60 * 60 * 24 * 365;

  const calculatePigsPerSecond = () => {
    return pigsPerYear / secondsPerYear;
  };

  const [killedPigs, setKilledPigs] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKilledPigs((prevKilledPigs) => prevKilledPigs + calculatePigsPerSecond());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Pigs</h1>
      <Image src="/pig.jpg" alt="Description of the image" width={500} height={300} />
      <p>{pigsPerYear.toLocaleString()} Pigs are killed per year worldwide. That means roughly {Math.floor(calculatePigsPerSecond())} pig deaths per second.</p>

      <p style={{ fontWeight: 'bold' }}>{Math.floor(killedPigs)} pigs have been killed since you opened this page.</p>
    </div>
  );
};

export default Pigs;