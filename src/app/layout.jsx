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
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css"
        />
      </head>
      <body>
        <Navbar />
        <main className="">{children}</main>
        <Footer />

        <script
          async
          src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"
        ></script>
        <div
          hidden
          id="snipcart"
          data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
          data-config-modal-style="side"
        ></div>
      </body>
    </html>
  )
}