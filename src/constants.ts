import { ReactNode } from "react";

export type ShoppingCartProviderProps = {
  children: ReactNode;
};

export type dataItem = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  rating: number;
  category: string;
};

export type ShoppingCartProps = {
  cartQuantity: number;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItems: CartItem[];
  dataItems: dataItem[];
  emptyCart: () => void;
  appliedFilters: filterType[];
  setAppliedFilters: React.Dispatch<React.SetStateAction<filterType[]>>;
  removeFromSelectedFilters: (title: string) => void;
  storeItems: dataItem[];
  setStoreItems: React.Dispatch<React.SetStateAction<dataItem[]>>;
};

export type CartItem = {
  id: number;
  quantity: number;
};

export type ButtonGroupProp = {
  id: number;
};
export type CartItemProps = {
  id: number;
  quantity: number;
};

export type filterType = {
  t: string;
  v: string;
};

export type CartState = {
  cartItems: CartItem[];
  dataItems: dataItem[];
  storeItems: dataItem[];
  appliedFilters: filterType[];
  cartQuantity:number;
};
