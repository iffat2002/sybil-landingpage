import React, { useState, useEffect, useRef } from "react";

const Faq = () => {
  const items = [
    <div key={1} className="">
      <p className="font-bold">How soon do i get paid?</p>
      <p className="text-lg mt-2 ">
        Don’t worry, bee happy, you can deposit your earning into your PayPal
        account as often as you like, after a minimum of one week in your
        account.
      </p>
    </div>,
    <div key={2} className="">
      <p className="font-bold">How do i work?</p>
      <p className="text-lg mt-2 ">
        Don’t worry, bee happy, you can deposit your earning into your PayPal
        account as often as you like, after a minimum of one week in your
        account.
      </p>
    </div>,
    <div key={3} className="">
      <p className="font-bold">Do i have to do anything?</p>
      <p className="text-lg mt-2 ">
        Don’t worry, bee happy, you can deposit your earning into your PayPal
        account as often as you like, after a minimum of one week in your
        account.
      </p>
    </div>,
    <div key={4} className="">
      <p className="font-bold">How soon do i get paid?</p>
      <p className="text-lg mt-2 ">
        Don’t worry, bee happy, you can deposit your earning into your PayPal
        account as often as you like, after a minimum of one week in your
        account.
      </p>
    </div>,
    <div key={5} className="">
      <p className="font-bold">How soon do i get paid?</p>
      <p className="text-lg mt-2 ">
        Don’t worry, bee happy, you can deposit your earning into your PayPal
        account as often as you like, after a minimum of one week in your
        account.
      </p>
    </div>,
    <div key={6} className="">
      <p className="font-bold">How soon do i get paid?</p>
      <p className="text-lg mt-2 ">
        Don’t worry, bee happy, you can deposit your earning into your PayPal
        account as often as you like, after a minimum of one week in your
        account.
      </p>
    </div>
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const handlePrev = () => {
    setScrollPosition(Math.max(scrollPosition - 1, 0));
  };
  
  const handleNext = () => {
    setScrollPosition(Math.min(scrollPosition + 1, items.length - 1));
  };
  console.log(scrollPosition)

  return (
    <div className="h-full overflow-x-hidden bg-[#FFCB20] relative ">
       <div className="absolute top-[90px] right-0 z-0 ">
      <svg width="180" height="301" viewBox="0 0 180 301" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="166.368" cy="150.245" rx="127" ry="184" transform="rotate(-52.9316 166.368 150.245)" fill="#38BDF8"/>
</svg>


      </div>
       <div className="absolute top-[289px] z-0 ">
      <svg width="172" height="369" viewBox="0 0 172 369" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="22.7443" cy="184.838" rx="148.67" ry="184" transform="rotate(3.72222 22.7443 184.838)" fill="#38BDF8"/>
</svg>

      </div>
      
     
      <div className="w-10/12 text-white m-auto my-20 max-sm:my-10 relative z-1">
        <p className="font-semi-bold">FAQ'S</p>
        <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl  font-bold mb-6 ">Frequently Asked Questions</h1>
        <p className="w-[54%] text-xl max-md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit
          expedita assumenda accusantium optio reiciendis, dolores praesentium,
        </p>
      </div>
      <div
        className="relative overflow-x-hidden  z-1 "
        style={{ width: '90%', marginLeft: "auto" }}
      >
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${scrollPosition * 35}%)` }}
        >
          {items.map((item, index) => (
            <div
              className="w-[350px] h-[230px] max-sm:w-[250px] max-sm:h-[255px] bg-white p-6 rounded-lg shadow-lg mr-6 flex-shrink-0 "
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
        <button
          className=" mr-8 mt-24 transform -translate-y-1/2 left-0 bg-transparent border-none cursor-pointer"
          onClick={handlePrev}
        >
         <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="46" height="46" rx="23" fill="white"/>
<rect x="1" y="1" width="46" height="46" rx="23" stroke="white" stroke-width="2"/>
<path d="M30.5 24H18H30.5ZM18 24L24 18L18 24ZM18 24L24 30L18 24Z" fill="white"/>
<path d="M18 24L24 30M30.5 24H18H30.5ZM18 24L24 18L18 24Z" stroke="#FFCB20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>
        <button
          className="  z-20 transform -translate-y-1/2 left-0 bg-transparent border-none cursor-pointer"
          onClick={handleNext}
        >
         <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="46" height="46" rx="23" fill="white"/>
<rect x="1" y="1" width="46" height="46" rx="23" stroke="white" stroke-width="2"/>
<path d="M18 24H30.5H18ZM30.5 24L24.5 18L30.5 24ZM30.5 24L24.5 30L30.5 24Z" fill="#FFCB20"/>
<path d="M30.5 24L24.5 30M18 24H30.5H18ZM30.5 24L24.5 18L30.5 24Z" stroke="#F59E0C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>
      </div>
      <div>
        
      </div>
     
    </div>
  );
};

export default Faq;
