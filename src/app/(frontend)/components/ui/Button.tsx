"use client";
import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#0d5b27] text-black px-10 md:py-3 py-2 md:text-xs text-[10px] rounded-full font-medium transition hover:bg-[#e6bd32] ${className}`}
    >
      {text}
    </button>
  );
};
