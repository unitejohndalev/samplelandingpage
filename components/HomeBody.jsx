"use client";

import React, { useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "@/styles/globals.css";

import data from "@/data/gameData.json";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const HomeBody = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const { sampleGame } = data;

  //FOR PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 16;

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = sampleGame.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const npage = Math.ceil(sampleGame.length / productPerPage);

  const pageTopRef = useRef(null);
  const handleChange = (event, value) => {
    setCurrentPage(value);
    pageTopRef.current.scrollIntoView();
  };
  return (
    <div
      className="w-full h-full flex flex-col items-center bg-[#212121]"
      ref={pageTopRef}>
      <div className="w-[80%] flex flex-col justify-center items-center mt-[160px]">
        <div className="flex items-center justify-center w-[80%] pt-2 pb-2 gap-x-8  text-white relative">
          <p className="absolute left-0">notice</p>
          <div>notice here</div>
          <div>notice here</div>
          <div>notice here</div>
          <div>notice here</div>
          <div>notice here</div>
          <div>notice here</div>
          <div>notice here</div>
          <div>notice here</div>
        </div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <img
                className="h-[100%]"
                src="https://images.b728484.com:42666/mcs-images/announcement/dreamplay/mcs_1688623239760_SABA21-GDT-PC1.png"
              />
            </div>
            <div className="embla__slide">
              <img
                className="h-[100%]"
                src="https://images.b728484.com:42666/mcs-images/announcement/dreamplay/mcs_1688623250123_SABA21-GDT-PC2.png"
              />
            </div>
            <div className="embla__slide">
              <img
                className="h-[100%]"
                src="https://images.b728484.com:42666/mcs-images/announcement/dreamplay/mcs_1688623259610_SABA21-GDT-PC3.png"
              />
            </div>
            <div className="embla__slide">
              <img
                className="h-[100%]"
                src="https://images.b728484.com:42666/mcs-images/announcement/dreamplay/mcs_1688623266198_SABA21-GDT-PC4.png"
              />
            </div>
            <div className="embla__slide">
              <img
                className="h-[100%]"
                src="https://images.b728484.com:42666/mcs-images/announcement/dreamplay/mcs_1688623273556_SABA21-GDT-PC5.png"
              />
            </div>
          </div>
        </div>
        <div className="flex w-[80%] gap-x-5 mt-5">
          <div className="bg-[#383838ff] w-[10%] rounded-md">
            <p className="bg-[#555454] text-center text-[1.3rem] text-yellow-500 font-bold rounded-t-md">
              VIP
            </p>
            <div className="flex items-center justify-center mt-2 mb-4">
              <button className="rounded-md w-[60px] h-[60px] text-center border border-yellow-500">
                icon
              </button>
            </div>
          </div>
          <div className="bg-[#383838ff] w-[45%] rounded-md">
            <p className="bg-[#555454] text-center text-[1.3rem] text-yellow-500 font-bold rounded-t-md">
              HOT PROMOTION
            </p>
            <div className="flex items-center justify-center mt-2 mb-2 gap-x-5">
              <button className="rounded-md w-[60px] h-[60px] text-center border border-yellow-500">
                icon
              </button>
              <button className="rounded-md w-[60px] h-[60px] text-center border border-yellow-500">
                icon
              </button>
              <button className="rounded-md w-[60px] h-[60px] text-center border border-yellow-500">
                icon
              </button>
              <button className="rounded-md w-[60px] h-[60px] text-center border border-yellow-500">
                icon
              </button>
              <button className="rounded-md w-[60px] h-[60px] text-center border border-yellow-500">
                icon
              </button>
            </div>
          </div>
          <div className="bg-[#383838ff] w-[45%] rounded-md">
            <p className="bg-[#555454] text-center text-[1.3rem] text-yellow-500 font-bold rounded-t-md">
              BEST SUPPORT
            </p>
            <div className="flex items-center justify-center mt-2 mb-2 gap-x-5">
              <button className="rounded-md w-[60px] h-[60px] text-center border border-yellow-500">
                icon
              </button>
              <button className="rounded-md w-[60px] h-[60px] text-center border border-yellow-500">
                icon
              </button>
              <button className="rounded-md w-[60px] h-[60px] text-center border border-yellow-500">
                icon
              </button>
              <button className="rounded-md w-[60px] h-[60px] text-center border border-yellow-500">
                icon
              </button>
              <button className="rounded-md w-[60px] h-[60px] text-center border border-yellow-500">
                icon
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center w-[80%] h-[40vh] mt-5 gap-x-5">
          {currentProducts.map((game) => {
            return (
              <div key={game.id}>
                <div className="flex flex-col items-center justify-center ">
                  <button className="border border-black w-[100px] rounded-lg h-[100px] text-yellow-500">
                    {game.title}
                  </button>
                  <p className="text-yellow-500">game title</p>
                </div>
              </div>
            );
          })}
        </div>
        <Stack spacing={2} className="mt-[20px]">
          <Pagination
            count={npage}
            page={currentPage}
            onChange={handleChange}
          />
        </Stack>
      </div>
    </div>
  );
};

export default HomeBody;
