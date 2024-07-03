'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext, useEffect, useState } from "react";
// Context
import { CartItemsContext } from "@/context/cart";
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const {items, search, setSearch} = useContext(CartItemsContext);
  const [quantity, setQuantity] = useState(0);
  const [showSearch, setShowSearch] = useState(true);
  const pathname = usePathname()

  // Effects
  useEffect(() => {
    if (pathname === '/cart') {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  }, [pathname])

  useEffect((() => {
    const currentQuantity = items.reduce((prev, val) => prev + val.quantity, 0);
    setQuantity(currentQuantity)
  }), [items])

  return (
    <nav className="bg-indigo-300 fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://somniosoftware.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://cdn.prod.website-files.com/64c2dab8cd500969e09f51f5/64c30294686438dbe41e79c7_Logo.svg" className="h-8" alt="Flowbite Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
          <button type="button" className="text-white font-medium rounded-lg text-sm px-4 py-2 text-center">
            <Link href="/cart">
              <FontAwesomeIcon size="2x" icon={faCartShopping} color="white" />
            </Link>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-black bg-slate-300 border-2 border-white rounded-full top-7 end-11">{ quantity }</div>
          </button>
        </div>
        {
          showSearch && (
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <FontAwesomeIcon icon={faSearch} color="black" />
                </div>
                <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Search products..." value={search} onInput={(e) => setSearch(e.target.value)} />
              </div>
            </div>
          )
        }
      </div>
    </nav>
  )
};