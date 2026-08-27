import beef from "../assets/images/beef.jpg";
import beefMince from "../assets/images/beef-mince.jpg";
import beefRibs from "../assets/images/beef-ribs.jpg";
import beefBoneless from "../assets/images/beef-boneless.jpg";

import chicken from "../assets/images/chicken.jpg";
import chickenBreast from "../assets/images/chicken-breast.jpg";
import chickenLeg from "../assets/images/chicken-leg.jpg";
import chickenWings from "../assets/images/chicken-wings.jpg";
import bonelessChicken from "../assets/images/boneless-chicken.jpg";

import mutton from "../assets/images/mutton.jpg";
import muttonChops from "../assets/images/mutton-chops.jpg";
import muttonKarahiCut from "../assets/images/mutton-karahicut.jpg";
import muttonLegs from "../assets/images/mutton-legs.jpg";
import muttonRibs from "../assets/images/mutton-ribs.jpg";

import seafood from "../assets/images/seafood.jpg";
import freshFish from "../assets/images/fresh fish.jpg";
import fishFillet from "../assets/images/fish fillet.jpg";
import freshPrawns from "../assets/images/fresh-prawns.jpg";
import shrimp from "../assets/images/shrimp.jpg";

const products = [
  // ================= BEEF =================
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
    name: "Beef Mince",
    category: "Beef",
    price: 1200,
    unit: "1 KG",
    image: beefMince,
    description: "Freshly prepared beef mince.",
  },
  {
    id: 3,
    name: "Beef Ribs",
    category: "Beef",
    price: 1600,
    unit: "1 KG",
    image: beefRibs,
    description: "Fresh and juicy beef ribs.",
  },
  {
    id: 4,
    name: "Beef Boneless",
    category: "Beef",
    price: 1900,
    unit: "1 KG",
    image: beefBoneless,
    description: "Premium boneless beef.",
  },

  // ================= CHICKEN =================
  {
    id: 5,
    name: "Fresh Chicken",
    category: "Chicken",
    price: 750,
    unit: "1 KG",
    image: chicken,
    description: "Fresh and hygienically prepared chicken.",
  },
  {
    id: 6,
    name: "Chicken Breast",
    category: "Chicken",
    price: 950,
    unit: "1 KG",
    image: chickenBreast,
    description: "Fresh boneless chicken breast.",
  },
  {
    id: 7,
    name: "Chicken Legs",
    category: "Chicken",
    price: 800,
    unit: "1 KG",
    image: chickenLeg,
    description: "Fresh chicken leg pieces.",
  },
  {
    id: 8,
    name: "Chicken Wings",
    category: "Chicken",
    price: 850,
    unit: "1 KG",
    image: chickenWings,
    description: "Fresh and tender chicken wings.",
  },
  {
    id: 9,
    name: "Chicken Boneless",
    category: "Chicken",
    price: 1000,
    unit: "1 KG",
    image: bonelessChicken,
    description: "Premium boneless chicken.",
  },

  // ================= MUTTON =================
  {
    id: 10,
    name: "Premium Mutton",
    category: "Mutton",
    price: 2200,
    unit: "1 KG",
    image: mutton,
    description: "Tender and fresh premium mutton.",
  },
  {
    id: 11,
    name: "Mutton Chops",
    category: "Mutton",
    price: 2500,
    unit: "1 KG",
    image: muttonChops,
    description: "Fresh and tender mutton chops.",
  },
  {
    id: 12,
    name: "Mutton Karahi Cut",
    category: "Mutton",
    price: 2200,
    unit: "1 KG",
    image: muttonKarahiCut,
    description: "Perfectly cut mutton for karahi.",
  },
  {
    id: 13,
    name: "Mutton Leg",
    category: "Mutton",
    price: 2400,
    unit: "1 KG",
    image: muttonLegs,
    description: "Fresh premium mutton leg.",
  },
  {
    id: 14,
    name: "Mutton Ribs",
    category: "Mutton",
    price: 2300,
    unit: "1 KG",
    image: muttonRibs,
    description: "Fresh and juicy mutton ribs.",
  },

  // ================= SEAFOOD =================
  {
    id: 15,
    name: "Fresh Fish",
    category: "Seafood",
    price: 1600,
    unit: "1 KG",
    image: freshFish,
    description: "Fresh and high-quality fish.",
  },
  {
    id: 16,
    name: "Fish Fillet",
    category: "Seafood",
    price: 1800,
    unit: "1 KG",
    image: fishFillet,
    description: "Fresh boneless fish fillet.",
  },
  {
    id: 17,
    name: "Fresh Prawns",
    category: "Seafood",
    price: 2800,
    unit: "1 KG",
    image: freshPrawns,
    description: "Premium fresh prawns.",
  },
  {
    id: 18,
    name: "Shrimp",
    category: "Seafood",
    price: 2600,
    unit: "1 KG",
    image: shrimp,
    description: "Fresh quality shrimp.",
  },
  {
    id: 19,
    name: "Premium Seafood",
    category: "Seafood",
    price: 2800,
    unit: "1 KG",
    image: seafood,
    description: "Fresh premium seafood selection.",
  },
];

export default products;