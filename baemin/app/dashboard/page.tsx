"use client";
import { getListCate } from "@/apis/cates.api";
import HeaderNav from "@/components/headerNav";
import ScrollBar from "@/components/scrollBar";
import ScrollFood from "@/components/scrollFood";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [cate, setCate] = useState([]);
  useEffect(() => {
    getListCate().then((res: any) => {
      setCate(res);
    });
  }, []);
  const items = cate.map((item: any) => {
    return {
      name: item.cate_name,
      imageSrc: item.cate_icon,
      description: item.cate_description,
    };
  });
  //   const items = [
  //     {
  //       name: "Gà Rán",
  //       imageSrc: "/images/Ga.png",
  //       description: "Thức ăn nhanh",
  //     },
  //     {
  //       name: "Burger",
  //       imageSrc: "/images/burger.jpg",
  //       description: "Thức ăn nhanh",
  //     },
  //     {
  //       name: "Bún",
  //       imageSrc: "/images/noddle.png",
  //       description: "Thức ăn nhanh",
  //     },
  //     {
  //       name: "Mì",
  //       imageSrc: "/images/noddle.png",
  //       description: "Thức ăn nhanh",
  //     },
  //     {
  //       name: "Burger",
  //       imageSrc: "/images/noddle.png",
  //       description: "Thức ăn nhanh",
  //     },
  //   ];

  const banneritems = [
    {
      id: "1",
      name: "anh 1",
      url: "/images/map1.png",
    },
    {
      id: "2",
      name: "anh 2",
      url: "/images/map2.png",
    },
    {
      id: "3",
      name: "anh 32",
      url: "/images/map3.png",
    },
    {
      id: "3",
      name: "anh 32",
      url: "/images/map4.png",
    },
  ];

  const TodayFood = cate.map((item: any) => {
    return {
      title: item.cate_name,
      items: item.foods.map((food: any) => {
        return {
          id: food.id,
          name: food.food_name,
          address: "123 phường 4", // corrected spelling of "address"
          img: food.food_images,
          kind: "Quán ăn", // adjusted spelling to "Quán ăn" if that was the intention
        };
      }),
    };
  });

  // const TodayFood = {
  //   title: "Hôm Nay ăn gì",
  //   items: [
  //     {
  //       id: "1",
  //       name: " Gà Ủ Muối Hoa Tiêu - Food",
  //       adrress: "4A Đường Số 71, P. Tân Quy, Quận 7, TP. HCM",
  //       img: "/food/ga1.jpg",
  //       kind: "Quan An",
  //     },
  //     {
  //       id: "1",
  //       name: " Gà Ủ Muối Hoa Tiêu - Food",
  //       adrress: "4A Đường Số 71, P. Tân Quy, Quận 7, TP. HCM",
  //       img: "/food/ga1.jpg",
  //       kind: "Quan An",
  //     },
  //     {
  //       id: "1",
  //       name: " Gà Ủ Muối Hoa Tiêu - Food",
  //       adrress: "4A Đường Số 71, P. Tân Quy, Quận 7, TP. HCM",
  //       img: "/food/ga1.jpg",
  //       kind: "Quan An",
  //     },
  //     {
  //       id: "1",
  //       name: " Gà Ủ Muối Hoa Tiêu - Food",
  //       adrress: "4A Đường Số 71, P. Tân Quy, Quận 7, TP. HCM",
  //       img: "/food/ga1.jpg",
  //       kind: "Quan An",
  //     },
  //     {
  //       id: "1",
  //       name: " Gà Ủ Muối Hoa Tiêu - Food",
  //       adrress: "4A Đường Số 71, P. Tân Quy, Quận 7, TP. HCM",
  //       img: "/food/ga1.jpg",
  //       kind: "Quan An",
  //     },
  //     {
  //       id: "1",
  //       name: " Gà Ủ Muối Hoa Tiêu - Food",
  //       adrress: "4A Đường Số 71, P. Tân Quy, Quận 7, TP. HCM",
  //       img: "/food/ga1.jpg",
  //       kind: "Quan An",
  //     },
  //   ],
  // };
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 pt-3 pl-8 pr-8  z-40">
          <div className="flex flex-col fixed  bg-white w-64 rounded-2xl  pl-3 pt-2  pb-5 gap-3  ">
            <span>Thực đơn </span>
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 cursor-pointer hover:bg-slate-100"
              >
                <div className="flex flex-row items-center gap-1">
                  <img
                    src={item.imageSrc} // Use the URL directly
                    width="30"
                    height="30"
                    alt={item.description}
                  />

                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-9 w-full  pt-3 pr-8 gap-3 flex flex-col">
          <ScrollBar items={banneritems}></ScrollBar>
          {TodayFood.map((food, index) => {
            return <ScrollFood key={index} items={food}></ScrollFood>;
          })}
        </div>
      </div>
    </>
  );
}
