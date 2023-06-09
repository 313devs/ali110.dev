
import Navbar from '@/components/navbar'
import './globals.css'
import { Sacramento, Poppins} from 'next/font/google'

export const metadata = {
  title: '110',
  icons: {
    shortcut: '/favicon.ico',
  },
}

const sacramento = Sacramento({ 
  weight: '400', 
  style: 'normal',
  subsets : ["latin"],
  variable:"--font-sac",
  display:"block"

})
const poppinsLight = Poppins({
  weight: "200",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-pop-light",
  display:"block"
});

const poppinsMedium = Poppins({
weight: '500',
style: 'normal',
subsets : ["latin"],
variable:"--font-pop-medium",
display:"block"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const fontClasses = `${sacramento.variable} ${poppinsLight.variable} ${poppinsMedium.variable}`;

  return (
    <html
      lang="en"
      className={"text-black bg-white dark:text-white dark:bg-[#111010]"}
    >
      <body
        className={`max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto bg-transparent ${fontClasses}`}
      >
        <Navbar />
        <main className={`min-w-0 md:mt-0 flex flex-col px-2 md:px-0 h-full md:w-full bg-white dark:bg-[#111010]`}>
          {children}
        </main>
      </body>
    </html>
  );
}


