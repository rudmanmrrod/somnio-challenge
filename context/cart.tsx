"use client"
import React, { createContext, useState, useMemo } from 'react';
// types
import { CartContext } from '@/types/cart';

export const CartItemsContext = createContext<CartContext | null>(null);

export const CartProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [items, setItems] = useState<CartContext["items"]>([]);
  const [search, setSearch] = useState<CartContext["search"]>('');

  const value = useMemo(() => ({items, setItems}), [items]);
  const searchValue = useMemo(() => ({search, setSearch}), [search]);

  return (
    <CartItemsContext.Provider value={{...value, ...searchValue}}>
      { children }
    </CartItemsContext.Provider>
  );
}