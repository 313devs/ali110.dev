"use client";

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';
import { motion, LayoutGroup } from 'framer-motion';
import { Sacramento, Poppins} from 'next/font/google'

const sacramento = Sacramento({ 
  weight: '400', 
  style: 'normal',
  subsets : ["latin"],
  variable:"--font-sac" 
})
const poppinsLight = Poppins({
  weight: "200",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-pop-light",
})

const poppinsMedium = Poppins({
weight: '500',
style: 'normal',
subsets : ["latin"],
variable:"--font-pop-medium"
})

const navItems = {
  "/": {
    name: "Home",
  },
  "/about": {
    name: "About",
  },
  "/projects": {
    name: "Projects",
  },
  "/sign": {
    name: "Sign",
  },
};

function Logo(){
  return (
    <div className='flex w-full h-fit px-7 py-2 md:px-3 md:mb-6 pt-[-1]'>
    <Link href="/">
      <svg
        width="33"
        height="31"
        viewBox="0 0 33 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            delay: 0.1,
            duration: 2,
            type: "tween",
            stiffness:300
          }}
          d="M20.1034 0.812192L19.9769 0.5H19.64H14.56H14.2065L14.0886 0.833289L12.9286 4.11329L12.8661 4.28996L12.9352 4.46418L23.0152 29.9042L23.1403 30.22H23.48H31.28H32.0222L31.7434 29.5322L20.1034 0.812192ZM1.54097 29.5218L1.23947 30.22H2H10.64H10.9475L11.0863 29.9455L12.8275 26.5H17.84H18.5691L18.3064 25.8199L11.5864 8.41986L11.1458 7.27899L10.661 8.40178L1.54097 29.5218Z"
          stroke="currentColor"
          strokeWidth={1.5}
        />
      </svg>
    </Link>
    </div>
  );
}

export default function NavBar() {
  let pathname = usePathname() || '/';
  return (
    <aside className=" bg-white dark:bg-[#111010]">
      <div className="lg:sticky lg:top-20">
        <Logo />
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col mb-6 md:mb-0 relative px-4 md:px-0 pb-0 fade md:w-20 md:h-3/5 z-10"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle text-sm md:text-base",
                      {
                        "text-neutral-500": !isActive,
                        "font-popL": !isActive,
                        "font-popM": isActive,
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}

                      {isActive ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
