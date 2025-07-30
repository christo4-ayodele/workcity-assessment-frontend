"use client";

import { useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();

  return () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
}
