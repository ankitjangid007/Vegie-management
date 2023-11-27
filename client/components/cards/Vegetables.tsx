"use client";

import VegetableCard from "@/components/cards/VegCard";
import { useSocket } from "@/context/SocketContext";
import { getVegetables } from "@/services/vegetable.service";
import React, { useEffect, useState } from "react";

const Vegetables = () => {
  const [vegetables, setVegetables] = useState([]);

  const { socket } = useSocket();

  const getVegetableList = async () => {
    try {
      const res = await getVegetables();
      if (res) {
        setVegetables(res);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getVegetableList();
  }, []);

  useEffect(() => {
    socket.on("fetch-vegie-data", (data: any) => {
      console.log("get socket data", data);
      getVegetableList();
    });
  }, [socket]);

  return (
    <div className="grid p-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {vegetables.map((vegetable: any) => (
        <VegetableCard key={vegetable._id} vegetable={vegetable} />
      ))}
    </div>
  );
};

export default Vegetables;
