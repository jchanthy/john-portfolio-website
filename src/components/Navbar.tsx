'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-6 px-10 shadow">
            <Link href="/" className="text-xl font-bold">MyPortfolio</Link>
            <ul className="flex space-x-6">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}
