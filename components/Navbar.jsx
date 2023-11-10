"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {

    const { status } = useSession();

    return (
        <div className="p-4 flex justify-between items-center shadow-md">
            <Link href={"/"} className="font-bold text-lg text-indigo-500">Google Auth</Link>
            
            {status === "authenticated"
                ? (<button onClick={() => signOut()} className="buttonSigIn bg-indigo-400 text-white px-6 py-2 rounded-md hover:bg-indigo-500 transition-all ease-in-out duration-300">
                        Sign Out
                    </button>)
                : (<button onClick={() => signIn()} className="buttonSigIn bg-indigo-400 text-white px-6 py-2 rounded-md hover:bg-indigo-500 transition-all ease-in-out duration-300">
                        Sign In
                    </button>)
            }

        </div>
    );
}