import React from "react";
import Image from "next/image";
import Link from "next/link";
const LearnMore = () => {

  return (
    <div className="h-[582px]">
      <div className="flex justify-between w-10/12 m-auto p-20 px-0">
        <div className="w-[571px]">
          <Image src="/logo2.svg" width={118} height={49} alt="logo 2"></Image>
          <h1 className="text-5xl font-bold mt-2 mb-5">Sybil supports the Pollinators</h1>
          <p className="text-xl leading-8">
            Bees, and other pollinators are threatened every day. With Sybil's
            dedication to support the Pollinator Partnership in Canada and the
            United States of America by donating a portion of our data
            transactions, we are supporting P2 in their research and efforts in
            finding ways to change the future for pollinators and secure our
            own.
          </p>
        </div>
        <div className="flex w-fit gap-5 ml-12 ">
          <div className="w-[339px] relative box-border">
            <Image className="mb-5" src="/image1.svg" width={339} height={155}></Image>
            <Image src="/image2.svg" width={339} height={233}></Image>
          </div>
          <div className="w-[214px] relative box-border">
            <Image className="mb-5" src="/image3.svg" width={214} height={264}></Image>
            <Image src="/image4.svg" width={214} height={122}></Image>
          </div>
        </div>
      </div>
      <div className=" w-10/12 m-auto text-xl "><p>Interested in learning more? Check out <Link className="font-bold" href="https://www.pollinatorpartnership.ca/">https://www.pollinatorpartnership.ca/</Link> </p></div>
    </div>
  );
};

export default LearnMore;
