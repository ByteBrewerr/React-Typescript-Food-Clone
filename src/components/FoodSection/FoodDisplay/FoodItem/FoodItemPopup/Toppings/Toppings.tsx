import React, { useEffect } from "react";
import useProductsStore from "../../../../../../stores/productsStore";
import Topping from "./Topping/Topping";
import "./toppings.scss";
import useToppingsStore from "../../../../../../stores/toppingsStore";

const Toppings = () => {
  const { toppings, setToppings } = useProductsStore((state) => ({ toppings: state.toppings, setToppings: state.setToppings }));
  useEffect(() => {
    setToppings();
  }, []);
  return (
    <>
      <div className="toppingsContainer">
        {toppings.map((topping) => {
          return <Topping key={topping.name} name={topping.name} price={topping.price} />;
        })}
      </div>
    </>
  );
};
export default Toppings;
