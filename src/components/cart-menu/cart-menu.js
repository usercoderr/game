import React from "react";
import { Button } from "../button";
import { CartItem } from "../cart-item/cart-item";
import { calcTotalPrice } from "../utils";
import "./cart-menu.css";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className=".cart-menu_games_list">
        {items.length > 0 ? items.map((game) =><CartItem key={game.title} price={game.price} title={game.title}/>) : "Cart is empty"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu_arrange">
          <div className="cart-menu_total-price">
            <span>Total:</span>
            <span>{calcTotalPrice(items)} som</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Order
          </Button>
        </div>
      ) : null}
    </div>
  );
};
