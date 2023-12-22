"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AnimalCard from './components/AnimalCard';

export default function Home() {
  const animals = [
    { title: 'Pigs', imageSrc: '/pig.jpg', imageWidth: 500, imageHeight: 300, deathsPerYear: 1400092105 },
    { title: 'Cattle', imageSrc: '/cattle.jpg', imageWidth: 500, imageHeight: 300, deathsPerYear: 331952042 },
    { title: 'Chickens', imageSrc: '/chicken.jpg', imageWidth: 300, imageHeight: 300, deathsPerYear: 73791052000 },
    { title: 'Wild Fish', imageSrc: '/fish.jpg', imageWidth: 500, imageHeight: 300, deathsPerYear: 2300000000000 },
    { title: 'Sheep and Lamb', imageSrc: '/sheep.jpg', imageWidth: 500, imageHeight: 300, deathsPerYear: 617255637 },
    { title: 'Horses', imageSrc: '/horse.jpg', imageWidth: 500, imageHeight: 300, deathsPerYear: 4595650 }
  ];

  const secondsPerYear = 60 * 60 * 24 * 365;

  const calculateDeathsPerSecond = (deathsPerYear: number) => deathsPerYear / secondsPerYear;

  const [animalDeaths, setAnimalDeaths] = useState(animals.map(animal => ({ ...animal, deathsThisYear: 0, totalDeaths: 0 })));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const startOfYear = new Date(now.getFullYear(), 0, 1);
      const secondsSoFar = Math.floor((now.getTime() - startOfYear.getTime()) / 1000);

      setAnimalDeaths(prevDeaths => prevDeaths.map(animal => ({
        ...animal,
        deathsThisYear: Math.floor(calculateDeathsPerSecond(animal.deathsPerYear) * secondsSoFar),
        totalDeaths: animal.totalDeaths + calculateDeathsPerSecond(animal.deathsPerYear)
      })));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <h1>Animal Death Counter</h1>

      <div className="flex flex-wrap ">
        {animalDeaths.map(animal => (
          <AnimalCard
            key={animal.title}
            title={animal.title}
            imageSrc={animal.imageSrc}
            imageWidth={animal.imageWidth}
            imageHeight={animal.imageHeight}
            deathsPerYear={animal.deathsPerYear}
            deathsThisYear={animal.deathsThisYear}
            deathsPerSecond={calculateDeathsPerSecond(animal.deathsPerYear)}
            totalDeaths={animal.totalDeaths}
          />
        ))}

        <p className='sm:w-3/3 p-2 w-full text-center'>All data is coming from: <Link href={"https://viva.org.uk/animals/number-animals-killed/"}>https://viva.org.uk/animals/number-animals-killed/</Link></p>
      </div>
    </main>
  )
}
