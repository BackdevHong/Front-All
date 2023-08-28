import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";

const Type = ({ orderType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      const res = await axios.get(`http://localhost:4000/${orderType}`);
      setItems(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const ItemComponent = orderType === "products" ? Products : null;

  const optionItems = items.map((item) => {
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />;
  });

  return (
    <div>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>총 가격 :</p>
      <div
        style={{
          display: "flex",
          flexDirection: orderType === "option" ? "column" : "row",
        }}
      >
        {optionItems}
      </div>
    </div>
  );
};

export default Type;
