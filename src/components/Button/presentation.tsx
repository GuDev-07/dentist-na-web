import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "dark" | "ghost" | "whatsapp";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "dark",
  children,
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold cursor-pointer transition-all duration-300 ease-in-out";

  const variants = {
    dark: "bg-ink text-white hover:bg-black shadow-sm hover:shadow-md",
    ghost:
      "bg-transparent text-ink border border-[#d7cfc6] hover:border-gold hover:text-gold",
    whatsapp:
      "bg-whatsapp text-white hover:brightness-95 shadow-lg shadow-whatsapp/25",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
