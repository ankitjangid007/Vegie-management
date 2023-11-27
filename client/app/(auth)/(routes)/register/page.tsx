"use client";

import Button from "@/components/Button";
import { register } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      const res = await register(credentials);
      if (res) {
        router.replace("/login");
        toast.success("Registration success");
      }
    } catch (error) {
      toast.error("Registration failed");
    }
  };

  return (
    <div className="bg-white p-6 border rounded-lg shadow-xl lg:mb-10">
      <h1 className="text-2xl font-semibold mb-4">Register</h1>
      <input
        type="text"
        name="userName"
        placeholder="Your Full Name"
        value={credentials.userName}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg mb-4"
      />
      <input
        type="text"
        name="email"
        placeholder="Email Address"
        value={credentials.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg mb-4"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg mb-4"
      />
      <Button label="Register" onClick={handleRegister} />
    </div>
  );
};

export default Register;
