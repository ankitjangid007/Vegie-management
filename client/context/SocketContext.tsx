"use client";

import React, { createContext, useContext, useEffect } from "react";
import socketIoClient from "socket.io-client";

export const SocketContext = createContext<any>(null);

const WS = process.env.NEXT_PUBLIC_BASE_URL as string;

const socket = socketIoClient(WS);

interface SocketContextProviderProps {
  children: React.ReactNode;
}

export const SocketContextProvider: React.FC<SocketContextProviderProps> = ({
  children,
}) => {
  useEffect(() => {
    let userId: string | null = null;

    if (typeof window !== "undefined") {
      userId = localStorage.getItem("user");
    }

    console.log("userId: ", userId);
    if (userId) {
      socket.emit("user-connected", userId);
    }
  }, [socket]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export function useSocket() {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error("useSocket must be used within a SocketContextProvider");
  }
  return context;
}
