"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  size?: string;
  transparent?: boolean;
  backgroundColor?: string;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  size,
  transparent,
  backgroundColor,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ width: `${size}`, backgroundColor }}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        px-2
        ${
          outline && transparent
            ? "bg-transparent text-white border-white px-2 rounded-none"
            : ""
        }
        ${outline && !transparent ? "bg-white" : "bg-gray-900"}
        ${outline && !transparent ? "border-black" : "bg-gray-900"}
        ${outline && !transparent ? "text-black" : "text-white"}
        ${small ? "text-xs" : "text-sm"}
        ${small ? "py-1" : "py-3"}
        ${small ? "font-normal" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
      `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
