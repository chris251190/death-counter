"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {
  const cattleDeathsPerYear = 331952042;
  const chickenDeathsPerYear = 73791052000;
  const pigDeathsPerYear = 1400092105;


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
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <h1>Animal Deaths</h1>

      <div className="flex flex-wrap ">
        <div className="w-1/3 p-2">
            Photo from <a href="https://unsplash.com/de/@bhris1017?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Christopher Carson</a> on <a href="https://unsplash.com/de/fotos/weisses-ferkel-kaut-heu-i4XLJmlYit4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            <Image src="/pig.jpg" alt="Description of the image" width={500} height={300} />
            <p><b>{pigDeathsPerYear.toLocaleString()} pigs</b> are killed per year worldwide. That means roughly <b>{Math.floor(calculateDeathsPerSecond(pigDeathsPerYear))} deaths per second.</b></p>

            <p><b>{Math.floor(killedPigs)} pigs have been killed since you opened this page.</b></p>

            <p><b>{killedPigsThisYear.toLocaleString()} pigs have been killed this year so far.</b></p>
        </div>

        <div className="w-1/3 p-2">
            Photo from <a href="https://unsplash.com/de/@dave_george?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">David George</a> on <a href="https://unsplash.com/de/fotos/braune-kuh-auf-grunem-grasfeld-tagsuber-o41CI8825qU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            <Image src="/cattle.jpg" alt="Description of the image" width={500} height={300} />
            <p><b>{cattleDeathsPerYear.toLocaleString()} cattle</b> is killed per year worldwide. That means roughly <b>{Math.floor(calculateDeathsPerSecond(cattleDeathsPerYear))} deaths per second.</b></p>

            <p><b>{Math.floor(killedCattle)} cattle has been killed since you opened this page.</b></p>

            <p><b>{killedCattleThisYear.toLocaleString()} cattle has been killed this year so far.</b></p>
        </div>

        <div className="w-1/3 p-2">
            Photo from <a href="https://unsplash.com/de/@cobybriant?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brian David</a> on <a href="https://unsplash.com/de/fotos/weisse-ente-mit-entenkuken-auf-braunem-nest-gi4p27XKVY8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            <Image src="/chicken.jpg" alt="Description of the image" width={500} height={300} />
            <p><b>{chickenDeathsPerYear.toLocaleString()} chickens</b> are killed per year worldwide. That means roughly <b>{Math.floor(calculateDeathsPerSecond(chickenDeathsPerYear))} deaths per second.</b></p>

            <p><b>{Math.floor(killedChickens)} chickens have been killed since you opened this page.</b></p>

            <p><b>{killedChickensThisYear.toLocaleString()} cattle have been killed this year so far.</b></p>
        </div>
      </div>

    </main>
  )
}
