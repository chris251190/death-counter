import Image from "next/image";

type AnimalCardProps = {
    title: string;
    imageSrc: string;
    imageWidth: number,
    imageHeight: number,
    deathsPerYear: number;
    deathsPerSecond: number,
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
    deathsPerSecond,
    deathsThisYear,
    totalDeaths,
}) => {
    return (
        <div className="sm:w-1/3 p-2 w-full mx-2 sm:mx-auto">
            <div className="bg-gray-800 shadow-md rounded-md p-4">
                <h2 className="text-white">{title}</h2>

                <h3><b className="text-red-500">{deathsThisYear.toLocaleString()} were killed</b> this year so far.</h3>

                <Image src={imageSrc} alt="picture of a young animal" width={imageWidth} height={imageHeight} />
                <div className="bg-gray-700 p-4 w-5/6 mx-auto">
                    <p>● <b>{deathsPerYear.toLocaleString()} animals</b> are killed per year worldwide.</p>

                    <p>● That would be roughly <b>{Math.floor(deathsPerSecond)} deaths per second.</b></p>

                    <p>● <b className="text-red-500">{Math.floor(totalDeaths).toLocaleString()}</b> <b>were killed</b> since you opened this page.</p>
                </div>
            </div>
        </div>
    );
};

export default AnimalCard;