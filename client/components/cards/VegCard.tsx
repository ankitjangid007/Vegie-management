"use client";

import { useSocket } from "@/context/SocketContext";
import {
  deleteVegetableById,
  getVegetables,
} from "@/services/vegetable.service";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { FaEdit, FaTimes } from "react-icons/fa";

interface VegetableCardProps {
  vegetable: {
    _id: string;
    name: string;
    price: number;
    unitPerPrice: number;
    unit: string;
    quantity: number;
    createdAt: string;
    updatedAt: string;
  };
}

const VegetableCard: React.FC<VegetableCardProps> = ({ vegetable }) => {
  const {
    _id,
    name,
    price,
    unitPerPrice,
    unit,
    quantity,
    createdAt,
    updatedAt,
  } = vegetable;

  const path = usePathname();
  const router = useRouter();

  const { socket } = useSocket();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteVegetableById(id);
      if (res) {
        toast.success("Vegetable deleted successfully.");
        socket.emit("get-data", "hellloo there");
        await getVegetables();
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="bg-white p-6 border rounded-lg shadow-md relative mb-4 ">
      {path === "/admin" ? (
        <>
          <button
            className="absolute top-2 right-2 p-2 text-gray-600 hover:text-red-500"
            onClick={() => handleDelete(_id)}
          >
            <FaTimes size={20} />
          </button>
          <button
            className="absolute bottom-2 right-2 p-2 text-gray-600 hover:text-blue-500"
            onClick={() => {
              router.push(`/admin/edit-vegetable?id=${_id}`);
            }}
          >
            <FaEdit size={20} />
          </button>
        </>
      ) : null}
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">
        {name}
      </h2>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold text-blue-500">Price:</span> $
        {price.toFixed(2)} per {unit} ({unitPerPrice} {unit})
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold text-blue-500">Quantity:</span>{" "}
        {quantity} {unit}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold text-blue-500">Created At:</span>{" "}
        {new Date(createdAt).toLocaleString()}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold text-blue-500">Updated At:</span>{" "}
        {new Date(updatedAt).toLocaleString()}
      </p>
    </div>
  );
};

export default VegetableCard;
