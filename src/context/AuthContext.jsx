"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Cargar sesión del localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (role) => {
    const userData = {
      id: 1,
      name: role === "admin" ? "Admin" : role === "vendedor" ? "Vendedor" : "Cliente",
      email: `${role}@apexcommerce.com`,
      role: role,
    };
    
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    
    // Redirigir según el rol
    if (role === "admin") {
      router.push("/dashboard/admin");
    } else if (role === "vendedor") {
      router.push("/dashboard/vendedor");
    } else {
      router.push("/dashboard/cliente");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de AuthProvider");
  }
  return context;
}