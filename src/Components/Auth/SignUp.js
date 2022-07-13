import React from "react";
import loginImg from "../../Assets/Images/login2.png";
import Social from "../Social";

const SignUp = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage: `url("https://i.ibb.co/Ydtkn9G/wepik-creative-art-history-general-presentation-2022613-124950.png")`,
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content grid grid-cols-2 gap-20 text-white">
        <div class="p-14 bg-opacity-30 max-w-lg rounded-lg bg-slate-700">
          <h1 class="mb-5 text-5xl text-white font-bold">
            Learn From The <span className="text-green-500">Expert</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus consequuntur vel facere illo atque quibusdam earum
            placeat nesciunt obcaecati minus.
          </p>
          <div>
            <img src={loginImg} alt="" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl">Get Started With Me !</h2>
          <p className="opacity-50">Please Sign Up here !</p>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
