import React from "react";
import { IProduct } from "../interfaces";
import { useAppDispatch } from "../app/store";
import Button from "./schema/Button";
import { removeProduct } from "../app/features/cart/cartSlice";

interface CartProductsProps {
  product: IProduct;
}

const CartProducts: React.FC<CartProductsProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { id, title, thumbnail, price, qty } = product;

  return (
    <div>
      <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
          <img
            className="object-cover"
            src={thumbnail}
            alt={`product ${id} image`}
          />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-indigo-600">
            39% OFF
          </span>
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight text-gray-900">
              {title.length >= 20 ? `${title.slice(0, 20)}...` : title}
            </h5>
          </a>
          <div className="mt-2 mb-2 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-black">${price}</span>
              <span className="text-sm text-indigo-900 line-through">$699</span>
            </p>
          </div>
          <div className="mb-3">
            <h3 className="text-sm text-black">Number of purchases: {qty}</h3>
          </div>
          <Button
            variant={"danger"}
            fullWidth
            onClick={() => dispatch(removeProduct(product))}
          >
            <svg
              viewBox="0 0 24 24"
              className="mr-2 h-6 w-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ff0000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M10 11V17"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M14 11V17"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M4 7H20"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
