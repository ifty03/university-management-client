import React from "react";
import banner from "../../Assets/Images/banner.jpg";

const Banner = () => {
  return (
    <section class="relative bg-black">
      <img
        class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src={banner}
        alt="Couple on a bed with a dog"
      />

      <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-black sm:to-transparent"></div>

      <div class="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div class="max-w-xl">
          <h1 className="text-white lg:text-6xl md:text-5xl text-4xl font-semibold">
            Develop a <span className="text-green-500">position</span> for
            learning new things.
          </h1>
          <p className="md:text-lg text-white mt-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            deserunt, soluta dolorum deleniti nesciunt id neque sunt quibusdam
            labore similique!
          </p>

          <div class="flex gap-4 mt-8 text-center">
            <a
              class="block w-full px-12 py-3 text-sm font-medium text-white rounded bg-green-600 sm:w-auto active:bg-green-500 hover:bg-green-700 focus:outline-none focus:ring hover:shadow-green-500 shadow-lg"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              class="block w-full px-12 py-3 text-sm font-medium bg-white rounded text-green-600 sm:w-auto hover:text-green-700 active:text-green-500 focus:outline-none focus:ring hover:shadow-white shadow-lg"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
