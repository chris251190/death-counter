'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link';

const Pigs: React.FC = () => {
    const pigsPerYear = 1400092105;
    const secondsPerYear = 60 * 60 * 24 * 365;

    const calculatePigsPerSecond = () => {
        return pigsPerYear / secondsPerYear;
    };

    const [killedPigs, setKilledPigs] = useState(0);
    const [killedPigsThisYear, setKilledPigsThisYear] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const startOfYear = new Date(now.getFullYear(), 0, 1);
            const secondsSoFar = Math.floor((now.getTime() - startOfYear.getTime()) / 1000);

            setKilledPigsThisYear(Math.floor(calculatePigsPerSecond() * secondsSoFar));
            setKilledPigs((prevKilledPigs) => prevKilledPigs + calculatePigsPerSecond());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Pigs</h1>
            <Image src="/pig.jpg" alt="Description of the image" width={500} height={300} />
            <p><b>{pigsPerYear.toLocaleString()} Pigs</b> are killed per year worldwide. That means roughly <b>{Math.floor(calculatePigsPerSecond())} deaths per second.</b></p>

            <p><b>{Math.floor(killedPigs)} pigs have been killed since you opened this page.</b></p>

            <p><b>{killedPigsThisYear.toLocaleString()} pigs have been killed this year so far.</b></p>

            <p>The data used here are from: <a href="https://viva.org.uk/animals/number-animals-killed/">https://viva.org.uk/animals/number-animals-killed/</a></p>

            <Link href="/">Go Back</Link>

        </div>
    );
};

export default Pigs;