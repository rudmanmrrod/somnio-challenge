"use client"
import Link from "next/link";
import { useContext } from "react";
// Context
import { CartItemsContext } from "@/context/cart";

const Cart = () => {
  // context
  const {items} = useContext(CartItemsContext);

  return (
    <div className="min-h-screen gap-4 p-24 justify-items-center">
      <h5 className="mb-4 font-bold tracking-tight text-gray-900 text-lg">Your Cart</h5>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900">
          <tbody>
            {
              items.length != 0 && items.map(
                (item) => (
                  <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {item.title}
                    </th>
                    <td className="px-6 py-4">
                      {item.quantity}
                    </td>
                    <td className="px-6 py-4">
                      USD {item.quantity * item.price}
                    </td>
                  </tr>
                )
              )
            }
            {
              items.length === 0 && (
                <tr className="bg-white border-b">
                  <td className="px-6 py-4" colSpan={3}>
                    The cart is empty
                  </td>
                </tr>
              )
            }
            </tbody>
        </table>
      </div>
      <div className="text-center">
        <button
          type="button"
          className="text-white border bg-indigo-400 rounded-lg text-sm text-center px-5 py-2 mt-6"
        >
          <Link href="/">
            Keep buying
          </Link>
        </button>
      </div>
    </div>
  )
};

export default Cart;