import Link from "next/link";
import React from "react";

type Props = {
    name: string;
    population: number;
    capital: string;
}

const CountryCard = ({name, population, capital}: Props) => {
    return (
        <div className="text-center">
            <h2 className="text-center text-2xl font-serif text-pink-800 underline m-3 p-3">Country List 💬</h2><br></br>
            <p className="text-center font-serif text-pink-700 text-2xl">Country 📋 : {name}</p>
            <p className="text-center font-serif text-pink-700 text-2xl">Population 📈 : {population}</p>
            <p className="text-center font-serif text-pink-700 text-2xl">Capital ✨ : {capital}</p>

            <button  className="font-serif text-pink-700 text-2xl m-5 p-2 hover:mix-blend-color-dodge">
                <Link href={"/countries"}>Back</Link>{"" }
            </button>
        </div>
    );
};
export default CountryCard;