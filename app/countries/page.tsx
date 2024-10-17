import Link from "next/link";
import React from "react";

const Countries = () => {
    return(
        <div>
                <div>
                    <h1 className="text-center text-2xl font-serif text-pink-800 underline m-5 p-5">Country List</h1>
                        <ul className="text-center font-serif text-pink-700 text-2xl underline-offset-1">
                            <li><Link href={"/countries/Mexico"}>Mexico 🌟</Link></li>
                            <li><Link href={"/countries/UK"}>United Kingdom 🌉</Link></li>
                            <li><Link href={"/countries/Brazil"}>Brazil 🌿</Link></li>
                            <li><Link href={"/countries/Peru"}>Peru 🎠</Link></li>
                            <li><Link href={"/countries/Italy"}>Italy 🏰</Link></li>
                        </ul>
                </div>
        </div>
    )
}
export default Countries;