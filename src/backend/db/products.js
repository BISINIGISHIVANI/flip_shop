import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
 import {
  productImg1,
  productImg2,
  newImg1,
  newImg2,
  newImg3,
  newImg4,
  newImg5,
  newImg6,
  trendyImg1,
  trendyImg2,
  trendyImg3,
  trendyImg4,
  trendyImg5,
  trendyImg6,
  trendyImg7,
  trendyImg8,
  trendyImg9,
  trendyImg10
} from '../../assets/images/photos';
export const products = [
  {
    _id:uuid(),
    name: "Mast & Harbour",
    subtitle: "Women Blue Solid Bomber Jacket",
    categories: "Bomber Solid Jacket",
    rating: "4",
    price: "2699",
    discount: "55%",
    image:  productImg1 
  },
  {
    _id:uuid(),
    name: "Mast & Harbour",
    subtitle: "Women Yellow Solid Bomber Jacket",
    categories: "Bomber Solid Jacket",
    rating: "3.5",
    price: "2799",
    discount: "40%",
    image:  productImg2 
  },
  {
    _id:uuid(),
    name: "DressBerry",
    subtitle: "DressBerry-Women-Jackets-gray",
    categories: "Bomber Light weight Jacket",
    rating: "4",
    price: "4699",
    discount: "20%",
    image: newImg1 
  },
  {
    _id:3,
    name: "Mast & Harbour",
    subtitle: "Harvard Women Jackets",
    categories: "Bomber Thin Jacket",
    rating: "4.5",
    price: "2999",
    discount: "30%",
    image:  newImg2 
  },
  {
    _id:uuid(),
    name: "Mast & Harbour",
    subtitle: "Harvard Women Mustard Tailored Jacket",
    categories: "Bomber Light weight Jacket",
    rating: "5",
    price: "5699",
    discount: "20%",
    image:  newImg3 
  },
  {
    _id:5,
    name: "Mast & Harbour",
    subtitle: "Women Rose Solid Bomber Jacket",
    categories: "Bomber Thin Jacket",
    rating: "3",
    price: "4500",
    discount: "20%",
    image:  newImg4 
  },
  {
    _id:uuid(),
    name: "HRX",
    subtitle: "HRX-by-Hrithik-Roshan-Women-Jackets",
    categories: "Bomber Light weight Jacket",
    rating: "1.5",
    price: "7699",
    discount: "40%",
    image:  newImg5 
  },
  {
    _id:uuid(),
    name: "DressBerry",
    subtitle: "DressBerry-Women-Jackets-blue",
    categories: "Bomber Light weight Jacket",
    rating: "2",
    price: "3999",
    discount: "34%",
    image:  newImg6 
  },
  {
    _id:uuid(),
    name: "KASSUALLY",
    subtitle: "KASSUALLY Women Jackets blue",
    categories: "Bomber Thin Jacket",
    rating: "2.5",
    price: "3899",
    discount: "25%",
    image:  trendyImg1 
  },
  {
    _id:uuid(),
    name: "Leather Retail",
    subtitle: "leather Women Jackets black",
    categories: "Bomber Thin Jacket",
    rating: "4.5",
    price: "3499",
    discount: "30%",
    image:  trendyImg2 
  },
  {
    _id:uuid(),
    name: "Leather Retail",
    subtitle: "leather Women Jackets blue",
    categories: "Bomber Thin Jacket",
    rating: "4",
    price: "9999",
    discount: "40%",
    image:  trendyImg3 
  },
  {
    _id:uuid(),
    name: "HERENOW",
    subtitle: "Women solid blue regular trucker denim jacket",
    categories: "Bomber Light weight Jacket",
    rating: "3.5",
    price: "5799",
    discount: "70%",
    image: trendyImg4 
  },
  {
    _id:uuid(),
    name: "HERENOW",
    subtitle: "Women solid regular trucker denim jacket",
    categories: "Bomber Thin Jacket",
    rating: "3.6",
    price: "3499",
    discount: "60%",
    image:  trendyImg5 
  },
  {
    _id:uuid(),
    name: "KASSUALLY",
    subtitle: "KASSUALLY Women Jackets",
    categories: "Bomber Light weight Jacket",
    rating: "5",
    price: "2800",
    discount: "45%",
    image:  trendyImg6 
  },
  {
    _id:uuid(),
    name: "Leather Retail",
    subtitle: "leather Women Jackets",
    categories: "Bomber Solid Jacket",
    rating: "4",
    price: "3599",
    discount: "30%",
    image:  trendyImg7 
  },
  {
    _id:uuid() ,
    name: "KASSUALLY",
    subtitle: "KASSUALLY Women Jackets",
    categories: "Bomber Solid Jacket",
    rating: "4.5",
    price: "9999",
    discount: "80%",
    image:  trendyImg8 
  },
  {
    _id:uuid(),
    name: "Leather Retail",
    subtitle: "leather Women Jackets ",
    categories: "Bomber Light weight Jacket",
    rating: "4",
    price: "8999",
    discount: "55%",
    image:  trendyImg9 
  },
  {
    _id:uuid(),
    name: "HERENOW",
    subtitle: "Women solid regular trucker denim jacket",
    categories: "Bomber Light weight Jacket",
    rating: "5",
    price: "1200",
    discount: "30%",
    image:  trendyImg10 
  },
];
