'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()

    return (
        <nav className="flex justify-between items-center px-6 py-4 border-b">
        <Link href="/" className="text-2xl font-bold tracking-tight uppercase">Metrica</Link>
        <div className="space-x-4">
            <Link href="/artworks" className={pathname === '/artworks' ? 'underline' : ''}>Shop</Link>
            <Link href="/about" className={pathname === '/about' ? 'underline' : ''}>About</Link>
        </div>
        </nav>
    )
}