"use client";
import { dbFirebase } from "@/app/firebaseConfig";
import { get, onValue, ref } from "firebase/database";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SongItemSearch } from "../Song/SongItemSearch";

export const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSearch = (event: any) => {
    event.preventDefault();
    const key = event.target.key.value;
    router.push(`/search?key=${key}`);
  }
  const defaultKey = searchParams.get("key") || "";


  const [dataFinal, setDataFinal] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (event: any) => {
    const Search = event.target;
    const Value = Search.value.trim();
    const searchState = document.querySelector(".SearchState");
    setSearchValue(Value);
    if (dataFinal.length > 0 && Value !== "") {
      if (searchState) {
        searchState.classList.add("active");
        searchState.classList.remove("noActive");
        console.log(dataFinal);
        console.log(Value);
      }
    } else if (Value === "") {
      if (searchState) {
        searchState.classList.add("noActive");
        searchState.classList.remove("active");
        console.log(dataFinal);
        console.log(Value);
      }
    }
  }
  useEffect(() => {
    const dataSearchSong: any[] = [];
    const fetchData = async () => {
      const items = await get(ref(dbFirebase, 'songs'));
      items.forEach((item: any) => {
        const key = item.key;
        const data = item.val();
        if (data.title.toLowerCase().includes(searchValue.toLowerCase())) {
          const listNameSinger: any = [];
          for (let index = 0; index < data.singerId.length; index++) {
            const element = data.singerId[index];
            onValue(ref(dbFirebase, '/singers/' + element), (item) => {
              listNameSinger.push(item.val().title);
            })
          }

          dataSearchSong.push({
            id: key,
            image: data.image,
            title: data.title,
            singer: listNameSinger.join(', '),
            time: "4:32",
            link: "/songs/" + key,
          });
        }
        setDataFinal(dataSearchSong);
      })
    }
    fetchData();
  }, [searchValue]);

  const handleFocus = () => {
    const searchState = document.querySelector(".SearchState");
    if (searchState) {
      searchState.classList.add("active");
      searchState.classList.remove("noActive");
    }
  };

  const handleBlur = () => {
    const searchState = document.querySelector(".SearchState");
    if (searchState) {
      searchState.classList.add("noActive");
      searchState.classList.remove("active");
    }
  };

  return (
    <>
      <form
        className="bg-[#212121] rounded-[50px] mt-[20px] py-[16px] px-[30px] sticky top-[20px] left-[20px] text-white flex items-center z-10"
        onSubmit={handleSearch}
      >
        <label htmlFor="search" className="text-[22px] pr-[20px] hover: cursor-pointer">
          <FaSearch />
        </label>
        <input
          id="search"
          name="key"
          type="text"
          defaultValue={defaultKey}
          placeholder="Tìm kiếm..."
          className="bg-transparent text-[16px] font-[500] leading-[20px] outline-none flex-1"
          onChange={handleSearchChange}
          onFocus={handleFocus} // Khi input được focus
          onBlur={handleBlur}   // Khi input mất focus
        />
        <div className="bg-bg2 absolute  top-[20px] pt-[54px] z-[-1] w-[100%] opacity-80 mx-[-30px] mt-[-20px] rounded-t-[50px] rounded-b-[25px]  px-[20px] py-[10px] text-white SearchState noActive">
          <div className="border-t border-[#494949] max-h-[350px] overflow-y-auto">
            {dataFinal.length > 0 ? (
              dataFinal.map((item, index) => (
                <SongItemSearch item={item} key={index} />
              ))
            ) : (
              <div className="mt-[10px]">Không tìm thấy</div>
            )}
          </div>
        </div>
      </form>
    </>
  )
}