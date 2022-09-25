import React from "react";
import { useSelector } from "react-redux";
import { OrderItem } from "../../components/order-item/order-item";
import { calcTotalPrice } from "../../components/utils";
import "./order-page.css";

export const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  if (items.length < 1) {
    return <h1>Your Cart Is Empty</h1>;
  }
  return (
    <div className="order-page">
      <div className="order-page-left">
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>
      <div className="order-page-right">
        <div className="order-page_total-price">
          <span>
            {items.length} items on {calcTotalPrice(items)} som
          </span>
        </div>
      </div>
    </div>
  );
};
