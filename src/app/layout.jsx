import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Metrica',
  description: 'Raw Beauty',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white font-sans">
        <Navbar />
        <main className="px-6 py-10 max-w-5xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  )
}