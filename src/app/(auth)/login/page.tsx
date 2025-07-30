"use client";
import { useState } from "react";
import axios from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/forms/LoginForm";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const router = useRouter();

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post("/auth/login", { email, password });
  //     localStorage.setItem("token", res.data.token);
  //     router.push("/dashboard/clients");
  //   } catch (err: any) {
  //     alert(err.response?.data?.message || "Login failed");
  //   }
  // };

  return (
    <LoginForm />
    // <div className="min-h-screen flex items-center justify-center bg-gray-50">
    //   <form
    //     onSubmit={handleLogin}
    //     className="bg-white p-6 rounded shadow-md w-96"
    //   >
    //     <h1 className="text-2xl font-bold mb-4">Login</h1>
    //     <input
    //       className="w-full p-2 mb-4 border"
    //       placeholder="Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       type="email"
    //     />
    //     <input
    //       className="w-full p-2 mb-4 border"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       type="password"
    //     />
    //     <button className="w-full bg-blue-500 text-white p-2 rounded">
    //       Login
    //     </button>
    //   </form>
    // </div>
  );
}
