import React, { useState } from "react";
import { useQuery } from "react-query";
import productService from "../../../services/productService";
import productsStore from "../../../stores/productsStore";
import { observer } from "mobx-react-lite";
const FoodNavigation = () => {
  const [active, setActive] = useState(0);
  const foodCategoriesEng = ["popular", "burgers", "boxes", "salads", "snacks", "desserts", "drinks", "sauces"];
  const foodCategoriesRus = ["Популярное", "Бургеры", "Боксы", "Салаты", "Закуски", "Десерты", "Напитки", "Соусы"];

  const { setProducts, setIsLoading } = productsStore;

  const { isLoading } = useQuery({
    queryKey: ["products", active],
    queryFn: () => {
      setIsLoading(isLoading);
      return productService.getProductsByCategory(foodCategoriesEng[active]);
    },
    onSuccess(data) {
      setProducts(data || []);
    },
    onSettled() {
      setIsLoading(false);
    },
  });

  return (
    <nav className="navigation">
      {foodCategoriesRus.map((category, index) => (
        <button
          className={index === active ? "navigation__button--active" : "navigation__button"}
          onClick={() => {
            setActive(index);
          }}
          key={index}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default observer(FoodNavigation);
