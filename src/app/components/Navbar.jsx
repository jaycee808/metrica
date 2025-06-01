'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()

    return (
        <nav className="flex justify-between items-center px-6 py-4 border-b">
        <Link href="/" className="text-6xl font-bold tracking-tight uppercase font-heading">Metrica</Link>
        <div className="space-x-8 font-heading text-2xl">
            <Link href="/artworks" className={pathname === '/artworks' ? 'underline' : ''}>Artworks</Link>
            <Link href="/about" className={pathname === '/about' ? 'underline' : ''}>About</Link>
            <button className="snipcart-checkout relative">Checkout<span className="snipcart-items-count absolute -top-2 -right-2 text-xs px-1 rounded-full" />
            </button>

        </div>
        </nav>
    )
}