import React from "react";
import Image from "next/image";

const Honeygraph = () => {
  return (
    <div>
      <div className="w-10/12 m-auto">
        <p
          className="text-base font-bold text-[#FEB534]
leading-[22px]"
        >
          HOW MUCH CAN I EARN?
        </p>
        <h1 className="text-5xl font-extrabold tracking-tighter">
          The more you refer Sybil, the more you earn!
        </h1>
      </div>
      <div className="w-full my-10">
        <img src="/honeygraph.svg"></img>
      </div>
      <div className="w-10/12 m-auto my-36">
        <p
          className="text-lg font-semibold text-[#FEB534]
leading-[26px] "
        >
          HOW DO I BEGIN EARNING?
        </p>
        <h1 className="text-6xl font-bold tracking-tighter">
          Sybil is Simple and easy to start!{" "}
        </h1>
        <p className="my-10 text-xl">
          Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
          Auctor turpis semper id sit ornare maecenas lectus sed.
        </p>
        <div className="m-auto w-fit">
          <button className="text-2xl font-bold rounded-full border-2 border-[#FFCB20] h-[64px] px-8 m-auto">
            Get Sybil Now
          </button>
        </div>
        <div className="flex justify-between items-center mt-[-50px]">
          <div className="w-[259px] px-1">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.2 58H41.8C49.4367 58 53.255 58 55.6275 55.5663C58 53.133 58 49.2159 58 41.3824V38.6128C58 30.7792 58 26.8625 55.6275 24.4288C53.5528 22.3007 50.3725 22.0335 44.5 22M17.5 22C11.6274 22.0335 8.44706 22.3007 6.37244 24.4288C4 26.8625 4 30.7792 4 38.6128V41.3824C4 49.2159 4 53.133 6.37244 55.5663C7.1819 56.3967 8.15967 56.9437 9.4 57.3043"
                stroke="#38BDF8"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M31 3V39M31 39L22 29.3077M31 39L40 29.3077"
                stroke="#38BDF8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h2 className="text-xl my-4 font-bold">Download</h2>
            <p className="text-lg">
              Get the App from your preferred store and set up Sybil.
            </p>
          </div>
          <div className="w-[259px] px-1">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3333 50.1667H25M12.3333 60H31C34.7336 60 36.6006 60 38.0266 59.2854C39.281 58.6571 40.301 57.6541 40.94 56.4207C41.6666 55.0184 41.6666 53.1825 41.6666 49.5111V11.4889C41.6666 7.81745 41.6666 5.9817 40.94 4.5794C40.301 3.34587 39.281 2.343 38.0266 1.71452C36.6006 1 34.7336 1 31 1H12.3333C8.59963 1 6.73276 1 5.30669 1.71452C4.05226 2.343 3.03239 3.34587 2.39326 4.5794C1.66663 5.9817 1.66663 7.81742 1.66663 11.4889V49.5111C1.66663 53.1825 1.66663 55.0184 2.39326 56.4207C3.03239 57.6541 4.05226 58.6571 5.30669 59.2854C6.73276 60 8.59959 60 12.3333 60Z"
                stroke="#38BDF8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h2 className="text-xl my-4 font-bold">Use your phone</h2>
            <p className="text-lg">
              Don't change a thing, use your phone like you always do.
            </p>
          </div>

          <div className="w-[259px] px-1">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>

            <h2 className="text-xl my-4 font-bold">Make money</h2>
            <p className="text-lg">
              Cash out with PayPal whenever you want your earnings.
            </p>
          </div>

          <div className="w-[259px] px-1">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_15_6)">
                <path d="M57 3H0V64H57V3Z" fill="white" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.875 27.1458C11.875 20.8291 16.66 15.7083 22.5625 15.7083C28.4651 15.7083 33.25 20.8291 33.25 27.1458C33.25 33.4626 28.4651 38.5833 22.5625 38.5833C16.66 38.5833 11.875 33.4626 11.875 27.1458Z"
                  fill="#38BDF8"
                />
                <path
                  d="M34.1228 33.6606C34.0148 33.8797 34.0606 34.153 34.2466 34.3004C35.6279 35.3946 37.3372 36.0417 39.1875 36.0417C43.7784 36.0417 47.5 32.0589 47.5 27.1458C47.5 22.2328 43.7784 18.25 39.1875 18.25C37.3372 18.25 35.6279 18.8971 34.2466 19.9914C34.0606 20.1388 34.0148 20.4119 34.1228 20.631C35.0821 22.5764 35.625 24.7933 35.625 27.1458C35.625 29.4984 35.0821 31.7152 34.1228 33.6606Z"
                  fill="#38BDF8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.0227 42.9024C13.9496 41.5428 17.7898 41.125 22.5624 41.125C27.3391 41.125 31.1821 41.5436 34.11 42.9062C37.2994 44.3903 39.2379 46.9182 40.2539 50.4875C40.7301 52.1604 39.5559 53.8333 37.9378 53.8333H7.19153C5.57149 53.8333 4.39482 52.1579 4.87248 50.4819C5.88986 46.9121 7.83128 44.3849 11.0227 42.9024Z"
                  fill="#38BDF8"
                />
                <path
                  d="M35.1939 38.6759C34.2107 38.7412 34.153 40.1549 35.0564 40.5752C37.5321 41.7274 39.3963 43.4234 40.7331 45.5882C41.8302 47.3645 43.5337 48.75 45.5233 48.75H49.7522C51.4318 48.75 52.6573 46.964 52.0664 45.2191C52.0324 45.1187 51.9971 45.0191 51.9605 44.9202C51.1473 42.7227 49.7534 41.1049 47.6895 40.0738C45.7518 39.1057 43.3259 38.7061 40.4681 38.5854L40.4211 38.5833H40.3743C38.6909 38.5833 36.9327 38.5602 35.1939 38.6759Z"
                  fill="#38BDF8"
                />
              </g>
              <defs>
                <clipPath id="clip0_15_6">
                  <rect
                    width="57"
                    height="61"
                    fill="white"
                    transform="translate(0 3)"
                  />
                </clipPath>
              </defs>
            </svg>

            <h2 className="text-xl my-4 font-bold">Refer Friends</h2>
            <p className="text-lg">
            The more you refer, the more you earn each month
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Honeygraph;
