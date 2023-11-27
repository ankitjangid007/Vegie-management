"use client";

import { useSocket } from "@/context/SocketContext";
import { createVegetable } from "@/services/vegetable.service";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const AddVegetableForm = () => {
  const [vegetable, setVegetable] = useState({
    name: "",
    price: "",
    unitPerPrice: "",
    unit: "kg",
    quantity: "",
  });

  const { socket } = useSocket();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setVegetable((prevVegetable) => ({
      ...prevVegetable,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log("Form submitted:", vegetable);
      const res = await createVegetable(vegetable);
      socket.emit("get-data", "hellloo there");

      if (res) {
        toast.success("Vegetable added successfully.");

        setVegetable({
          name: "",
          price: "",
          unitPerPrice: "",
          unit: "kg",
          quantity: "",
        });
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="max-w-md mt-4 mx-auto bg-white p-8 border rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center">Add Vegetable</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={vegetable.name}
            onChange={handleChange}
            className="form-input w-full border-2 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price:
          </label>
          <input
            type="number"
            name="price"
            value={vegetable.price}
            onChange={handleChange}
            className="form-input w-full border-2 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="unitPerPrice"
          >
            Unit Per Price:
          </label>
          <input
            type="number"
            name="unitPerPrice"
            value={vegetable.unitPerPrice}
            onChange={handleChange}
            className="form-input w-full border-2 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="unit"
          >
            Unit:
          </label>
          <select
            name="unit"
            value={vegetable.unit}
            onChange={handleChange}
            className="form-select w-full border-2 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            required
          >
            <option value="kg">kg</option>
            <option value="dozen">dozen</option>
            <option value="per">per</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="quantity"
          >
            Quantity:
          </label>
          <input
            type="number"
            name="quantity"
            value={vegetable.quantity}
            onChange={handleChange}
            className="form-input w-full border-2 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add Vegetable
        </button>
      </form>
    </div>
  );
};

export default AddVegetableForm;
