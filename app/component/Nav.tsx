import Link from "next/link";

export default function Navbar(){
    return (
        <div className="text-left m-0 p-0 font-serif justify-center text-pink-950 text-lg">
           <Link href={"/"}>Home🏠</Link> | &nbsp;
           <Link href={"/about"}>About📝</Link> | &nbsp;
           <Link href={"/countries"}>Country List🖼</Link> | &nbsp;
        </div>
    )
}