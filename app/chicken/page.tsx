'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link';

const Chickens = () => {
    const chickensPerYear = 73791052000;
    const secondsPerYear = 60 * 60 * 24 * 365;

    const calculateChickensPerSecond = () => {
        return chickensPerYear / secondsPerYear;
    };

    const [killedChickensThisYear, setKilledChickensThisYear] = useState(0);
    const [killedChickens, setKilledChickens] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const startOfYear = new Date(now.getFullYear(), 0, 1);
            const secondsSoFar = Math.floor((now.getTime() - startOfYear.getTime()) / 1000);

            setKilledChickensThisYear(Math.floor(calculateChickensPerSecond() * secondsSoFar));
            setKilledChickens((prevKilledChickens) => prevKilledChickens + calculateChickensPerSecond());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Chickens</h1>
            <Image src="/chicken.jpg" alt="Description of the image" width={500} height={300} />
            <p><b>{chickensPerYear.toLocaleString()} Chickens</b> are killed per year worldwide. That means roughly <b>{Math.floor(calculateChickensPerSecond())} deaths per second.</b></p>

            <p><b>{Math.floor(killedChickens)} chickens have been killed since you opened this page.</b></p>

            <p><b>{killedChickensThisYear.toLocaleString()} chickens have been killed this year so far.</b></p>

            <p>The data used here are from: <a href="https://viva.org.uk/animals/number-animals-killed/">https://viva.org.uk/animals/number-animals-killed/</a></p>

            <Link href="/">Go Back</Link>

        </div>
    );
};

export default Chickens;