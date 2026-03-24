import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'

export const metadata = {
  title: 'CLINT PS PORTFOLIO',
  description: 'Clint ps MERN Stack Developer'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
        >
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}