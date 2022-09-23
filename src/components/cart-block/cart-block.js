import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart";

import { calcTotalPrice } from "../utils";
import "./cart-block.css";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className="cart-block">
      
      <ItemsInCart quantity={items.length}/>
      <AiOutlineShoppingCart className="cart-block_icon" size={30} onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />
      {totalPrice > 0 ? (
        <span className="cart-block_total_price">{totalPrice} som</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};
