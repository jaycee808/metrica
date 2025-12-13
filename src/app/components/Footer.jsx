import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-[var(--black)] text-[var(--white)] py-24 font-heading">
        <div className="max-w-full grid gap-12 md:gap-36 md:grid-cols-3 text-sm md:text-base">
            {/* Left: Studio Info */}
            <div className="px-8 md:px-32">
            <h3 className="uppercase tracking-wider text-xs mb-4 font-heading">Studio</h3>
            <p className="leading-relaxed font-body">
                Metrica Studio<br />
                44 Geometry Street<br />
                London, UK
            </p>
            </div>

            {/* Center: Navigation */}
            <div className="flex flex-col space-y-3 uppercase tracking-wide font-sub-heading text-base px-8 md:px-18">
            <Link href="/collections" className="hover:underline">Collections</Link>
            <Link href="/gallery" className="hover:underline">Gallery</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            </div>

            {/* Right: Legal */}
            <div className="text-right md:text-left px-8 md:px-12">
            <p className="uppercase tracking-wider text-base mb-4 font-sub-heading">
                © {new Date().getFullYear()} Metrica
            </p>
            <p className="text-sm leading-relaxed font-body">All rights reserved.</p>
            </div>
        </div>
        
            {/* Blue Ink Credit*/}
            <div className="mt-10 text-center uppercase tracking-widest text-xs opacity-80">
                <Link
                href="https://www.blueinkstudio.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                >
                Designed &amp; Developed by Blue Ink Studio
                </Link>
            </div>
        </footer>
    )
}
