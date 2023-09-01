import React from "react";

const Nav = () => {
  return (
    <div className="fixed w-full z-[101]">
      <div className="flex w-[100%] bg-[#292828] justify-center pt-2 pb-2">
        <div className="flex text-white gap-x-5">
          <input
            type="text"
            placeholder="Username"
            className="bg-[#3f3f3f] border border-white rounded-lg text-center"
          />
          <input
            type="text"
            placeholder="Password"
            className="bg-[#3f3f3f] border border-white rounded-lg text-center"
          />
          <button className="bg-[#3f3f3f] border border-white rounded-lg text-center w-[100px]">
            Click to verify
          </button>
          <button className="bg-[#3f3f3f] border border-white rounded-lg text-center w-[100px]">
            Login
          </button>
          <button className="bg-[#3f3f3f] border border-white rounded-lg text-center w-[100px]">
            Register
          </button>
          <button className="bg-[#3f3f3f] border border-white rounded-lg text-center w-[100px]">
            Trial
          </button>
        </div>
      </div>
      <div className="w-[100%] bg-[#191919] text-white pt-5 pb-5">
        <div className="flex justify-center">
          <button className="w-[250px] h-[80px] text-[2rem]">PHDRAGONBET</button>
          <button className="w-[90px] h-[80px] text-[.7rem]">HOME</button>
          <button className="w-[90px] h-[80px] text-[.7rem]">SLOTS</button>
          <button className="w-[90px] h-[80px] text-[.7rem]">FISHING</button>
          <button className="w-[90px] h-[80px] text-[.7rem]">
            LIVE CASINO
          </button>
          <button className="w-[90px] h-[80px] text-[.7rem]">SPORTS</button>
          <button className="w-[90px] h-[80px] text-[.7rem]">LOTTERY</button>
          <button className="w-[90px] h-[80px] text-[.7rem]">ARCADE</button>
          <button className="w-[90px] h-[80px] text-[.7rem]">PROMOTIONS</button>
          <button className="w-[90px] h-[80px] text-[.7rem]">REWARDS</button>
          <button className="w-[90px] h-[80px] text-[.7rem]">VIP</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
