'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ShoppingCart } from 'lucide-react'

export default function Navbar() {
    const pathname = usePathname()

    const navLinkClass = (path) =>
        `${pathname === path ? 'underline' : ''} hover:opacity-80 transition-opacity`

    return (
        <nav className="w-full border-b border-[var(--mid-gray)] bg-[var(--light)] text-[var(--dark)]">
        {/* Top Row: Logo & Cart */}
        <div className="flex justify-between px-4 md:px-6 py-4 max-w-7xl mx-auto">
            {/* Logo */}
            <Link href="/" className="block w-[260px] md:w-[400px]">
            <Image
                src="/logo/logo-metrica.png"
                alt="Metrica Logo"
                width={400}
                height={100}
                className="w-full h-auto"
                priority
            />
            </Link>
            {/* <Link href="/" className="text-8xl font-bold tracking-wide uppercase font-sub-heading">Metrica</Link> */}

            {/* Snipcart Cart with Lucide Icon */}
            <button
            className="snipcart-checkout relative font-sub-heading text-lg uppercase"
            aria-label="Checkout"
            >
            <ShoppingCart className="w-6 h-6" />
            <span className="snipcart-items-count absolute top-6 -right-3 text-xs bg-[var(--dark)] text-[var(--light)] px-1 rounded-full" />
            </button>
        </div>

        {/* Bottom Row: Navigation Links */}
        <div className="px-4 md:px-6 py-4 max-w-7xl mx-auto">
            <div className="flex justify-start gap-8 font-sub-heading text-xl md:text-2xl uppercase flex-wrap">
            <Link href="/collections" className={navLinkClass('/collections')}>Collections</Link>
            <Link href="/artworks" className={navLinkClass('/artworks')}>Artworks</Link>
            <Link href="/about" className={navLinkClass('/about')}>About</Link>
            </div>
        </div>
        </nav>
    )
}