'use client'
import { useEffect, useState, useContext } from "react";
// Components
import Card from "@/components/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
// Services
import { getProducts } from "@/services/products";
// Types
import { ApiProduct } from '@/types/product';
import { CartType } from "@/types/cart";
// Context
import { CartItemsContext } from "@/context/cart";

export default function Home() {
  // states
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<ApiProduct[]>([]);
  const [end, setEnd] = useState<number>(3);
  // context
  const {items, setItems, search} = useContext(CartItemsContext);

  // effects
  useEffect(() => {
    getProducts().then((product) => {
      setProducts(product);
      setProductsFiltered(product);
    })
  }, []);

  useEffect(() => {
    if (search == '') {
      setProductsFiltered(products)
    } else {
      setProductsFiltered(products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase())))
    }
  }, [search])

  // functions
  const loadMore = () => {
    setEnd(end + 3);
  }

  const onAddItem = (id:number) => {
    const product = products.find( item => item.id === id);
    const cartProduct: CartType = {
      id: product?.id || 0,
      title: product?.title || '',
      price: product?.price || 0,
      quantity: 1
    }
    if(items.length === 0) {
      setItems([...items,cartProduct]);
    } else {
      const finded = items.findIndex(i => i.id == cartProduct.id)
      if (finded != -1) {
        items[finded].quantity += 1;
        setItems(items);
      } else {
        setItems([...items,cartProduct]);
      }
    }
  }

  return (
    <main className="min-h-screen grid grid-cols-3 gap-4 p-24 justify-items-center">
      {
        productsFiltered.length > 0 && productsFiltered.slice(0, end).map(
          (product) => (
            <Card
              {...product}
              currency="USD"
              onAddItem={(id) => onAddItem(id)}
              key={product.id}
            />
          )
        )
      }
      {
        productsFiltered.length === 0 && (
          <div className="col-span-3">
            <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-white" role="alert">
              There are no products available
            </div>
          </div>
        )
      }
      {
        end < productsFiltered.length && (
          <div className="col-span-3">
            <button
              type="button"
              className="text-black border bg-white font-medium rounded-lg text-sm text-center px-5 py-2"
              onClick={() => loadMore()}
            >
              <FontAwesomeIcon icon={faEye} color="black" /> Load More
            </button>
          </div>
        )
      }
    </main>
  );
}
