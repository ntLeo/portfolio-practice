import Header from '@/Components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/Components/Footer'
import ThemeSwitch from '@/Components/ThemeSwitch'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] }) // latin is the default subset for Inter (DEFAULT FONT)

export const metadata = {
  title: 'Portfolio Practice',
  description: 'Frontend developer portfolio practice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // PAGE LAYOUT
  return (
    <html lang="en" className='!scroll-smooth' >
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28
      dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90` } suppressHydrationWarning={true}>
        <div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'></div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] xl:left[-28rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
        <ThemeContextProvider> {/* Using the ThemeContextProvider component from the theme-context file */} 
        <ActiveSectionContextProvider> {/* Using the ActiveSectionContextProvider component from the active-section-context file */}
        {/* HEADER COMPONENT */}
        <Header />

        {/* PAGE CONTENT INSIDE {children}  */}
        {children}
        
        {/* FOOTER */}
        <Footer />
          
        {/* TOASTER */}
        <Toaster position="top-center"/>
        <ThemeSwitch />

        </ActiveSectionContextProvider>
        </ThemeContextProvider>
        
        </body>
    </html>
  )
}
