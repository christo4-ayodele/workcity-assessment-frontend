"use client";

import React, { useEffect, useState } from "react";
import axios from "@/utils/axiosInstance"; // the one with token attached
import { useLogout } from "@/utils/logout";
import Link from "next/link";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export function Layout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const logout = useLogout();
  useEffect(() => {
    async function fetchUser() {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await axios.get("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data.user);
      } catch (err) {
        console.error("Failed to fetch user");
      }
    }

    fetchUser();
  }, []);
  return (
    <section>
      <section className="flex items-center px-5 text-white justify-between bg-black h-[50px] w-full">
        <h1 className="text-[24px] font-bold">WORKCITY</h1>
        <nav>
          <ul className="flex gap-4">
            <li>Home</li>
            <li>My Clients</li>
            <li>Project</li>
            {user && <li className="text-sm">Welcome, {user.name}</li>}
            {user ? (
              <li className="text-sm">
                <button
                  onClick={logout}
                  className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </section>

      <main>{children}</main>
    </section>
  );
}

export default Layout;
