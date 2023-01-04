import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Providers } from './theme-provider'
import { GlobalContextProvider } from './Context/store'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html>
      <head>
      <script src="https://unpkg.com/flowbite@1.5.3/dist/datepicker.js"></script>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
     integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
     crossOrigin=""/>
      </head>
      <body>
      <GlobalContextProvider>
      <Providers>{children}</Providers>
      </GlobalContextProvider>
      </body>
    </html>
  )
}
