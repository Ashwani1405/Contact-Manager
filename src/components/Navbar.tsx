"use client";

import Link from "next/link";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
    const session = false;

    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
                    Contact Manager
                </Link>
                <div className="flex items-center space-x-4">
                    {session ? (
                        <>
                            <Link href="/contacts" className="text-blue-600 hover:text-blue-800 transition-colors">
                                Contacts
                            </Link>
                            <LogoutButton />
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="text-blue-600 hover:text-blue-800 transition-colors">
                                Login
                            </Link>
                            <Link href="/register" className="text-blue-600 hover:text-blue-800 transition-colors">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
