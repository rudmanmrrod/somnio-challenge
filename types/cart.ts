import React from "react";

export interface CartType {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface CartContext {
  items: CartType[];
  setItems: React.Dispatch<React.SetStateAction<CartContext["items"]>>
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<CartContext["search"]>>
}
