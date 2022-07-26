import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const { shoppingCard } = useSelector((state) => state.cardSlice);
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div>Menus</div>
      <div>Baskets <span className="h6">- {shoppingCard.length} -</span></div>
    </div>
  );
}
