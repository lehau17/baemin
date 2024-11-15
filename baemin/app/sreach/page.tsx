"use client";
import { ShoppingCartOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import TypeSelector from "./type";
import AreaSelector from "./area";
import FilterSelector from "./filter";
import ResultFood from "./result";
import { useSearchParams } from "next/navigation";
import { getfoodSearch } from "@/apis/foods.api";

const Page: React.FC = () => {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    // Lấy giá trị query param từ URL
    console.log("check usersearch params", searchParams);
    const name = (searchParams as any).get("name"); // lấy giá trị tham số "name"
    if (name) {
      getfoodSearch(name).then((res) => {
        setData(res);
      });
    }
  }, [searchParams]);

  const items = data.data?.map((item: any) => {
    return {
      id: item.id,
      address: "102/12 Cống Quỳnh, Quận 1, TP. HCM",
      name: item.food_name,
      kind: "Quán Ăn",
      img: item.food_images,
    };
  });

  return (
    <>
      <div className="w-full flex flex-row justify-between items-center border-b border-solid">
        <div className="flex flex-row gap-3">
          <AreaSelector />
          <TypeSelector />
        </div>
        <div className="flex items-center justify-center">
          <FilterSelector />
        </div>
      </div>
      <div className="my-3 flex flex-row">Search Query: {searchQuery}</div>
      <ResultFood items={items} />
    </>
  );
};

export default Page;
