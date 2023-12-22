"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AnimalCardComponent from './components/AnimalCard';
import AnimalCard from './components/AnimalCard';

export default function Home() {
  const cattleDeathsPerYear = 331952042;
  const chickenDeathsPerYear = 73791052000;
  const pigDeathsPerYear = 1400092105;
  const fishDeathsPerYear = 2300000000000;

  const secondsPerYear = 60 * 60 * 24 * 365;

  const calculateDeathsPerSecond = (deathsPerYear: number) => {
    return deathsPerYear / secondsPerYear;
  };

  const [killedCattle, setKilledCattle] = useState(0);
  const [killedCattleThisYear, setKilledCattleThisYear] = useState(0);


  const [killedChickensThisYear, setKilledChickensThisYear] = useState(0);
  const [killedChickens, setKilledChickens] = useState(0);

  const [killedPigs, setKilledPigs] = useState(0);
  const [killedPigsThisYear, setKilledPigsThisYear] = useState(0);

  const [killedFish, setKilledFish] = useState(0);
  const [killedFishThisYear, setKilledFishThisYear] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const startOfYear = new Date(now.getFullYear(), 0, 1);
      const secondsSoFar = Math.floor((now.getTime() - startOfYear.getTime()) / 1000);

      setKilledCattleThisYear(Math.floor(calculateDeathsPerSecond(cattleDeathsPerYear) * secondsSoFar));
      setKilledCattle((prevKilledPigs) => prevKilledPigs + calculateDeathsPerSecond(cattleDeathsPerYear));

      setKilledChickensThisYear(Math.floor(calculateDeathsPerSecond(chickenDeathsPerYear) * secondsSoFar));
      setKilledChickens((prevKilledChickens) => prevKilledChickens + calculateDeathsPerSecond(chickenDeathsPerYear));

      setKilledPigsThisYear(Math.floor(calculateDeathsPerSecond(pigDeathsPerYear) * secondsSoFar));
      setKilledPigs((prevKilledPigs) => prevKilledPigs + calculateDeathsPerSecond(pigDeathsPerYear));

      setKilledFishThisYear(Math.floor(calculateDeathsPerSecond(fishDeathsPerYear) * secondsSoFar));
      setKilledFish((prevKilledPigs) => prevKilledPigs + calculateDeathsPerSecond(fishDeathsPerYear));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <h1>Animal Deaths</h1>

      <div className="flex flex-wrap ">

        <AnimalCard title={'Pigs'} imageSrc={'/pig.jpg'} imageWidth={500} imageHeight={300} deathsPerYear={pigDeathsPerYear} deathsThisYear={killedPigsThisYear} totalDeaths={killedPigs} />

        <AnimalCard title={'Cattle'} imageSrc={'/cattle.jpg'} imageWidth={500} imageHeight={300} deathsPerYear={cattleDeathsPerYear} deathsThisYear={killedCattleThisYear} totalDeaths={killedCattle} />

        <AnimalCard title={'Chickens'} imageSrc={'/chicken.jpg'} imageWidth={300} imageHeight={300} deathsPerYear={chickenDeathsPerYear} deathsThisYear={killedChickensThisYear} totalDeaths={killedChickens} />

        <AnimalCard title={'Wild Fish'} imageSrc={'/fish.jpg'} imageWidth={500} imageHeight={300} deathsPerYear={fishDeathsPerYear} deathsThisYear={killedFishThisYear} totalDeaths={killedFish} />

        <p className='sm:w-3/3 p-2 w-full text-center'>All data is coming from: <Link href={"https://viva.org.uk/animals/number-animals-killed/"}>https://viva.org.uk/animals/number-animals-killed/</Link></p>
      </div>

    </main>
  )
}
