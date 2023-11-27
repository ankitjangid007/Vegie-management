"use client";

import Button from "@/components/Button";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { login } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const Login = () => {
  const [credentials, setCredentials] = useState({
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

  const handleLogin = async () => {
    // await signIn("credentials", {
    //   email: credentials.email,
    //   password: credentials.password,
    //   redirect: false,
    //   callbackUrl: "/",
    // });
    try {
      const res = await login(credentials);
      console.log(res);
      if (res) {
        localStorage.setItem("user", res.user._id);
        localStorage.setItem("userRole", res.user.role);
        localStorage.setItem("token", res.token);
        toast.success("Login successful");
        router.replace("/");
      }
    } catch (error) {
      toast.error("Login failed");
    }
  };

  return (
    <div className="bg-white p-6 border rounded-lg shadow-xl lg:mb-10">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
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
      <Button label="Login" onClick={handleLogin} />
    </div>
  );
};

export default Login;
