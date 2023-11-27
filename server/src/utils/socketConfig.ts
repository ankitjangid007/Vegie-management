import { Server } from "socket.io";

let io: any;
let users: any = {};

const initSocket = (server: any) => {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
    },
  });

  io.on("connection", (socket: any) => {
    socket.on("user-connected", (userId: any) => {
      users[userId] = { socketId: socket.id };
      console.log("User connected");
    });

    socket.on("get-data", (data: any) => {
      io.emit("fetch-vegie-data", {
        message: "You will receive the data",
      });
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });

  return io;
};

export { initSocket, io };
