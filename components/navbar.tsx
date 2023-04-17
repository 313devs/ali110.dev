"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/about': {
    name: 'About',
  },
};

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex flex-col">
        {Object.entries(navItems).map(([path, { name }]) => (
          <li key={path}>
            <Link href={path}>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-slate-700 hover:bg-slate-200 rounded-md p-2"
                >
                  {name}
                </motion.span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
