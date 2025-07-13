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
        <nav className="w-full bg-[var(--white)] text-[var(--black)]">
        {/* Top Line: Logo & Cart */}
        <div className="flex justify-between items-center border-b border-[var(--mid-gray)] ml-4 mr-4 md:mr-8 py-4">
            {/* Logo */}
            {/* <Link href="/" className="block w-[220px] md:w-[400px]">
            <Image
                src="/logo/metrica-vibe-logo-6.png"
                alt="Metrica Logo"
                width={280}
                height={60}
                className="h-auto space-y-20"
                priority
            />
            </Link> */}

            {/* Logo */}
            <Link href="/" className="block text-4xl md:text-8xl font-heading uppercase">
                <h1 className="text-logo-image">Metrica</h1>
            </Link>
            {/* Cart */}
            <button
            className="snipcart-checkout relative font-sub-heading text-xl uppercase px-4"
            aria-label="Checkout"
            >
            <ShoppingCart className="w-6 h-6" />
            <span className="snipcart-items-count absolute -top-2 right-1 text-xs bg-[var(--pink)] text-[var(--white)] px-1 rounded-full" />
            </button>
        </div>

        {/* Bottom Line: Navigation */}
        <div className="px-4 pt-4 pb-20">
            <div className="flex gap-8 font-sub-heading text-lg md:text-xl uppercase flex-wrap">
            <Link href="/collections" className={navLinkClass('/collections')}>Collections</Link>
            <Link href="/gallery" className={navLinkClass('/gallery')}>Gallery</Link>
            <Link href="/contact" className={navLinkClass('/contact')}>Contact</Link>
            {/* <Link href="/about" className={navLinkClass('/about')}>About</Link> */}
            </div>
        </div>
        </nav>
    )
}