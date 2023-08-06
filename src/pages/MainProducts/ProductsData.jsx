// images
import UnionCoffee from "../../image/products/Union_Coffee_Bag_w4lykd.webp";
import Expresso_bean_bag from "../../image/products/expresso_bean_bag.jpg";
import Cardamom_Cream_Cap_Cold_rew from "../../image/products/Cardamom_Cream_Cap_Cold_rew.jpg";
import chocolate_coffee from "../../image/products/chocolate_coffee.jpg";
import coffee_milk from "../../image/products/coffee_milk.jpg";

let ProductsData = [
  {
    id: 0,
    title: "UnionCoffeeBean",
    productType: "coffeeBean",
    price: "1000",
    img: {
      src: UnionCoffee,
      alt: "UnionCoffee",
    },
  },
  {
    id: 1,
    title: "ChocolateCoffee",
    productType: "coffeeBeverage",
    price: "1000",
    img: {
      src: chocolate_coffee,
      alt: "chocolate_coffee",
    },
  },
  {
    id: 2,
    title: "ExpressoBean",
    productType: "coffeeBean",
    price: "1000",
    img: {
      src: Expresso_bean_bag,
      alt: "ExpressoBeenBag",
    },
  },
  {
    id: 3,
    title: "CardamomCream",
    productType: "coffeeBeverage",
    price: "1000",
    img: {
      src: Cardamom_Cream_Cap_Cold_rew,
      alt: "Cardamom_Cream_Cap_Cold_rew",
    },
  },
  {
    id: 4,
    title: "CoffeeMilk",
    productType: "coffeeBeverage",
    price: "1000",
    img: {
      src: coffee_milk,
      alt: "coffee_milk",
    },
  },
];

export default ProductsData;
