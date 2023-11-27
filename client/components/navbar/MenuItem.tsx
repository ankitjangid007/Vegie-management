"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      className="px-4 py-3 font-semibold hover:bg-gray-800 cursor-pointer text-right"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default MenuItem;
