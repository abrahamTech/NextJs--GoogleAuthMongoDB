import Link from "next/link";

export default function Navbar() {
    return (
        <div className="p-4 flex justify-between items-center shadow-md">
            <Link href={"/"} className="font-bold text-lg text-indigo-500">Google Auth</Link>
            <button className="bg-indigo-500 text-white px-6 py-2 rounded-md">Sign In</button>
        </div>
    );
}