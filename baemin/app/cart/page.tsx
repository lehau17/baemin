"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import HeaderNav from "@/components/headerNav";
import ScrollBar from "@/components/scrollBar";
import ScrollFood from "@/components/scrollFood";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Image from "next/image";
import DetailsCart from "./detailsCart";
import { Button } from "antd";

export default function Home() {
  const [cartData, setCartData] = useState<any>(null);
  console.log(cartData);
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (token) {
          const response = await axios.get("http://localhost:3000/carts/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setCartData(response.data.data); // Store the cart data in state
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, []);

  if (!cartData) {
    return <div>Loading...</div>; // Loading state while fetching data
  }

  const totalPrice = cartData.cart_items.reduce((total: number, item: any) => {
    return total + item.price * item.quantity; // Calculate the total price for all items
  }, 0);

  return (
    <>
      <div className="flex flex-row w-full h-20 bg-white">
        <div className="w-1/2 h-full flex flex-row items-center gap-3">
          <div className="ml-10 text-4xl text-beamin font-bold">
            <ShoppingCartOutlined />
          </div>
          <div className="text-2xl text-beamin">|</div>
          <div className="text-3xl text-beamin font-bold">Giỏ hàng</div>
        </div>
        <div className="w-1/2 h-full flex items-center gap-3"></div>
      </div>
      <div className="mt-4 px-16 flex flex-col gap-4 pb-16 rounded-md">
        <div className="w-full h-16 bg-white grid grid-cols-12">
          <div className="pl-8 col-span-4 flex items-center flex-row gap-5">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800"
            />
            <span className="text-base font-normal"> Món Ăn</span>
          </div>
          <div className="col-span-2 flex items-center justify-center flex-row gap-3">
            <span className="text-base font-normal text-gray-600">Đơn giá</span>
          </div>
          <div className="col-span-2 flex items-center justify-center flex-row gap-3">
            <span className="text-base font-normal text-gray-600">
              Số lượng
            </span>
          </div>
          <div className="col-span-2 flex items-center justify-center flex-row gap-3">
            <span className="text-base font-normal text-gray-600">Số tiền</span>
          </div>
          <div className="col-span-2 flex items-center justify-center flex-row gap-3">
            <span className="text-base font-normal text-gray-600">
              Thao tác
            </span>
          </div>
        </div>
        <DetailsCart Details={cartData.cart_items} />

        {/* Cart summary section */}
        <div className="flex flex-row w-full h-24 bg-white mt-8 shadow-md p-4 rounded-md">
          <div className="w-1/2 flex flex-row gap-4 items-center">
            <div className="cursor-pointer hover:text-red-600">Hủy</div>
            <div>Quán đã chọn:</div>
            <div className="font-semibold">{cartData.name}</div>{" "}
            {/* Cart name */}
          </div>
          <div className="w-1/2 flex flex-row gap-4 items-center justify-end">
            <div className="text-xl">Tổng thanh toán:</div>
            <div className="text-red-600 text-2xl">
              ₫{totalPrice.toLocaleString()}
            </div>{" "}
            {/* Total price */}
            <Button
              href="/checkout"
              style={{ background: "#3AC5C9", color: "white" }}
              className="bg-beamin text-white w-40 h-10 rounded-md hover:brightness-105"
            >
              Thanh toán
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
