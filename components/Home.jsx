"use client";

import React, { useState } from "react";
import data from "@/data/sampleData.json";

const Home = () => {
  const { sample } = data;
  const [show, setShow] = useState(true);
  const [chatShow, setChatShow] = useState(false);
  const [social, setSocial] = useState(true)

  const handleShow = () => {
      setChatShow(prev => !prev)
    setShow(false)
    setSocial(false)
  }

  const handleCloseChat = () => {
    setSocial(true)
    setChatShow(prev => !prev)
  }
  return (
    <div className="w-full ">
      <div className="relative">
        {show && (
          <div>
            {sample.map((s) => {
              return (
                <div
                  key={s.id}
                  className="flex fixed z-[102] justify-center items-center h-[100vh] w-full ">
                  <div className="w-[70%] px-10 pb-11 flex items-center flex-col rounded-lg bg-primary text-white">
                    <div className="relative flex justify-center w-full mt-2 mb-2 border-b-2 border-yellow-500">
                      <p className="text-[2rem] font-bold">{s.title}</p>
                      <button
                        className="absolute right-0"
                        onClick={() => setShow((prev) => !prev)}>
                        close
                      </button>
                    </div>
                    <p className="mb-2 text-[1.2rem]">{s.pretitle}</p>
                    <img src={s.img} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div onClick={() => handleShow()}>
          <img
            src="https://cdn.livechat-files.com/api/file/lc/img/14423952/e2ed9d1f1709de9e0bde285933b751bf.png"
            alt="charImage"
            className="w-[60px] h-[60px] rounded-full fixed z-[103] bottom-5 right-2 cursor-pointer"
          />
        </div>
        {chatShow && (
          <div className="w-[300px] h-[500px] bg-secondary text-white flex justify-center fixed z-[104] bottom-5 right-2 rounded-md">
            <div className="w-[100%] relative">
              <div className="w-[90%] mx-auto">
                <div className="flex justify-between w-full pt-2 pb-2 border-b border-white">
                  <p>...</p>
                  <p>PHDREAM</p>
                  <button onClick={() => handleCloseChat()}>close</button>
                </div>
                <div className="flex items-center mt-4 mb-4">
                  <img
                    src="https://cdn.livechat-files.com/api/file/lc/img/14423952/e2ed9d1f1709de9e0bde285933b751bf.png"
                    alt=""
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div className="pl-2">
                    <p>PHDREAM Assistance</p>
                    <p>Support Agent</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#111010] absolute w-[100%] h-[360px] flex flex-col items-center justify-center">
                <p>Welcome chat here</p>
                <button className="absolute bottom-2 w-[90%] py-2 rounded-sm bg-[#b7573a]">
                  Chat now
                </button>
              </div>
            </div>
          </div>
        )}

        {social && (
          <div className="fixed flex flex-col text-white gap-y-3 right-5 top-60">
            <div className="w-[50px] h-[50px] rounded-lg flex items-center justify-center text-[.7rem] bg-[#111010] cursor-pointer">
              service
            </div>
            <div className="w-[50px] h-[50px] rounded-lg flex items-center justify-center text-[.7rem] bg-[#111010] cursor-pointer">
              facebook
            </div>
            <div className="w-[50px] h-[50px] rounded-lg flex items-center justify-center text-[.7rem] bg-[#111010] cursor-pointer">
              inbox
            </div>
            <div className="w-[50px] h-[50px] rounded-lg flex items-center justify-center text-[.7rem] bg-[#111010] cursor-pointer">
              download
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
