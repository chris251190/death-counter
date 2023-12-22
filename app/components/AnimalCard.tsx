import Image from "next/image";

type AnimalCardProps = {
    title: string;
    imageSrc: string;
    imageWidth: number,
    imageHeight: number,
    deathsPerYear: number;
    deathsThisYear: number;
    totalDeaths: number;
};

const secondsPerYear = 60 * 60 * 24 * 365;

const calculateDeathsPerSecond = (deathsPerYear: number) => {
    return deathsPerYear / secondsPerYear;
};

const AnimalCard: React.FC<AnimalCardProps> = ({
    title,
    imageSrc,
    imageWidth,
    imageHeight,
    deathsPerYear,
    deathsThisYear,
    totalDeaths,
}) => {
    return (
        <div className="sm:w-1/3 p-2 w-full">
            <div className="bg-gray-800 shadow-md rounded-md p-4">
                <h2 className="text-white">{title}</h2>

                <Image src={imageSrc} alt="picture of a young animal" width={imageWidth} height={imageHeight} />
                <p>● <b>{deathsPerYear.toLocaleString()} animals</b> are killed per year worldwide.</p>

                <p>● That means roughly <b>{Math.floor(calculateDeathsPerSecond(deathsPerYear))} deaths per second.</b></p>

                <p>● <b>{Math.floor(totalDeaths).toLocaleString()} animals have been killed</b> since you opened this page.</p>

                <p>● <b className="text-red-500">{deathsThisYear.toLocaleString()} animals have been killed</b> this year so far.</p>
            </div>
        </div>
    );
};

export default AnimalCard;