import beef from "../assets/images/beef.jpg";
import chicken from "../assets/images/chicken.jpg";
import mutton from "../assets/images/mutton.jpg";
import seafood from "../assets/images/seafood.jpg";

const products = [
  {
    id: 1,
    name: "Premium Beef",
    category: "Beef",
    price: 1200,
    unit: "1 KG",
    image: beef,
    description: "Fresh and premium quality beef.",
  },

  {
    id: 2,
    name: "Beef Steak",
    category: "Beef",
    price: 1800,
    unit: "1 KG",
    image: beef,
    description: "Tender and delicious beef steak cuts.",
  },

  {
    id: 3,
    name: "Fresh Chicken",
    category: "Chicken",
    price: 750,
    unit: "1 KG",
    image: chicken,
    description: "Fresh and hygienically prepared chicken.",
  },

  {
    id: 4,
    name: "Chicken Breast",
    category: "Chicken",
    price: 950,
    unit: "1 KG",
    image: chicken,
    description: "Fresh boneless chicken breast.",
  },

  {
    id: 5,
    name: "Premium Mutton",
    category: "Mutton",
    price: 2200,
    unit: "1 KG",
    image: mutton,
    description: "Tender and fresh premium mutton.",
  },

  {
    id: 6,
    name: "Mutton Chops",
    category: "Mutton",
    price: 2500,
    unit: "1 KG",
    image: mutton,
    description: "Fresh and tender mutton chops.",
  },

  {
    id: 7,
    name: "Fresh Fish",
    category: "Seafood",
    price: 1600,
    unit: "1 KG",
    image: seafood,
    description: "Fresh and high-quality fish.",
  },

  {
    id: 8,
    name: "Premium Seafood",
    category: "Seafood",
    price: 2800,
    unit: "1 KG",
    image: seafood,
    description: "Fresh premium seafood selection.",
  },
];

export default products;