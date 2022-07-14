import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { toast } from "react-hot-toast";
import Loading from "../Shared/Loading/Loading";

const Social = ({ setCustomError }) => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fUser, fLoading, fError] =
    useSignInWithFacebook(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);
  if (gLoading || fLoading || gitLoading) {
    return <Loading />;
  }
  return (
    <div className="flex justify-between items-center text-3xl">
      <FcGoogle
        onClick={async () => {
          if (gError) {
            setCustomError(gError?.message);
          }
          await signInWithGoogle();
          toast.success("user created successfully !");
        }}
        className="border-slate-500 border md:w-36 w-24 h-12 py-[5px] rounded-md hover:bg-green-200 cursor-pointer"
      />
      <FaFacebook
        onClick={async () => {
          if (fError) {
            setCustomError(fError?.message);
          }
          await signInWithFacebook();
          toast.success("user created successfully !");
        }}
        className="border border-slate-500 md:w-36 w-24 h-12 py-[5px] rounded-md hover:bg-green-200 text-blue-500 cursor-pointer"
      />
      <AiFillGithub
        onClick={async () => {
          if (gitError) {
            setCustomError(gitError?.message);
          }
          await signInWithGithub();
          toast.success("user created successfully !");
        }}
        className="border border-slate-500 md:w-36 w-24 h-12 py-[5px] rounded-md hover:bg-green-200 hover:text-black cursor-pointer"
      />
    </div>
  );
};
export default Social;
