"use client";
import AxiosInstance from "@/config/Axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { FaCode, FaArrowLeft, FaRedo } from "react-icons/fa";
import { Slide, toast, Zoom } from "react-toastify";

const OTPVerification: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [UserEmail, setUserEmail] = useState("Cobra-AI-2.0@gmail.com");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const Router = useRouter();

  const handleChange = (index: number, value: string): void => {
    if (!/^\d?$/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // Move to previous input on backspace
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 4);
    const pasteArray = pasteData.split("").slice(0, 4);

    const newOtp = [...otp];
    pasteArray.forEach((char, index) => {
      if (/^\d?$/.test(char)) {
        newOtp[index] = char;
      }
    });

    setOtp(newOtp);

    // Focus the next empty input or last input
    const nextEmptyIndex = newOtp.findIndex((digit) => digit === "");
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus();
    } else {
      inputRefs.current[3]?.focus();
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const otpString = otp.join("");

    if (otpString.length < 4) {
      toast.error("Please enter the complete OTP before proceeding.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      return;
    }

    try {
      const res = await AxiosInstance.post("/users/verify", {
        email: UserEmail,
        otp: otpString,
      });

      if (res.status === 200) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
        localStorage.setItem("token", res.data.token);
        Router.push("/");
      }
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    }
  };

  const handleResendOTP = (): void => {
    console.log("Resending OTP...");
    // Resend OTP logic here
  };

  return (
    <div
      className="min-h-screen bg-gray-950 
      bg-gradient-to-br from-gray-950 via-emerald-900/30 to-green-700/50 text-white flex items-center justify-center p-4"
    >
      <div className="max-w-md w-full">
        {/* Back Button */}
        <Link
          href={"/register"}
          className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors mb-8"
        >
          <FaArrowLeft className="text-xl" />
          <span className="text-xl font-bold font-h underline">
            Back to Register
          </span>
        </Link>

        {/* Logo & Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-20 h-20 rounded-xl flex items-center justify-center">
              <img
                src="/img/logo.png"
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Cobra AI 2.0
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Verify Your Account</h1>
          <p className="text-gray-400 font-inter">
            Enter the 4-digit code sent to your email
          </p>
          <span className="text-emerald-400 mt-5">{UserEmail}</span>
        </div>

        {/* OTP Form */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* OTP Inputs */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-300 text-center">
                Verification Code
              </label>
              <div className="flex justify-center space-x-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el: any) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChange(index, e.target.value)
                    }
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                      handleKeyDown(index, e)
                    }
                    onPaste={handlePaste}
                    className="w-16 h-16 bg-gray-700/50 border-2 border-gray-600 rounded-xl text-center text-2xl font-bold text-green-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                  />
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Verify Account
            </button>
          </form>

          {/* Resend OTP */}
          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-400 mb-4">Didn't receive the code?</p>
            <button
              onClick={handleResendOTP}
              type="button"
              className="flex cursor-pointer items-center justify-center space-x-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors mx-auto group"
            >
              <FaRedo className="group-hover:rotate-180 transition-transform duration-500" />
              <span>Resend OTP</span>
            </button>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            The OTP will expire in{" "}
            <span className="text-emerald-400">5:00</span> minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
