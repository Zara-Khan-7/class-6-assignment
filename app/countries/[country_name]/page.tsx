import React from "react";
import { CountryTypes } from "@/types/type";
import CountryCard from "@/app/component/CountryDetailCard/card";

const countriesNames = ({params} : {params: {country_name: string} }) => {
    const countrydetails: CountryTypes[] = [
        {
            name: "Mexico",
            population: 67988035,
            capital: "Mexico City",
        },
        {
            name: "UK",
            population: 66928451,
            capital:"London",
        },
        {
            name:"Brazil",
            population: 212559417,
            capital: "Brasilia",
        },
        {
            name: "Peru",
            population: 32971846,
            capital: "Lima",
        },
        {
            name: "Italy",
            population: 60359546,
            capital: "Rome",
        },
    ];

    const country = countrydetails.find(
        (c)=> c.name.toLowerCase() === params.country_name.toLowerCase());
        if(!country){
            return <div className="text-center text-2xl font-serif text-pink-800 underline m-5 p-5">Country not found</div>
        }
   
    return(
       <div>
        <CountryCard
        name={country.name}
        population={country.population}
        capital={country.capital}
        />  
       </div>
    )
}
export default countriesNames;