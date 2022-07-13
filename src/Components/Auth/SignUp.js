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
      <div class="hero-content grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 text-white">
        <div class="lg:p-14 p-5 bg-opacity-30 max-w-lg rounded-lg bg-slate-700">
          <h1 class="mb-5 text-4xl text-white font-bold">
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
          <h2 className="text-3xl mb-2 pl-5">Get Started With Me 🔐</h2>
          <p className="opacity-50 mb-8 pl-5">Please Sign Up here !</p>
          <div className="bg-opacity-30 p-5 rounded-lg bg-slate-700">
            <Social />
            <div className="flex items-center gap-3 text-lg my-5">
              <div className="w-full h-[1px] bg-gray-400"></div>
              or
              <div className="w-full h-[1px] bg-gray-400"></div>
            </div>
            {/* sign up from */}
            <div class="card flex-shrink-0 w-full">
              <div class="card-body">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-white">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    class="input border border-slate-400 bg-slate-800  text-white"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-white">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    class="input border border-slate-400 bg-slate-800  text-white"
                  />
                  <label class="label">
                    <a href="#" class="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div class="form-control mt-6">
                  <button class="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
