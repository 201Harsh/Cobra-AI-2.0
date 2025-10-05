"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { FaCode, FaArrowLeft, FaRedo } from "react-icons/fa";

const CheckOTP: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [userEmail, setUserEmail] = useState("Cobra-AI-2.0@gmail.com");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string): void => {
    if (!/^\d?$/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
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
    const pasteData = e.clipboardData.getData("text").slice(0, 6);
    const pasteArray = pasteData.split("").slice(0, 6);

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
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const otpString = otp.join("");
    console.log("OTP submitted:", otpString);
    // OTP verification logic will be handled by backend
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
          href={"/login"}
          className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors mb-8"
        >
          <FaArrowLeft className="text-xl" />
          <span className="text-xl font-bold font-h underline">
            Back to Login
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
          <h1 className="text-3xl font-bold mb-2">Check OTP</h1>
          <p className="text-gray-400 font-inter">
            Enter the 6-digit code sent to your email
          </p>
          <span className="text-emerald-400 mt-5">{userEmail}</span>
        </div>

        {/* OTP Form */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* OTP Inputs */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-300 text-center">
                Verification Code
              </label>
              <div className="flex justify-center space-x-2 sm:space-x-3">
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
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-700/50 border-2 border-gray-600 rounded-xl text-center text-xl sm:text-2xl font-bold text-green-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
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

export default CheckOTP;
